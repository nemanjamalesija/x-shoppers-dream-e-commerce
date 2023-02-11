import { Link } from 'react-router-dom';
import { product } from '../../constants/types/productsTypes';
import './featuredProducts.css';

const SingleFeaturedProduct = ({ id, name, image, price }: product) => {
  return (
    <article className="featured-product-card">
      <div className="featured-product-image-div">
        <Link to={`products/${id}`}>
          <img className="featured-product-image" src={image} alt={name} />
        </Link>
      </div>
      <div className="featured-product-description-div">
        <span className="featured-product-name">{name}</span>
        <span className="featured-product-price">{price}</span>
      </div>
    </article>
  );
};

export default SingleFeaturedProduct;
