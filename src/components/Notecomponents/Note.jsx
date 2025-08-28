import React from 'react'

function Note({noteProps ,onClick}) {
    
    const {id, header, content, date} = noteProps;
  
    return (
    <div className='NoteCard' onClick={onClick}>
        <h4 className='NoteHeader'>{header}</h4>
        <p className='NoteContent'>{content}</p>
        <span className='NoteDate'>{date}</span>
    </div>
  )
}

export default Note
