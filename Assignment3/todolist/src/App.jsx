import React, { useState } from "react";
import "./App.css";
import TaskItem from "./components/TaskItem";

function App() {
  const [tasks, setTasks] = useState([]);
  const [formState, setFormState] = useState({
    task: "", // string
    completed: false, // boolean
    taskAssignedTo: "", // string
  });
  
  function handleChange(event) {
    // Implement logic to handle form changes
    let value = event.target.type === "checkbox" ? event.target.checked : event.target.value 

    const newTask = {
      ...formState,
      [event.target.name]: value,
    }

    setFormState(newTask)
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Implement logic to handle form submission
    const newTask = {
      ...formState,
      id: Date.now() + Math.random()
    }

    const updatedTasksArray = [...tasks,newTask]
    setTasks(updatedTasksArray)

    setFormState({
    task: "", 
    completed: true, 
    taskAssignedTo: "",
     })
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input name="task" type="text" placeholder="Add Task" value={formState.task} onChange={handleChange}/>
          <label>
            Completed:
            <input name="completed" type="checkbox" value={formState.completed} onChange={handleChange}/>
          </label>
          <select name="taskAssignedTo" value={formState.taskAssignedTo} onChange={handleChange}>
            <option value="">Select Assignee</option>
            <option value="Bruce">Bruce</option>
            <option value="Barry">Barry</option>
            <option value="Clark">Clark</option>
            <option value="Oliver">Oliver</option>
            <option value="Jina">Jina</option>
          </select>
          <button type="submit">Add Task</button>
        </form>
      </div>
      <hr />
      {tasks.map((item, index) => (
        <TaskItem key={index} item={item} tasks={tasks} setTasks={setTasks} />
      ))}
    </>
  );
}

export default App;
