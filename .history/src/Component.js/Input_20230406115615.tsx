import React from 'react'

type InputProps={
    value:string,
    handleChange:(event:React.ChangeEvent<HTMLInputElement>)=>void
}


function Input(props:) {
  return (
    <div>
      <input type="text" />
    </div>
  )
}

export default Input
