import React from 'react'
import Note from '../components/NoteComponents/Note'
import NoteList from '../components/NoteComponents/NoteList'
import '../css/Note.css'

function Notes() {
  return (
    <div style={{padding:'0', paddingTop:'20px'}}>
      <h2 style={{margin:'0', textAlign:'center'}}>Notes</h2>
      <NoteList></NoteList>
    </div>


  )
}

export default Notes
