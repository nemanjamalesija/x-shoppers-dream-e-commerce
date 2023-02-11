import React from 'react';
import { filters } from '../../../constants/types/productsTypes';

import { useProductsContext } from '../../../contexts/productsContext';

const TextInput = ({ name }: filters) => {
  const { storeProductsFilterValuesHandler } = useProductsContext();

  return (
    <div className="products-text-input">
      <input
        className="products-text-input-item"
        type="text"
        name="name"
        placeholder="Search"
        value={name as string}
        onChange={storeProductsFilterValuesHandler}
      />
    </div>
  );
};

export default TextInput;
