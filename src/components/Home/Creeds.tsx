import { useState, useEffect } from 'react';
import CreedArticle from './CreedArticle';
import { creeds } from '../../utils/creedCards';
import useObserver from '../../helpers/useObserver';
import './creeds.css';
import { useProductsContext } from '../../productsContext';

const Creeds = () => {
  const [isHidden, setIsHidden] = useState(false);
  const { creedsRef } = useProductsContext();
  const { sectionObserver, isObserving } = useObserver();
  const creedsObserver = sectionObserver();

  useEffect(() => {
    if (!creedsRef.current) return;
    setIsHidden(true);
    creedsObserver.observe(creedsRef.current);

    return () => creedsObserver.disconnect();
  }, [creedsRef, isObserving, creedsObserver]);

  return (
    <section
      className={`${
        isHidden
          ? 'section-creeds section--hidden section-tansform '
          : 'section-creeds section-tansform'
      }`}
      ref={creedsRef}
    >
      <div className="container container-creeds">
        <header className="creeds-header">
          <h3 className="heading-tertiary heading-tertiary-creeds">
            Creeds we live by
          </h3>
          <p className="creeds-paragraph">
            Elevate your home with our attitude of excellence and timeless
            style.
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
