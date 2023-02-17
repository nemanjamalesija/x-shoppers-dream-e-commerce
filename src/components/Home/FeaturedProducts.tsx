import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useProductsContext } from '../../productsContext';
import SingleFeaturedProduct from './SingleFeaturedProduct';
import Loading from '../Loading';
import useObserver from '../../helpers/useObserver';
import { useRefsContext } from '../../refsContext';
import './featuredProducts.css';

const FeaturedProducts = () => {
  const {
    state: { products, loading },
  } = useProductsContext();
  const { featuredProductsRef } = useRefsContext();
  const { isObserving, sectionObserver } = useObserver();

  const featuredProductsObserver = sectionObserver();
  const featuredProducts = products.slice(14, 17);

  useEffect(() => {
    if (!featuredProductsRef.current) return;

    featuredProductsObserver.observe(featuredProductsRef.current);

    return () => featuredProductsObserver.disconnect();
  }, [featuredProductsRef, isObserving, featuredProductsObserver]);

  if (loading) return <Loading sectionRef={featuredProductsRef} />;

  return (
    <section
      id="featured-products"
      className={`${
        isObserving
          ? 'section-featured-products section-tansform'
          : 'section-featured-products section-tansform section--hidden '
      }`}
      ref={featuredProductsRef}
    >
      <div className="container">
        <header>
          <h3 className="heading-tertiary heading-featured-products">
            Featured Products
          </h3>
          <h4 className="heading-fourth">The art of modern living unlocked.</h4>
        </header>
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
