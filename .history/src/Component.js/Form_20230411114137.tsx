import React, { ChangeEvent, useState } from 'react'

type myType={
   arrType:{
    name:string
   }[]
}

function Form() {
    const [name,setName]=useState<string>("")
    const [arr,setArr]=useState<myType["arrType"]>([])

    const btn=()=>{
        let details={name}
       setArr([...arr,details])
    }
  return (
    <div>
       <div>
         <ol>
            {
                arr.map((val:myType["arrType"]  >,i:number)=>{
                    return<li>{val.name}</li>
                })
            }
         </ol>
       </div>
      <input placeholder='ENter name' value={name} onChange={(e:ChangeEvent<HTMLInputElement>)=>setName(e.target.value)}  />
     
      <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => btn()}>Add Arr</button>

      

    </div>
  )
}

export default Form
