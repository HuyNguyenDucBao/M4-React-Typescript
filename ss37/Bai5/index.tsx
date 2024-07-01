import React, { useReducer } from "react";

const reducer = (state = 0, action: number) => {
  return state + 1;
};

const Bai5 = () => {
  const [count, tCount] = useReducer(reducer, 0, undefined);
  return (
    <div>
      <h5>{count}</h5>
      <button onClick={() => tCount(count)} style={{ borderRadius: 10 }}>
        Bam nut
      </button>
    </div>
  );
};

export default Bai5;
