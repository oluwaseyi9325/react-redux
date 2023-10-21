import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Counter from './Component/Counter'
import Show from './Component/Show'


const App = () => {
  const [count, setCount] = React.useState(0)

  const increment = () => setCount((c) => c + 1)
  const decrement = () => setCount((c) => c - 1)

  const getStore=use
  
  return (
    <>
      <h4>{count}</h4>
<Show count={count}/>
      
<Counter increment={increment} decrement={decrement}/>
    </>
  )
}

export default App
