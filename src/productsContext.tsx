import React, { useContext, useEffect, useReducer } from 'react';
import reducerProducts from './reducers/productsReducer';
import { productsInitialState } from './constants/initialStates/productsInitialState';
import { allProductsURL } from './utils/urls';

const ProductsContext = React.createContext(productsInitialState);

const ProductsProvider = ({ children }: { children: React.ReactNode }) => {
  const [stateProducts, dispatch] = useReducer(
    reducerProducts,
    productsInitialState
  );

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(allProductsURL);
      const data = await response.json();
      dispatch({
        type: 'SET_PRODUCTS',
        payload: data,
      });
    };

    fetchProducts();
  }, []);

  const storeProductsFilterValuesHandler = (e: any) => {
    let key;
    let value;

    if (e.type === 'click') {
      key = e.target.getAttribute('data-type') as string;
      value = e.target.getAttribute('data-value') as string;
    } else {
      key = e.target.name as string;
      value = e.target.value as string;
    }

    dispatch({
      type: 'STORE_FILTERS_VALUES',
      payload: { key, value },
    });
  };

  const removeFiltersHandler = () => {
    dispatch({ type: 'REMOVE_FILTERS' });
  };

  const storeFiltersValuesHandler = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = e.target.value;

    dispatch({ type: 'STORE_SORT_VALUES', payload: value });
  };

  useEffect(() => {
    dispatch({ type: 'FILTER_PRODUCTS' });
    dispatch({ type: 'SORT_PRODUCTS' });
  }, [stateProducts.filters, stateProducts.sort]);

  return (
    <ProductsContext.Provider
      value={{
        ...stateProducts,
        storeProductsFilterValuesHandler,
        removeFiltersHandler,
        storeFiltersValuesHandler,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};

export { ProductsContext, ProductsProvider };
