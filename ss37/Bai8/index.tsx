import React, { useReducer } from "react";
const reducer = (state: any, action: any) => {
  switch (action) {
    case "nam":
      return action;
    case "nu":
      return action;
    case "khac":
      return action;
    default:
      return state;
  }
};

const Bai8 = () => {
  const [sex, dispatch] = useReducer(reducer, "nam");

  return (
    <div>
      <h5>{sex}</h5>
      <input
        type="radio"
        checked={sex === "nam"}
        onChange={() => dispatch("nam")}
      />
      <label htmlFor="">nam</label>
      <br />
      <input
        type="radio"
        checked={sex === "nu"}
        onChange={() => dispatch("nu")}
      />
      <label htmlFor=""> nu</label>
      <br />
      <input
        type="radio"
        checked={sex === "khac"}
        onChange={() => dispatch("khac")}
      />
      <label htmlFor="">khac</label>
    </div>
  );
};

export default Bai8;
