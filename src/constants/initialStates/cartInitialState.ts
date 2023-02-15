import { currentProduct } from '../types/productsTypes';

export const cartInitialState = {
  cart: [],
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
  clearCartHandler: () => void {},
  cartDecrementProductQuantityHandler: (id: string) => void {},
  cartIncrementProductQuantityHandler: (id: string) => void {},
  cartRemoveProductHandler: (id: string) => void {},
};
