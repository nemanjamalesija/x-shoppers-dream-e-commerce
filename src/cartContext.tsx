import React, { useContext, useEffect, useReducer } from 'react';
import { cartInitialState } from './constants/initialStates/cartInitialState';
import { cartActions, cartPayloadActions } from './constants/types/cartActions';
import { cartContextValues } from './constants/types/cartTypes';
import cartReducer from './reducers/cartReducer';

const CartContext = React.createContext<cartContextValues>({
  state: cartInitialState,
  dispatch: (action: cartActions | cartPayloadActions) => {},
});

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [stateCart, dispatch] = useReducer(cartReducer, cartInitialState);

  return (
    <CartContext.Provider
      value={{
        state: {
          ...stateCart,
        },
        dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(CartContext);
};

export { CartContext, CartProvider };
