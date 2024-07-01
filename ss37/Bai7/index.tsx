import React, { useReducer } from "react";
const reducer = (state: any, action: any) => {
  return action;
};
const Bai7 = () => {
  const [input, dispatch] = useReducer(reducer, "");

  return (
    <div>
      <h3>{input}</h3>
      <input
        type="text"
        value={input}
        onChange={(e) => dispatch(e.target.value)}
      />
    </div>
  );
};

export default Bai7;
