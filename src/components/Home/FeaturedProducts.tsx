import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useProductsContext } from '../../productsContext';
import SingleFeaturedProduct from './SingleFeaturedProduct';
import Loading from '../Loading';
import useObserver from '../../helpers/useObserver';
import './featuredProducts.css';

const FeaturedProducts = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isHidden, setIsHidden] = useState(false);
  const { sectionObserver, isObserving } = useObserver();
  const featuredProductsObserver = sectionObserver();
  const {
    state: { products, loading },
  } = useProductsContext();
  const featuredProducts = products.slice(14, 17);

  useEffect(() => {
    if (!sectionRef.current) return;
    setIsHidden(true);
    featuredProductsObserver.observe(sectionRef.current);

    return () => featuredProductsObserver.disconnect();
  }, [isObserving, featuredProductsObserver]);

  if (loading) return <Loading sectionRef={sectionRef} isHidden={isHidden} />;

  return (
    <section
      className={`${
        isHidden
          ? 'section-featured-products section--hidden section-tansform'
          : 'section-featured-products section-tansform'
      }`}
      ref={sectionRef}
    >
      <div className="container">
        <h3 className="heading-tertiary heading-featured-products">
          Featured Products
        </h3>
        <div className="container-featured-products container-featured-products">
          {featuredProducts.map((el) => {
            return <SingleFeaturedProduct key={el.id} {...el} />;
          })}
        </div>
        <div className="btn-center-div">
          <Link to="/products">
            <button className="btn btn-all-products btn-center">
              All Products
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
