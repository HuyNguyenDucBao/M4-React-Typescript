import React, { useReducer } from "react";
const reducer = (state: any, action: any) => {
  switch (action) {
    case "tang":
      return state > 0 ? state - 1 : state;
    default:
      return state;
  }
};
const Bai6 = () => {
  const [count, dispatch] = useReducer(reducer, 10);
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => dispatch("tang")}>click de giam</button>
    </div>
  );
};

export default Bai6;
