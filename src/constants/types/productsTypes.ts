import React from 'react';
import { actions, payloadActions } from './productsActions';

export type productsContextValues = {
  state: stateProducts;
  dispatch: React.Dispatch<actions | payloadActions>;
  navRef: React.RefObject<HTMLDivElement>;
};

export type product = {
  id: string;
  category: string;
  colors: string[];
  company: string;
  description: string;
  image: string;
  name: string;
  price: number;
  shipping: boolean;
};

export type filters = {
  name: string;
  currentCategory: string;
  currentCompany: string;
  currentColor: string;
  price: number;
  maxPrice: number;
  shipping: boolean;
};

export type currentProductImage = {
  filename: string;
  height: number;
  id: string;
  size: number;
  thumbnails: {
    full: { url: string; width: number; height: number };
    large: { url: string; width: number; height: number };
    small: { url: string; width: number; height: number };
  };
  type: string;
  url: string;
  width: number;
};

export type currentProduct = {
  id: string;
  images: currentProductImage[];
  reviews: number;
  name: string;
  stars: number;
  price: number;
  description: string;
  stock: number;
  company: string;
  colors?: string[];
  currentColor?: string;
  quantity: number;
};

export type filtersPayload = {
  [key: string]: string | number;
};

export type stateProducts = {
  loading: boolean;
  products: product[];
  filteredProducts: product[];
  currentProduct: currentProduct;
  sort: string;
  filters: filters;
  storeProductsFilterValuesHandler(e: any): void;
  removeFiltersHandler(): void;
  storeFiltersValuesHandler(e: React.ChangeEvent<HTMLSelectElement>): void;
  selectColorHandler(color: string): void;
  incrementQuantityHandler(quantity: number): void;
  decrementQuantityHandler(quantity: number): void;
};
