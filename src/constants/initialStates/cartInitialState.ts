import { currentProductInitialState } from './productsInitialState';

export const cartInitialState = {
  cart: [currentProductInitialState],
  totalQuantity: 0,
  totalPrice: 0,
  currentColor: '#fff',
  shippingFee: 725,
  loading: true,
};
