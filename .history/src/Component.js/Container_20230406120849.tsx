import React from 'react'

type ContainerProps={
    styles:React.CSSProperties
}

function Container(props:ContainerProps) {
  return (
    <div style={props.Co}>
      Text content goes here
    </div>
  )
}

export default Container
