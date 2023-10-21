import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'


const App = () => {
  const [count, setCount] = React.useState(0)
  
  return (
    <>
      <h4></h4>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

    </>
  )
}

export default App
