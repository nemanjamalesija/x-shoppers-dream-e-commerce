import { stateProducts } from './productsTypes';

export const productsInitialState: stateProducts = {
  loading: true,
  products: [],
  filteredProducts: [],

  sort: 'price lowest',
  filters: {
    name: '',
    currentCategory: 'All',
    currentCompany: 'All',
    currentColor: 'All',
    price: 0,
    maxPrice: 0,
    shipping: false,
  },
};
