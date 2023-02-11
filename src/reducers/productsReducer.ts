import { actions, payloadActions } from '../constants/productsActions';
import { stateProducts } from '../constants/productsTypes';

const reducer = (state: stateProducts, action: actions | payloadActions) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_PRODUCTS':
      return { ...state, products: payload, filteredProducts: payload };

    default:
      return { ...state };
  }
};

export default reducer;
