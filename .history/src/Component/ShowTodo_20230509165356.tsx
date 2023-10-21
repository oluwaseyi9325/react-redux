import React from 'react'
import { useSelector } from 'react-redux'

function ShowTodo() {
    const getTodo=useSelector((state:any)=>state.TodoReducer)
    console.log(getTodo)
  return (
    <div>
       

    </div>
  )
}

export default ShowTodo