import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StoreInterface } from "../../Store";
import { giam, tang } from "../../Store/actions/bai4";

const Bai4 = () => {
  const count = useSelector((state: StoreInterface) => state.userStore4);
  console.log(count);
  const dispatch = useDispatch();

  return (
    <div>
      <p>{count}</p>
      <button
        onClick={() => {
          dispatch(tang(1));
        }}
      >
        Tang
      </button>
      <button
        onClick={() => {
          dispatch(giam(1));
        }}
      >
        Giam
      </button>
    </div>
  );
};

export default Bai4;
