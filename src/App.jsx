import { useState } from 'react'
import './App.css'
import AddTask from './components/AddTask'
import TaskList from './components/TaskList'
import Filter from './components/Filter'

function App() {
  

  return (
    <>
      <h1>TO-DO Manager</h1>
      <AddTask />
      <Filter />
      <TaskList />
    </>
  )
}

export default App
