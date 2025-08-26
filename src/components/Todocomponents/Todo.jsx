import React from 'react'

function Todo({ todoProps }) {
    const {id,content,isCompleted} = todoProps
    return (
        <div className={isCompleted ? 'SingleTodo completed' : 'SingleTodo notCompleted'}>
           <div className='TodoLeft'>
                {content}
           </div>
           <div className='TodoRight'>
                <button>A</button>
           </div>
        </div>
    )
}

export default Todo
