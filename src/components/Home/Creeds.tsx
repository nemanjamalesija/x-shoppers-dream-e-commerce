import { useEffect } from 'react';
import CreedArticle from './CreedArticle';
import { creeds } from '../../utils/creedCards';
import useObserver from '../../helpers/useObserver';
import { useRefsContext } from '../../refsContext';
import './creeds.css';

const Creeds = () => {
  const { creedsRef } = useRefsContext();
  const { sectionObserver, isObserving } = useObserver();

  const creedsObserver = sectionObserver();

  useEffect(() => {
    if (!creedsRef.current) return;
    creedsObserver.observe(creedsRef.current);

    return () => creedsObserver.disconnect();
  }, [creedsRef, isObserving, creedsObserver]);

  return (
    <section
      className={`${
        isObserving
          ? 'section-featured-products section-tansform'
          : 'section-featured-products section-tansform section--hidden '
      }`}
      ref={creedsRef}
    >
      <div className="container-creeds">
        <header className="creeds-header">
          <h3 className="heading-tertiary heading-tertiary-align-start">
            Creeds we live by
          </h3>

          <h4 className="heading-fourth">
            Elevate your home with our attitude of excellence and timeless
            style.
          </h4>
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
