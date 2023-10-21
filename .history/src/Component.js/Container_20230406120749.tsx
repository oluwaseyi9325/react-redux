import React from 'react'

type ContainerProps={
    styles:React.CSSProperties
}

function Container() {
  return (
    <div style={{border:"1px solid black",padding:"1rem"}}>
      Text content goes here
    </div>
  )
}

export default Container
