import React, { ChangeEvent, useState } from 'react'

function Form() {
    const [name,setName]=useState<string>()
    const [arr,ser]
  return (
    <div>
        {name}
      <input placeholder='ENter name' value={name} onChange={(e:ChangeEvent<HTMLInputElement>)=>setName(e.target.value)}  />
    </div>
  )
}

export default Form
