import { stateProducts } from '../types/productsTypes';

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
  storeProductsFilterValuesHandler: (e: any) => void {},
};
