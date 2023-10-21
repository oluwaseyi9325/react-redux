import React, { useState } from 'react'

function Form() {
    const [name,setName]=useState<string>("")
  return (
    <div>
      <input placeholder='ENter name' value={name} onChange={(e:Cha)=>setName(e.target.value)}  />
    </div>
  )
}

export default Form
