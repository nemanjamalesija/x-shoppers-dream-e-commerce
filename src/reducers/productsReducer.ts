import { actions, payloadActions } from '../constants/types/productsActions';
import {
  filtersPayload,
  product,
  stateProducts,
} from '../constants/types/productsTypes';

const reducer = (state: stateProducts, action: actions | payloadActions) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_PRODUCTS':
      const productsTemp = [...(payload as product[])];

      // later use for filtering
      const newMaxPrice = productsTemp.reduce((acc, product) => {
        if (product.price >= acc) return product.price;
        else return acc;
      }, 0);

      return {
        ...state,
        products: payload as product[],
        filteredProducts: payload as product[],
        filters: {
          ...state.filters,
          price: newMaxPrice,
          maxPrice: newMaxPrice,
        },
        loading: false,
      };

    case 'STORE_FILTERS_VALUES':
      const { key, value } = payload as filtersPayload;

      if (key === 'shipping') {
        const { shipping } = state.filters;
        return {
          ...state,
          filters: { ...state.filters, shipping: !shipping },
        };
      }

      return {
        ...state,
        filters: { ...state.filters, [key]: value },
      };

    case 'FILTER_PRODUCTS':
      const {
        name,
        currentCategory,
        currentCompany,
        currentColor,
        price,
        shipping,
      } = state.filters;

      let filteredProductsTemp = [...state.products];

      if (name)
        filteredProductsTemp = filteredProductsTemp.filter((prod) =>
          prod.name.toLowerCase().includes(name.toLowerCase())
        );

      if (currentCategory && currentCategory !== 'All')
        filteredProductsTemp = filteredProductsTemp.filter(
          (prod) => prod.category === currentCategory
        );

      if (currentCompany && currentCompany !== 'All')
        filteredProductsTemp = filteredProductsTemp.filter(
          (prod) => prod.company === currentCompany
        );

      if (currentColor && currentColor !== 'All')
        filteredProductsTemp = filteredProductsTemp.filter((prod) =>
          prod.colors.includes(currentColor)
        );

      if (price) {
        filteredProductsTemp = filteredProductsTemp.filter(
          (prod) => prod.price <= price
        );
      }

      if (shipping)
        filteredProductsTemp = filteredProductsTemp.filter(
          (prod) => prod.shipping === true
        );

      return { ...state, filteredProducts: filteredProductsTemp };

    case 'REMOVE_FILTERS':
      return {
        ...state,
        filters: {
          ...state.filters,
          name: '',
          currentCategory: 'All',
          currentCompany: 'All',
          currentColor: 'All',
          price: state.filters.maxPrice,
          shipping: false,
        },
      };

    case 'STORE_SORT_VALUES':
      return { ...state, sort: payload as string };

    case 'SORT_PRODUCTS':
      const { sort, filteredProducts } = state;
      const sortedProducts = [...filteredProducts];

      if (sort === 'price lowest')
        sortedProducts.sort((a, b) => a.price - b.price);

      if (sort === 'price highest')
        sortedProducts.sort((a, b) => b.price - a.price);

      if (sort === 'name a-z')
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));

      if (sort === 'name z-a')
        sortedProducts.sort((a, b) => b.name.localeCompare(a.name));

      return { ...state, filteredProducts: sortedProducts };
    default:
      return { ...state };
  }
};

export default reducer;
