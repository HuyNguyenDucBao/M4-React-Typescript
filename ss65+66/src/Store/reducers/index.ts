import { combineReducers } from "redux";

export const reducer = (
  state: number = 0,
  action: { type: string; payload: number }
) => {
  switch (action.type) {
    case "INCREMENT_N":
      state += action.payload;
      return state;
    case "DECREMENT_N":
      state -= action.payload;
      return state;
    case "POWER_UP_N":
      state = Math.pow(state, action.payload);
      return state;

    default:
      return state;
  }
};
export const root = combineReducers({ count: reducer });
