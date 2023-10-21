import React from 'react'
import { useDispatch } from 'react-redux'

function Buttons() {
    const dispatch=useDispatch()
    const increment=()=>{
      dispatch({type:"INCREMENT"})
    }
  return (
    <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Buttons