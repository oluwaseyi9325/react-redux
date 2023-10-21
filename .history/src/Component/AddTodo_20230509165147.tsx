import React from 'react'
import { useDispatch } from 'react-redux'

function AddTodo() {
    const [todo,setTodo]=React.useState('')
    const dispatch=useDispatch()
    const add=()=>{

    }

  return (
    <div>
        <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)}/>
        <button onClick={add}>Add Todo</button>
    </div>
  )
}

export default AddTodo