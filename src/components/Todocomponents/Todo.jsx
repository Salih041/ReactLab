import React, { useState } from 'react'
import { FaCheck } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodo, updateTodo } from '../../redux/todoSlice';

function Todo({ todoProps }) {
    const {id,content,isCompleted} = todoProps
    const [isEditing , setIsEditing] = useState(false);
    const [newContent , setNewContent] = useState(content)
    const dispatch = useDispatch();

    const HandleUpdate = ()=>
    {
        const payload ={
            id:id,
            content:newContent,
        }
        dispatch(updateTodo(payload))
        setIsEditing(!isEditing)
    }

    return (
        <div className={isCompleted ? 'SingleTodo completed' : 'SingleTodo notCompleted'}>
           <div className='TodoLeft'>
                <input className='todoCheckBox' type="checkbox" checked={isCompleted} onChange={()=>dispatch(toggleTodo(id))}/>
                {isEditing ? <input className='todoUpdateInput' type='text' value={newContent} onChange={(e)=>setNewContent(e.target.value)} onKeyDown={(e)=>{if(e.key == "Enter") HandleUpdate()}}/> : <span className='todoContentSpan'>{content}</span>}
           </div>
           <div className='TodoRight'>
                {isEditing ? <FaCheck onClick={()=>HandleUpdate()} className='todoButtons'/> : <FaEdit onClick={()=>setIsEditing(!isEditing)} className='todoButtons'/>}
                <MdDelete onClick={()=>dispatch(removeTodo(id))} className='todoButtons'/>
           </div>
        </div>
    )
}

export default Todo
