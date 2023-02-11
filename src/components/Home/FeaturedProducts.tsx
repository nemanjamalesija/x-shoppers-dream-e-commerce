import { Link } from 'react-router-dom';
import { useProductsContext } from '../../productsContext';
import SingleFeaturedProduct from './SingleFeaturedProduct';
import './featuredProducts.css';

const FeaturedProducts = () => {
  const { products } = useProductsContext();
  const featuredProducts = products.slice(14, 17);
  console.log(products);

  return (
    <section className="section section-featured-products">
      <div className="container">
        <h3 className="heading-tertiary">Featured Products</h3>
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
