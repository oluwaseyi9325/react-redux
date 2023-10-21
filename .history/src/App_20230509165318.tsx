import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Router, Routes } from 'react-router-dom'
import AddTodo from './Component/AddTodo'
import Buttons from './Component/Buttons'
import Counter from './Component/Counter'
import Show from './Component/Show'
import ShowNow from './Component/ShowNow'
import ShowTodo from './Component/ShowTodo'


const App = () => {
  const [count, setCount] = React.useState(0)

  const increment = () => setCount((c) => c + 1)
  const decrement = () => setCount((c) => c - 1)

  const getStore:any=useSelector((state:any)=>state.CounterReducer.count)
  
  
  return (
    <>

    <h5>Todos</h5>
    <ShowTodo/>
    <AddTodo/>
    
    <hr/>
    <h5>Redux here</h5>

      <ShowNow/>
      <Buttons/>

    <hr/>
    normal react
      <h4>{count}</h4>
<Show count={count}/>
      
<Counter increment={increment} decrement={decrement}/>
    </>
  )
}

export default App
