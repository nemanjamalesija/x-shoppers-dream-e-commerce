import { cartActions, cartPayloadActions } from './cartActions';
import { currentProduct } from './productsTypes';

type stateCart = {
  cart: currentProduct[];
  totalQuantity: number;
  totalPrice: number;
  currentColor: string;
  shippingFee: number;
  loading: boolean;
};

export type cartContextValues = {
  state: stateCart;
  dispatch: React.Dispatch<cartActions | cartPayloadActions>;
};
