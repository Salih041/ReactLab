import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/todoSlice';

function CreateTodo() {

    const [newtodo , setNewtodo] = useState('');
    const dispatch = useDispatch();
    
    const TodoCreate = ()=>
    {
        if(newtodo.trim()=="") return;
        const request = {
            id : Math.floor(Math.random()*9999),
            content : newtodo.trim(),
            isCompleted : true
        }
        dispatch(addTodo(request))
        setNewtodo("");
    }

    return (
        <div className='createContainer'>
            <h2 style={{textAlign:'center'}}>ToDo List</h2>
            <input value={newtodo} onChange={(e)=>{setNewtodo(e.target.value)}} className='TodoInput' type="text" placeholder='Enter a ToDo' />
            <button onClick={TodoCreate} className='CreateButton'>ADD</button>
        </div>
    )
}

export default CreateTodo
