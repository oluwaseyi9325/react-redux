import React from 'react'

type ButtonProps={
    handleClick: ()=>void
}

function Button(props:ButtonProps) {
  return (
    <div>
      <button>Click</button>
    </div>
  )
}

export default Button
