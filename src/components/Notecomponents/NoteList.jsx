import React, { useState } from 'react'
import Note from './Note'
import { useSelector } from 'react-redux'
import CreateNote from '../Notecomponents/CreateNote'
import NoteModal from './NoteModal'

function NoteList() {

    const {notes} = useSelector((store)=>store.notes)

    const [selectedNote , setSelectedNote] = useState(null);
    const [isModalOpen , setIsModalOpen] = useState(false);

    const closeModal = ()=>{
        setIsModalOpen(false);
        setSelectedNote(null);
    }

    const openModal = (note)=>{
        setSelectedNote(note);
        setIsModalOpen(true);
    }

    return (
        <div className='NoteListContainer'>
            <CreateNote onClick={()=>openModal({id:"",header : "",content : "",date : "",})}></CreateNote>
            {
                isModalOpen ? <NoteModal modalProps = {selectedNote} onClose={closeModal}></NoteModal> : ""
            }
            {
                notes.map((note)=>(
                    <Note key={note.id} noteProps={note} onClick={()=>openModal(note)}></Note>
                ))
            }
        </div>
    )
}

export default NoteList
