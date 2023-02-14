import {
  cartActions,
  cartPayloadActions,
} from '../constants/types/cartActions';
import { cartProduct, stateCart } from '../constants/types/cartTypes';

const cartReducer = (
  state: stateCart,
  action: cartActions | cartPayloadActions
) => {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_TO_CART':
      const { id, currentColor, quantity, currentProduct } = payload;

      const alreadyAddedProduct = state.cart.find(
        (item) => item.id === id + 'exists'
      );
      if (alreadyAddedProduct) {
        const cartTemp = state.cart.map((item) => {
          if (item.id === id + 'exists') {
            let newQuantity = quantity + alreadyAddedProduct.quantity;
            if (newQuantity > alreadyAddedProduct.stock) {
              newQuantity = alreadyAddedProduct.stock;
            }
            return { ...item, quantity: newQuantity };
          } else return item;
        });

        return { ...state, cart: [...cartTemp] };
      } else {
        const newProduct = {
          id: id + 'exists',
          name: currentProduct.name,
          quantity,
          currentColor,
          image: currentProduct.images[0].url,
          price: currentProduct.price,
          stock: currentProduct.stock,
        } as cartProduct;

        return { ...state, cart: [...state.cart, newProduct] };
      }

    default:
      return { ...state };
  }
};

export default cartReducer;
