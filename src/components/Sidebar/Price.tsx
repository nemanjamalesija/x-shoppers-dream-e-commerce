import React from 'react';
import formatPrice from '../../helpers/formatPrice';
import { useProductsContext } from '../../productsContext';
import './sidebar.css';

type priceProps = { price: number; maxPrice: number };

const Price = ({ price, maxPrice }: priceProps) => {
  const { storeProductsFilterValuesHandler } = useProductsContext();
  return (
    <div className="product-price-container">
      <h5 className="heading-fifth heading-price">Price</h5>
      <span className="single-product-price">{formatPrice(price)}</span>
      <input
        type="range"
        name="price"
        min="0"
        max={maxPrice}
        value={price}
        onChange={storeProductsFilterValuesHandler}
      />
    </div>
  );
};

export default Price;
