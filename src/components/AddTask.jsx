import { useState } from 'react'
import { addTask } from '../features/todo/todoSlice.js'
import { useDispatch } from 'react-redux'


const AddTask = () => {
    
    const [text, setText] = useState("")
    const dispatch = useDispatch()
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(!text.trim()){
            return
        }else{
        dispatch(addTask(text))
        setText("")
    }
    }


    return (
       <form className="task-form" onSubmit={handleSubmit}>
        <input className="task-input"
         type="text"
         placeholder='Write Todo...' 
         value={text}
         onChange={(e)=>setText(e.target.value)}
         />
        <button className="task-btn" type='submit'>Add</button>
       </form>
        
    )

}
export default AddTask