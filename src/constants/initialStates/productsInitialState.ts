import { stateProducts } from '../types/productsTypes';

export const productsInitialState: stateProducts = {
  loading: true,
  products: [],
  filteredProducts: [],
  currentProduct: {
    id: '',
    images: ['', '', '', ''],
    reviews: 0,
    name: '',
    stars: 0,
    price: 0,
    description: '',
    stock: 0,
    company: '',
  },
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
  removeFiltersHandler: () => void {},
  storeFiltersValuesHandler: (e: React.ChangeEvent<HTMLSelectElement>) =>
    void {},
};
