import React, { useState } from "react";
import "./App.css";
import TaskItem from "./TaskItem";

function App() {
  const [taskItem, setTaskItem] = useState("");
  const [timeItem, setTimeItem] = useState("");
  const [list, setList] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [counter, setCounter] = useState(0);

  const addTask = () => {
    setList([...list, { id: counter, task: taskItem, time: timeItem }]);
    setTaskItem("");
    setTimeItem("");
    setCounter(counter + 1);
  };

  const deleteTask = () => {
    selectedItems.forEach((id) => {
      const filteredList = list.filter((item) => {
        if (id === item.id) {
          return false;
        } else {
          return true;
        }
      });

      setList(filteredList);
    });
  };

  return (
    <div className="App">
      <div className="banner">
        <h1 className="title">Daily Tasks</h1>

        <label className="label">Task:</label>
        <input
          type="text"
          id="task"
          onChange={(event) => {
            setTaskItem(event.target.value);
          }}
        />
        <label className="label" id="label2">
          Time to be completed:
        </label>
        <input
          type="text"
          id="completiontime"
          onChange={(event) => {
            setTimeItem(event.target.value);
          }}
        />
        <button className="button" onClick={addTask}>
          Add Task
        </button>

        <div className="list">
          {list.map((task) => {
            return (
              <TaskItem
                taskName={task.task}
                completionTime={task.time}
                id={task.id}
                setSelectedItems={setSelectedItems}
              />
            );
          })}
        </div>

        <button className="button" onClick={deleteTask}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default App;
