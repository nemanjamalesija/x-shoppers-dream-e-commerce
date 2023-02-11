import React, { useContext, useEffect, useReducer } from 'react';
import reducerProducts from '../reducers/productsReducer';
import { actions, payloadActions } from '../constants/productsActions';
import { stateProducts } from '../constants/productsTypes';
import { productsInitialState } from '../constants/productsInitialState';
import { allProductsURL } from '../constants/urls';

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
      dispatch({ type: 'SET_PRODUCTS', payload: data });
    };

    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        ...stateProducts,
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
