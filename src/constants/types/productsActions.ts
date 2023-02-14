import { currentProduct, filtersPayload, product } from './productsTypes';

export type actions = {
  type: 'FILTER_PRODUCTS' | 'SORT_PRODUCTS' | 'REMOVE_FILTERS';

  payload?: null;
};

export type payloadActions = {
  type:
    | 'SET_PRODUCTS'
    | 'STORE_FILTERS_VALUES'
    | 'STORE_SORT_VALUES'
    | 'SET_CURRENT_PRODUCT'
    | 'SET_CURRENT_PRODUCT_COLOR'
    | 'INCREMENT_PRODUCT_QUANTITY'
    | 'DECREMENT_PRODUCT_QUANTITY';

  payload: any;
};
