import { currentProduct } from '../types/productsTypes';
import { currentProductInitialState } from './productsInitialState';

const cartProduct = {
  id: '',
  name: '',
  quantity: 0,
  currentColor: '',
  image: '',
  price: 0,
  stock: 0,
};

export const cartInitialState = {
  cart: [cartProduct],
  totalQuantity: 0,
  totalPrice: 0,
  currentColor: '#fff',
  shippingFee: 725,
  loading: true,
  addToCartHandler: (
    id: string,
    currentColor: string,
    quantity: number,
    currentProduct: currentProduct
  ) => void {},
};
