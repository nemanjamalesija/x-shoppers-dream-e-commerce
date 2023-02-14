import { stateProducts } from '../types/productsTypes';

export const productsInitialState: stateProducts = {
  loading: true,
  products: [],
  filteredProducts: [],
  currentProduct: {
    id: '',
    images: [
      {
        filename: '',
        height: 0,
        id: '',
        size: 0,
        thumbnails: {
          full: { url: '', width: 0, height: 0 },
          large: { url: '', width: 0, height: 0 },
          small: { url: '', width: 0, height: 0 },
        },
        type: '',
        url: '',
        width: 0,
      },
    ],
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
