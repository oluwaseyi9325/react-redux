import React from 'react'
import { useSelector } from 'react-redux'

function ShowTodo() {
    const getTodo=useSelector((state:any)=>state.TodoReducer.todo))
  return (
    <div>ShowTodo</div>
  )
}

export default ShowTodo