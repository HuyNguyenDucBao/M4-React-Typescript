import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StoreInterface } from "../../Store";
import { random } from "../../Store/actions/bai5";

const Bai5 = () => {
  const arrRandom = useSelector((state: StoreInterface) => state.userStore5);
  const dispatch = useDispatch();

  return (
    <div>
      {arrRandom.join(`,`)}
      <button onClick={() => dispatch(random())}>random</button>
    </div>
  );
};

export default Bai5;
