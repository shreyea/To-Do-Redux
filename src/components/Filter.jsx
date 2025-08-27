import { useSelector,useDispatch } from "react-redux"
import { setFilter } from "../features/todo/todoSlice"

const Filter = () => {
  const filter=useSelector(state=>state.todo.filters)
  const dispatch=useDispatch()
  return( 
  <div>
    <button onClick={()=>dispatch(setFilter('all'))} className={`button ${filter==='all'?'active':''}`}>All</button>
    <button onClick={()=>dispatch(setFilter('completed'))} className={`button ${filter==='completed'?'active':''}`}>Completed</button>
  </div>)
}
export default Filter