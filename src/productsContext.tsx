import React, {
  createRef,
  useContext,
  useEffect,
  useReducer,
  useRef,
} from 'react';
import reducerProducts from './reducers/productsReducer';
import { productsInitialState } from './constants/initialStates/productsInitialState';
import { allProductsURL } from './utils/urls';
import { actions, payloadActions } from './constants/types/productsActions';
import { productsContextValues } from './constants/types/productsTypes';
import axios from 'axios';

const ProductsContext = React.createContext<productsContextValues>({
  state: productsInitialState,
  dispatch: (action: actions | payloadActions) => {},
  navRef: React.createRef<HTMLDivElement>(),
  heroRef: createRef<HTMLDivElement>(),
  featuredProductsRef: createRef<HTMLDivElement>(),
  creedsRef: createRef<HTMLDivElement>(),
});

const ProductsProvider = ({ children }: { children: React.ReactNode }) => {
  const [stateProducts, dispatch] = useReducer(
    reducerProducts,
    productsInitialState
  );
  const navRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const featuredProductsRef = useRef<HTMLDivElement>(null);
  const creedsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      return await axios(allProductsURL);
    };

    fetchProducts().then((response) => {
      const { data } = response;
      dispatch({
        type: 'SET_PRODUCTS',
        payload: data,
      });
    });
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

  const selectColorHandler = (color: string) => {
    dispatch({ type: 'SET_CURRENT_PRODUCT_COLOR', payload: color });
  };

  const incrementQuantityHandler = (quantity: number) => {
    dispatch({
      type: 'INCREMENT_PRODUCT_QUANTITY',
      payload: quantity as number,
    });
  };

  const decrementQuantityHandler = (quantity: number) => {
    dispatch({
      type: 'DECREMENT_PRODUCT_QUANTITY',
      payload: quantity as number,
    });
  };

  return (
    <ProductsContext.Provider
      value={{
        state: {
          ...stateProducts,
          storeProductsFilterValuesHandler,
          removeFiltersHandler,
          storeFiltersValuesHandler,
          selectColorHandler,
          incrementQuantityHandler,
          decrementQuantityHandler,
        },
        dispatch,
        navRef,
        heroRef,
        featuredProductsRef,
        creedsRef,
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
