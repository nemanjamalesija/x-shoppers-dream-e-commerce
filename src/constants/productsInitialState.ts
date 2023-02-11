import { stateProducts } from './productsTypes';

export const productsInitialState: stateProducts = {
  loading: true,
  products: [],
  filteredProducts: [],

  sort: 'price lowest',
  filters: {
    name: '',
    category: 'All',
    company: 'All',
    currentColor: 'All',
    price: 0,
    maxPrice: 0,
    shipping: false,
  },
};
