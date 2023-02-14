import React, { useContext, useReducer } from 'react';
import { cartInitialState } from './constants/initialStates/cartInitialState';
import { cartActions, cartPayloadActions } from './constants/types/cartActions';
import { cartContextValues } from './constants/types/cartTypes';
import { currentProduct } from './constants/types/productsTypes';
import cartReducer from './reducers/cartReducer';

const CartContext = React.createContext<cartContextValues>({
  state: cartInitialState,
  dispatch: (action: cartActions | cartPayloadActions) => {},
});

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [stateCart, dispatch] = useReducer(cartReducer, cartInitialState);

  const addToCartHandler = (
    id: string,
    currentColor: string,
    quantity: number,
    currentProduct: currentProduct
  ) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { id, currentColor, quantity, currentProduct },
    });
  };

  const clearCartHandler = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <CartContext.Provider
      value={{
        state: {
          ...stateCart,
          addToCartHandler,
        },
        dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};

export { CartContext, CartProvider };
