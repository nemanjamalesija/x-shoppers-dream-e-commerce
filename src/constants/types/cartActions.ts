export type cartActions = {
  type: 'COUNT_TOTAL_PRICE' | 'CLEAR_CART';
  payload?: null;
};

export type cartPayloadActions = { type: 'ADD_TO_CART'; payload: any };
