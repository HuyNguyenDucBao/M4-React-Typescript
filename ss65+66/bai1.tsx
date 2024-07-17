import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IUser } from "../../util/sv";
import { StoreInterface } from "../../Store";

const Bai1 = () => {
  const sv = useSelector((state: StoreInterface) => state.userStore);

  console.log(sv);

  return (
    <div>
      {sv && (
        <>
          <p>ID: {sv.id}</p>
          <p>Name: {sv.name}</p>
          <p>Gender: {sv.sex ? "Male" : "Female"}</p>
          <p>Date: {sv.date}</p>
          <p>Address: {sv.address}</p>
        </>
      )}
    </div>
  );
};

export default Bai1;
