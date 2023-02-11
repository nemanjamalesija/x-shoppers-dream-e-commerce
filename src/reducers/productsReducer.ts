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
      return {
        ...state,
        products: payload as product[],
        filteredProducts: payload as product[],
        loading: false,
      };

    case 'STORE_FILTERS_VALUES':
      const { key, value } = payload as filtersPayload;

      return { ...state, filters: { ...state.filters, [key]: value } };

    default:
      return { ...state };
  }
};

export default reducer;
