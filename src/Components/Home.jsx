import React, { useState } from 'react'
import Todo from './Todo'

export default function Home() {
    const [toDoList, setToDoList] = useState([]);
    const [task, setTask] = useState('');

    function handleOnChange(e){
        setTask(e.target.value);
    }

    function handleOnClick(){
        if(task){
            setToDoList(toDoList.concat(task));
            setTask('');
        }
    }
  return (
    <>
        <div className="container">
            <h1>My To-do List</h1>
            <input type="text" id="task" name="task" value={task} onChange={handleOnChange} placeholder="Enter a new task"/>
            <button onClick={handleOnClick}>Add Task</button><br />

            {/* <Todo toDoList = {toDoList}/> */}
            <Todo toDoList={toDoList} setToDoList={setToDoList} />
        </div>
    </>
  )
}
