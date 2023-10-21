import React, { ChangeEvent, useState } from 'react'

type myType={
   arrType:{
    name:string
   }[]
}

function Form() {
    const [name,setName]=useState<string>()
    const [arr,setArr]=useState<myType ></myType>([])
  return (
    <div>
        {name}
      <input placeholder='ENter name' value={name} onChange={(e:ChangeEvent<HTMLInputElement>)=>setName(e.target.value)}  />
    </div>
  )
}

export default Form
