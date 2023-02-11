import { actions, payloadActions } from '../constants/productsActions';
import { stateProducts } from '../constants/productsTypes';

const reducer = (state: stateProducts, action: actions | payloadActions) => {
  return { ...state };
};

export default reducer;
