import { createSlice, nanoid } from "@reduxjs/toolkit";

const getInitialState = () => {
    try { //this is to get the stored data
        const storedTodos = localStorage.getItem('items');
        return storedTodos ? JSON.parse(storedTodos) : [];
    } catch (error) {
        console.error("Failed to load state from localStorage:", error);
        return [];
    }
};

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        items: getInitialState(),
        filters:'all'
    },  
    //a collection of functions that we will use to update the state
    reducers: {
    addTask:
      (state, action) => {
           
            state.items.push({
                id: nanoid(),
                text: action.payload,
                completed: false,
                time: new Date().toLocaleTimeString(),
            });
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

    },
    

    }
});
export const { addTask, toggleTask, deleteTask, setFilter } = todoSlice.actions;
export default todoSlice.reducer;