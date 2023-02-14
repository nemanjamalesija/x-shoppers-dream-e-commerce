import { cartActions, cartPayloadActions } from './cartActions';
import { currentProduct } from './productsTypes';

export type cartProduct = {
  id: string;
  name: string;
  quantity: number;
  currentColor: string;
  image: string;
  price: number;
  stock: number;
};

export type stateCart = {
  cart: cartProduct[];
  totalQuantity: number;
  totalPrice: number;
  currentColor: string;
  shippingFee: number;
  loading: boolean;
  addToCartHandler(
    id: string,
    currentColor: string,
    quantity: number,
    currentProduct: currentProduct
  ): void;
  clearCartHandler(): void;
};

export type cartContextValues = {
  state: stateCart;
  dispatch: React.Dispatch<cartActions | cartPayloadActions>;
};
