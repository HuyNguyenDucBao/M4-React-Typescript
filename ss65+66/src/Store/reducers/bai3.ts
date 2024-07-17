import { combineReducers, createStore } from "redux";
import { Product } from "../../util/sv";

const initialState: Product[] = [
  {
    id: 1,
    name: "quyt",
    price: "10000",
    quantity: "100",
  },
  {
    id: 2,
    name: "cam",
    price: "10000",
    quantity: "100",
  },
];

export const reducer3 = (
  state: Product[] = initialState,
  action: { type: string; payload: Product }
) => {
  switch (action.type) {
    default:
      return state;
  }
};
