import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADDACTION } from '../REDUX/TodoReducer'

function AddTodo() {
    const [todo,setTodo]=React.useState('')
    const getTodo=useSelector((state:any)=>state.TodoReducer)
    const dispatch=useDispatch()
    console.log(getTodo)
    const add=()=>{
        const title=todo
    dispatch(ADDACTION(title))
    }

  return (
    <div>
        <input className='form-control' type="text" value={todo} onChange={(e)=>setTodo(e.target.value)}/>
        <button onClick={add}>Add Todo</button>
    </div>
  )
}

export default AddTodo