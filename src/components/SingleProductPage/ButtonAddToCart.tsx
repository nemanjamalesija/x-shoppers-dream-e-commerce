import React from 'react';
import { Link } from 'react-router-dom';
import { useProductsContext } from '../../productsContext';

const ButtonAddToCart = () => {
  const {
    state: {
      currentProduct,
      currentProduct: { currentColor, id, quantity },
    },
  } = useProductsContext();

  return (
    <Link to="/cart">
      <button className="btn btn-add-to-cart">Add to cart</button>
    </Link>
  );
};

export default ButtonAddToCart;
