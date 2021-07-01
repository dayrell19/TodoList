import React, { useState, useEffect } from "react";
import "./TaskItem.css";
import Box from "./Checkbox.js";

function TaskItem({ taskName, completionTime, id, setSelectedItems }) {
  const selectItem = () => {
    setSelectedItems((selectedItems) => [...selectedItems, id]);
  };

  return (
    <div className="task">
      <Box selectItem={selectItem} />
      <h1 className="text">{taskName}</h1>
      <h1 className="text"> {completionTime}</h1>
    </div>
  );
}

export default TaskItem;
