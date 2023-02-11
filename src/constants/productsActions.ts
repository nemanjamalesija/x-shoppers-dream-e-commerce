import { product } from './productsTypes';

export type actions = {
  type: '';
  payload: '';
};

export type payloadActions = {
  type: 'SET_PRODUCTS';
  payload: product[];
};
