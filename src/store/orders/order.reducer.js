import { ORDER_ACTION_TYPES } from "./order.types";

const INITIAL_STATE = {
  orders: [],
};

export const orderReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case ORDER_ACTION_TYPES.SET_ORDERS:
      return {
        ...state,
        orders: [...state.orders, payload],
      };

    default:
      return state;
  }
};
