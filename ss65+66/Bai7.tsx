import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StoreInterface } from "../../Store";
import { color } from "../../Store/actions/bai7";

const Bai7 = () => {
  const switchColor = useSelector((state: StoreInterface) => state.userStore7);
  const dispatch = useDispatch();
  const changeCheck = () => {
    dispatch(color());
  };

  return (
    <div
      style={{
        backgroundColor: switchColor ? "black" : "red",
      }}
    >
      <input type="checkbox" onChange={changeCheck} />
      <label>{switchColor ? "DO" : "Hong"}</label>
    </div>
  );
};

export default Bai7;
///
///////
