import React, { useContext, useEffect, useReducer, useRef } from 'react';
import reducerProducts from './reducers/productsReducer';
import { productsInitialState } from './constants/initialStates/productsInitialState';
import { allProductsURL } from './utils/urls';
import { actions, payloadActions } from './constants/types/productsActions';
import { productsContextValues } from './constants/types/productsTypes';

const ProductsContext = React.createContext<productsContextValues>({
  state: productsInitialState,
  dispatch: (action: actions | payloadActions) => {},
  navRef: React.createRef<HTMLDivElement>(),
});

const ProductsProvider = ({ children }: { children: React.ReactNode }) => {
  const [stateProducts, dispatch] = useReducer(
    reducerProducts,
    productsInitialState
  );
  const navRef = useRef<HTMLDivElement>(null);

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
      value = e.target.value as string; // boolean for free shipping will also get transformed to string => handle in reducer
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
        state: {
          ...stateProducts,
          storeProductsFilterValuesHandler,
          removeFiltersHandler,
          storeFiltersValuesHandler,
        },
        dispatch,
        navRef,
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
