import React from 'react';
import { Link } from 'react-router-dom';
import { product } from '../../constants/types/productsTypes';
import formatPrice from '../../helpers/formatPrice';
import '../../pages/products.css';

const OneProduct = ({ id, name, image, price }: product) => {
  return (
    <article className="product-article">
      <div className="product-image-div">
        <Link to={id}>
          <img className="single-product-image " src={image} alt={name} />
        </Link>
      </div>
      <div className="single-product-name-price">
        <h5 className="single-product-name">{name}</h5>
        <span className="single-product-price">{formatPrice(price)}</span>
      </div>
    </article>
  );
};

export default OneProduct;
