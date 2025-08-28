import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addNote, deleteNote, updateNote } from '../../redux/noteSlice';
import { FaCheckCircle  } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { FaTrash } from "react-icons/fa";



function NoteModal({ modalProps, onClose }) {

    const [onUpdateNote ,setOnUpdateNote] = useState(modalProps)
    const {id, header, content, date} = onUpdateNote;
    const dispatch = useDispatch();

    const NoteUpdate = ()=>
    {
        const request = {
            id:id,
            header:header,
            content:content,
            date:date
        }
        dispatch(updateNote(request))
    }

    const NoteAdd = ()=>
    {
        if(header !== "" || content!=="")
        {
            const request = {
                id: Math.floor(Math.random()*99999),
                header : header,
                content : content,
                date : new Date().toLocaleDateString("tr-TR")
            }
            dispatch(addNote(request))
        }
    }

    const HandleButton = ()=>
    {
        if (id==="") NoteAdd();
        else NoteUpdate() 
    }

    
    return (
        <div className='modalBack'>
            <div className='modal'>
                <IoIosCloseCircle className='CloseButton' onClick={onClose}/>
                <input type="text" className='HeaderInput' value={header} onChange={(e)=>{
                    setOnUpdateNote({
                        ...onUpdateNote,
                        header:e.target.value
                    })
                }}/>
                <textarea id="ContentArea" value={content} onChange={(e)=>{
                    setOnUpdateNote({
                        ...onUpdateNote,
                        content:e.target.value
                    })
                }}/>
                <div className='BottomButtons'>
                    {id !== ""? <FaTrash className='DeleteNoteButton' onClick={()=>{dispatch(deleteNote(onUpdateNote));onClose()}}/>:"" }
                    <FaCheckCircle className='UpdateButton' onClick={()=>{HandleButton();onClose()}}/>
                </div>
            </div>
        </div>
    )
}

export default NoteModal
