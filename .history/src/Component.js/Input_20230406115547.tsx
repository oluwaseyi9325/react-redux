import React from 'react'

type InputProps={
    value:string,
    handleChange:(event:React.ChangeEvent<Ht)=>void
}


function Input() {
  return (
    <div>
      <input type="text" />
    </div>
  )
}

export default Input
