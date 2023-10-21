import React from 'react'
import { useSelector } from 'react-redux'

function ShowTodo() {
    const getTodo=useSelector((state:any)=>state.TodoReducer.todos)
  return (
    <div>
        {getTodo.map((todo:any)=>(
            
    </div>
  )
}

export default ShowTodo