import React from 'react'
import CreateTodo from '../components/Todocomponents/CreateTodo'
import '../css/Todo.css'
import TodosList from '../components/Todocomponents/TodosList'

function ToDoList() {
  return (
    <div className='todolistContainer'>
      <CreateTodo></CreateTodo>
      <TodosList></TodosList>
    </div>
  )
}

export default ToDoList
