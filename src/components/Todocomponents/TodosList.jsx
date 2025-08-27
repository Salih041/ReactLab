import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Todo from './Todo'
import { cleanTodos } from '../../redux/todoSlice'

function TodosList() {

    const { todos } = useSelector((store) => store.todos)

    const [filter, setFilter] = useState("all") // all | active | completed
    const [searchTerm, setSearchTerm] = useState("")
    const dispatch = useDispatch();

    const filteredTodos = todos.filter((todo) => {
        if (filter === "active" && todo.isCompleted) return false;
        if (filter === "completed" && !todo.isCompleted) return false;

        if (!todo.content.toLowerCase().includes(searchTerm.toLowerCase())) return false

        return true;
    })

    return (
        <div className='TodosContainer'>
            <div className='searchDiv'>
                <input type="text" placeholder='Search ToDo' className='searchTodoInput' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <button className='cleanSearch Button' onClick={() => setSearchTerm("")}>X</button>
            </div>
            <div className='FilterButtonsContainer'>
                <button className={`filterAll Button ${filter === "all" ? "active" : ""}`} onClick={() => setFilter("all")}>ALL</button>
                <button className={`filterActive Button ${filter === "active" ? "active" : ""}`} onClick={() => setFilter("active")}>ACTIVE</button>
                <button className={`filterCompleted Button ${filter === "completed" ? "active" : ""}`} onClick={() => setFilter("completed")}>COMPLETED</button>
                <button onClick={() => dispatch(cleanTodos())} className='Clear Button'>Clear ALL</button>
            </div>
            {
                filteredTodos && filteredTodos.map((todo) => (
                    <Todo key={todo.id} todoProps={todo}></Todo>
                ))
            }
        </div>


    )
}

export default TodosList
