import React, { useState } from 'react'

function Form() {
    const [name,setName]=useState<string>("")
  return (
    <div>
      <input placeholder='ENter name' value={name} onChange={(e)=>setName(e.target.vaue)}  />
    </div>
  )
}

export default Form
