import { filtersPayload, product } from './productsTypes';

export type actions = {
  type: 'FILTER_PRODUCTS' | 'SORT_PRODUCTS' | 'REMOVE_FILTERS';

  payload?: null;
};

export type payloadActions = {
  type: 'SET_PRODUCTS' | 'STORE_FILTERS_VALUES' | 'STORE_SORT_VALUES';

  payload: product[] | filtersPayload | string;
};
