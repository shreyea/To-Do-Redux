import { useState } from 'react'
import './App.css'
import AddTask from './components/AddTask'
import TaskList from './components/TaskList'
import Filter from './components/Filter'

function App() {
  

  return (
    <div className="app">
      <h1>Manage Your Todos ✅</h1>
      <AddTask />
      <Filter />
      <TaskList />
    </div>
  )
}

export default App
