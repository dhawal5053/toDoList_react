import React, { useState } from 'react';
import Completed from './Completed';

export default function Todo({ toDoList, setToDoList }) {
  const [compList, setCompList] = useState([]);

  function handleComplete(task) {
    setToDoList(toDoList.filter(item => item !== task));
    setCompList(compList.concat(task));
  }

  return (
    <>
      <h3>My To-do List</h3>
      <ul className="todo-list">
        {toDoList.map((task, index) => (
          <li key={index} className="todo-item">
            {task}
            <button onClick={() => handleComplete(task)}>Mark Complete</button>
          </li>
        ))}
      </ul>
      <Completed compList={compList} />
    </>
  );
}
