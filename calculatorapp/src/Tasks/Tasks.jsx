import React, { useState } from 'react'

function Tasks() {
 
    const [task,setTask] = useState("");
    const [taskName , setTaskName] = useState([]);

    const handleTask = (event)=>{
       const {value} = event.target;
    //    console.log(taskName);
       setTask(value)
    }

    const saveTasks = ()=>{
        let taskObj = {
            name: task,
            status: false
        }

        let taskArr = [...taskName,taskObj];
        setTaskName(taskArr);
        setTask("")
    }

    // console.log(taskName);

  return (
    <div>
      <h1>This another App in React using HOOK AND STATE AND PROPS</h1>
      <hr />

      <div className="container">
          <input type="text" placeholder='Enter Your Tasks' value={task} onChange={handleTask}/>
          <button onClick={()=> saveTasks()}>Save Task</button>
      </div>
      <div className="showData">
          {
              taskName.map((currTask,index)=>{
                  return <div> {index+1 + ".  " + currTask.name} </div>
              })
          }
      </div>
    </div>
  )
}

export default Tasks
