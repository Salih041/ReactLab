import { createSlice } from '@reduxjs/toolkit'

const GetNotesFromLocal = ()=>
{
    return JSON.parse(localStorage.getItem("ReactLabNotes")) ?? []
}

const WriteNotesToLocal = (state)=>
{
    localStorage.setItem("ReactLabNotes", JSON.stringify(state.notes))
}

const initialState = {
  notes: GetNotesFromLocal()
}

export const noteSlice = createSlice({
    name:"noteSlice",
    initialState,
    reducers:{
        addNote:(state,action)=>{
            state.notes.push(action.payload);
            WriteNotesToLocal(state)
        },
        updateNote:(state,action)=>
        {
            state.notes = state.notes.map((note)=>{
                if(note.id === action.payload.id)
                {
                    note = {
                        ...note,
                        header : action.payload.header,
                        content : action.payload.content
                    }
                }
                return note;
            })
            WriteNotesToLocal(state)
        },
        deleteNote : (state,action)=>{
            state.notes = state.notes.filter((note)=>note.id!==action.payload.id);
            WriteNotesToLocal(state)
        }
    }
})

export const {addNote, updateNote, deleteNote} = noteSlice.actions

export default noteSlice.reducer