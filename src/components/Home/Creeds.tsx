import { useState, useEffect, useRef } from 'react';
import CreedArticle from './CreedArticle';
import { creeds } from '../../utils/creedCards';
import './creeds.css';
import { useObserverContext } from '../../observerContext';

const Creeds = () => {
  const sectionRef = useRef(null);
  const [isHidden, setIsHidden] = useState(false);
  const { sectionObserver, isObserving } = useObserverContext();
  const creedsObserver = sectionObserver();

  useEffect(() => {
    setIsHidden(true);
    const sectionCreeds = sectionRef.current;
    creedsObserver.observe(sectionCreeds);

    return () => creedsObserver.unobserve(sectionCreeds);
  }, [isObserving, creedsObserver]);

  return (
    <section
      className={`${
        isHidden
          ? 'section section-creeds section--hidden'
          : 'section section-creeds'
      }`}
      ref={sectionRef}
    >
      <div className="container container-creeds">
        <header className="creeds-header">
          <h3 className="heading-tertiary heading-tertiary-creeds">About us</h3>
          <p className="creeds-paragraph">
            Consectetur, non aspernatur nam soluta, <br></br>
            et more.
          </p>
        </header>
        <div className="creeds-cards-div">
          {creeds.map((el) => {
            return <CreedArticle key={el.id} {...el} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Creeds;
