import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'


const App = () => {
  const [count, setCount] = React.useState(0)

  const increment = () => setCount((c) => c + 1)
  const decrement = () => setCount((c) => c - 1)
  
  return (
    <>
      <h4>{count}</h4>

      

    </>
  )
}

export default App
