import React from 'react';
import { useProductsContext } from '../../productsContext';
import './sidebar.css';

const ButtonClearFilters = () => {
  const {
    state: { removeFiltersHandler },
  } = useProductsContext();
  return (
    <button className="btn btn-clear-filters" onClick={removeFiltersHandler}>
      Clear filters
    </button>
  );
};

export default ButtonClearFilters;
