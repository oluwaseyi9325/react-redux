import React from 'react'

function AddTodo() {
    const [todo,setTodo]=React.useState('')

  return (
    <div>
        <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)}/>
        <button>Add Todo</button>
    </div>
  )
}

export default AddTodo