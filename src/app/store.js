import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'
const  store =configureStore({
    reducer:{
      todo:  todoReducer , //we will add reducers here
},})
export default store