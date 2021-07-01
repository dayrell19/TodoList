import React, { useState } from "react";
import "./Checkbox.css";

export default function Checkbox({ selectItem }) {
  const [checkbox, setCheckBox] = useState(false);

  return (
    <div
      id={checkbox ? "coloredbox" : "box"}
      onClick={() => {
        setCheckBox(!checkbox);
        selectItem();
      }}
    ></div>
  );
}
