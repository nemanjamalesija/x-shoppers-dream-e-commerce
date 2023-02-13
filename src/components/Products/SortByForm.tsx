import React from 'react';
import { useProductsContext } from '../../productsContext';

const SortByForm = () => {
  const { sort, storeFiltersValuesHandler } = useProductsContext();
  console.log(sort);

  return (
    <form className="sort-products-form">
      <label className="sort-products-label">Sort by</label>
      <select name="sort" value={sort} onChange={storeFiltersValuesHandler}>
        <option value="price lowest">Price (Lowest)</option>
        <option value="price highest">Price (Highest)</option>
        <option value="name a-z">Name (A-Z)</option>
        <option value="name z-a">Name (Z-A)</option>
      </select>
    </form>
  );
};

export default SortByForm;