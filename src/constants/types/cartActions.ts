export type cartActions = {
  type: 'COUNT_TOTAL_PRICE' | 'CLEAR_CART' | 'CALCULATE_TOTAL_SUBTOTAL';
  payload?: null;
};

export type cartPayloadActions = {
  type:
    | 'ADD_TO_CART'
    | 'INCREMENT_PRODUCT_QUNATITY'
    | 'DECREMENT_PRODUCT_QUANTITY'
    | 'REMOVE_PRODUCT_FROM_CART';
  payload: any;
};
