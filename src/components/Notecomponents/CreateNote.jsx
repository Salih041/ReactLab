import React, { useState } from 'react'
import { FaPlusCircle } from "react-icons/fa";


function CreateNote({onClick}) {


    return (
        <div className='CreateNoteDiv' onClick={(onClick)}><FaPlusCircle className='CreateNotePlusIcon' style={{fontSize:'6rem'}}/></div>
    )
}

export default CreateNote
