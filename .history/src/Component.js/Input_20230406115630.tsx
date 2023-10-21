import React from 'react'

type InputProps={
    value:string,
    handleChange:(event:React.ChangeEvent<HTMLInputElement>)=>void
}


function Input(props:InputProps) {
  return (
    <div>
      <input value={} type="text" />
    </div>
  )
}

export default Input
