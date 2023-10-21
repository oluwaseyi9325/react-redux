import React from 'react'

type ButtonProps={
    handleClick: ()=>void
}

function Button(props:ButtonProps) {
  return (
    <div>
      <button onClick={props}>Click</button>
    </div>
  )
}

export default Button
