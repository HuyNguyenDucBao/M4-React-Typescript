import { combineReducers, createStore } from "redux";
import { IUser } from "../../util/sv";

const initialState: IUser = {
  id: 1,
  name: "kha",
  sex: true,
  date: "16/7/2024",
  address: "nha",
};

export const reducer1 = (
  state: IUser = initialState,
  action: { type: string; payload: IUser }
) => {
  switch (action.type) {
    default:
      return state;
  }
};
