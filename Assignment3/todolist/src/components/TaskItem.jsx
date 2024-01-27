

function TaskItem({item,tasks,setTasks}) {

  function handleClick(Id){
    setTasks(
      tasks.map((ele)=>{
        if(ele.id == Id){
          ele.completed = !ele.completed
        }
        return ele
      })
    )
  }

  function handleDelete(Id){
    setTasks(
      tasks.filter((ele)=> ele.id != Id)
    )
  }
   
  return <div style={{border:"1px solid black", margin:"10px", padding:"10px"}}>
    <p>{item.task}</p>
    <p>{item.taskAssignedTo}</p>
    <span onClick={() => handleClick(item.id)}>{item.completed ? "Completed" : "Pending"}</span>
    <button onClick={() => handleDelete(item.id)}>Delete Task</button>
  </div>;

}


  
  export default TaskItem;