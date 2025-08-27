import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        items:[],
        filters:'all'
    },  
    //a collection of functions that we will use to update the state
    reducers: {
    addTask:{
        //individual reducer logic will go here
        reducer:(state,action)=>{
            state.items.push(action.payload)
        }, //here we are defining the action object as we need to modify the payload and return a new action object
        //this prepare function allows us to customize the payload and meta of the action object
        prepare:(text)=>{
            return {
                payload:{
                    id:nanoid(),
                    text,
                    completed:false
                }
            }
        }
    },
    toggleTask:(state,action)=>{ 
        const task =state.items.find(t=>t.id===action.payload)
        if(task){
            task.completed=!task.completed
        }


    },
    deleteTask: (state,action)=>{
        state.items=state.items.filter(t=>t.id!==action.payload)

    },
    setFilter:(state,action)=>{
        state.filters=action.payload

    }

    }
});
export const { addTask, toggleTask, deleteTask, setFilter } = todoSlice.actions;
export default todoSlice.reducer;