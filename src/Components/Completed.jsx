import React from 'react'

export default function Completed({compList}) {
  return (
    <>
      <h3>Completed Task</h3>
      <ul className="todo-list">
          {compList.map((task, index) => (
            <li key={index} className="todo-item">
              {task}
            </li>
          ))}
      </ul>
    </>
  )
}
