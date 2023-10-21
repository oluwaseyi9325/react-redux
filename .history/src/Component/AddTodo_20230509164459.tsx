import React from 'react'

function AddTodo() {
    const [todo,setTodo]=React.useState('')

  return (
    <div>
        <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)}/>
        
    </div>
  )
}

export default AddTodo