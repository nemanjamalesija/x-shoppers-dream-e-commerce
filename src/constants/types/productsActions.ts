import { filtersPayload, product } from './productsTypes';

export type actions = {
  type: 'FILTER_PRODUCTS';

  payload: undefined;
};

export type payloadActions = {
  type: 'SET_PRODUCTS' | 'STORE_FILTERS_VALUES';

  payload: product[] | filtersPayload;
};
