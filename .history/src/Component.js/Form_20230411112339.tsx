import React, { ChangeEvent, useState } from 'react'

type myType={
   arrType:{
    name:string
   }[]
}

function Form() {
    const [name,setName]=useState<string>()
    const [arr,setArr]=useState<myType["arrType"]>([])
  return (
    <div>
        {name}
      <input placeholder='ENter name' value={name} onChange={(e:ChangeEvent<HTMLInputElement>)=>setName(e.target.value)}  />

      <button onClick={}>Add Arr</button>

    </div>
  )
}

export default Form
