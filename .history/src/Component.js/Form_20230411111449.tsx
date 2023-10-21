import { type } from 'os'
import React, { ChangeEvent, useState } from 'react'

type

function Form() {
    const [name,setName]=useState<string>()
    const [arr,setArr]=useState<([])
  return (
    <div>
        {name}
      <input placeholder='ENter name' value={name} onChange={(e:ChangeEvent<HTMLInputElement>)=>setName(e.target.value)}  />
    </div>
  )
}

export default Form
