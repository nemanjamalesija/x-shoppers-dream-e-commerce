import React, { useContext, useEffect, useReducer } from 'react';
import reducerProducts from '../reducers/productsReducer';
import { productsInitialState } from '../constants/initialStates/productsInitialState';
import { allProductsURL } from '../utils/urls';

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

    key = e.target.name as string;
    value = e.target.value as string;

    dispatch({
      type: 'STORE_FILTERS_VALUES',
      payload: { key, value },
    });
  };

  return (
    <ProductsContext.Provider
      value={{
        ...stateProducts,
        storeProductsFilterValuesHandler,
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
