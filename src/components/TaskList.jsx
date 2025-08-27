import { useSelector ,useDispatch} from "react-redux"
import { deleteTask, toggleTask,addTask } from "../features/todo/todoSlice"
import { useEffect, useState } from "react"


const TaskList = () => {
 //basically useSelector is used to get the state from the redux store therefore the same should be same(todo) as in the store.js file
   
    const { items, filters } = useSelector(state => state.todo)
    const filtered= filters==='completed'? items.filter(t=>t.completed):items
    const dispatch=useDispatch()
     
    
    useEffect(()=>{
    const todos=JSON.parse(localStorage.getItem('items'))
    if (todos && todos.length>0){
         todos.forEach((t) => dispatch(addTask(t.text))) 
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("items",JSON.stringify(items))
  },[items])

    return(
        <ul className="task-list">
            {items.length===0 && <p className="no-tasks">No todos yet! 🎉</p>}
            {filtered.map(task=>(
                
                <li key={task.id} className={`task-item ${task.completed ? "completed" : ""}`}>
                    <label className="task-left">
                    <input type="checkbox" checked={task.completed} onChange={()=>dispatch(toggleTask(task.id))}/>
                    <span>{task.text}</span>
                    <span>{task.time}</span>
                    </label>
                    <div className="task-actions">
                        <button className="delete-btn" onClick={()=>dispatch(deleteTask(task.id))}>Delete</button>
                        <button className="toggle-btn" onClick={()=>dispatch(toggleTask(task.id))}>{ task.completed ? "undo" :"Done"}</button>
                    </div>
                </li>
            ))}
        </ul>

    )

}
export default TaskList