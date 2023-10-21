import React from 'react'
import { useSelector } from 'react-redux'

function ShowTodo() {
    const getTodo=useSelector((state:any)=>state.TodoReducer.todos)
  return (
    <div>
        {getTodo.map((todo:any)=>(
            <div key={todo.id}>
                <h1>{todo.title}</h1>
                )
    </div>
  )
}

export default ShowTodo