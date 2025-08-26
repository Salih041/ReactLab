import React from 'react'
import { useSelector } from 'react-redux'
import Todo from './Todo'

function TodosList() {

    const {todos} = useSelector((store)=>store.todos)

    return (
        <div className='TodosContainer'>
            {
                todos && todos.map((todo)=>(
                    <Todo key={todo.id} todoProps={todo}></Todo>
                ))
            }
        </div>
    )
}

export default TodosList
