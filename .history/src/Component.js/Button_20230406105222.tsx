import React from 'react'

type ButtonProps={
    handleClick: ()=>void
}

function Button() {
  return (
    <div>
      <button>Click</button>
    </div>
  )
}

export default Button
