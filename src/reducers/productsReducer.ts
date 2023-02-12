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
        if (product.price) return acc + product.price;
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

    default:
      return { ...state };
  }
};

export default reducer;
