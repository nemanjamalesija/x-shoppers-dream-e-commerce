import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useProductsContext } from '../../productsContext';
import SingleFeaturedProduct from './SingleFeaturedProduct';
import Loading from '../Loading';
import './featuredProducts.css';
import { useObserverContext } from '../../observerContext';

const FeaturedProducts = () => {
  const sectionRef = useRef(null);
  const [isHidden, setIsHidden] = useState(false);
  const { sectionObserver, isObserving } = useObserverContext();
  const featuredProductsObserver = sectionObserver();
  const { products, loading } = useProductsContext();
  const featuredProducts = products.slice(14, 17);

  useEffect(() => {
    setIsHidden(true);
    const sectionFeaturedProducts = sectionRef.current;
    featuredProductsObserver.observe(sectionFeaturedProducts);

    return () => featuredProductsObserver.unobserve(sectionFeaturedProducts);
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
