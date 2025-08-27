import { createSlice } from '@reduxjs/toolkit'


const GetTodosFromLocal = ()=>
{
    return JSON.parse(localStorage.getItem("ReactLabTodos")) ?? []
}

const WriteTodosToLocal = (state)=>
{
    localStorage.setItem("ReactLabTodos", JSON.stringify(state.todos))
}

const initialState = {
  todos: GetTodosFromLocal()
}

export const todoSlice = createSlice({
    name:'todoSlice',
    initialState,
    reducers:{
        addTodo:(state,action)=>
        {
            state.todos.push(action.payload);
            WriteTodosToLocal(state);
        },
        removeTodo:(state,action)=>
        {
            state.todos = state.todos.filter((todo)=>todo.id!==action.payload);
            WriteTodosToLocal(state)
        },
        updateTodo:(state,action)=>
        {
            const newtodo = action.payload
            state.todos.map((todo)=>{
                if(todo.id === newtodo.id) todo.content = newtodo.content
            })
            WriteTodosToLocal(state)
        },
        toggleTodo:(state,action)=>
        {
            state.todos = state.todos.map((todo)=>{
                return todo.id == action.payload ? {...todo, isCompleted:!todo.isCompleted}:todo
            })
            WriteTodosToLocal(state)
        }
    }
})

export const {addTodo,removeTodo,updateTodo,toggleTodo} = todoSlice.actions

export default todoSlice.reducer