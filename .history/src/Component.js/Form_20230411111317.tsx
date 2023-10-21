import React, { ChangeEvent, useState } from 'react'

function Form() {
    const [name,setName]=useState<string>("")
  return (
    <div>
      <input placeholder='ENter name' value={name} onChange={(e:ChangeEvent<HTMLInputElement/>)=>setName(e.target.value)}  />
    </div>
  )
}

export default Form
