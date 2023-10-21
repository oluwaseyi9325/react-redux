import React from 'react'

type ButtonProps={
    handleClick: ()=>void
}

function Button(props) {
  return (
    <div>
      <button>Click</button>
    </div>
  )
}

export default Button
