import React, { useMemo } from "react";

const Bai2 = () => {
  const listUser = [
    {
      id: 1,
      name: "kha",
      age: 21,
    },
    {
      id: 2,
      name: "ha",
      age: 19,
    },
    {
      id: 3,
      name: "khai",
      age: 18,
    },
    {
      id: 4,
      name: "kha0",
      age: 11,
    },
    {
      id: 5,
      name: "khaa",
      age: 18,
    },
  ];
  const locUser = useMemo(() => {
    return listUser.filter((user) => user.age > 18);
  }, [listUser]);
  return (
    <div>
      <p>tren 18</p>
      {locUser.map((user) => (
        <>
          <p>{user.name}</p>
          <p>{user.age}</p>
        </>
      ))}
    </div>
  );
};

export default Bai2;
