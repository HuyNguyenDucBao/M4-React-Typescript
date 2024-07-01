import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Button = () => {
  const color = useContext(ThemeContext);
  return (
    <div>
      <p>mau : {color == "pink" ? "hong" : "do"}</p>
      <button style={{ backgroundColor: color, borderRadius: 10 }}>
        mau ne
      </button>
    </div>
  );
};

export default Button;
