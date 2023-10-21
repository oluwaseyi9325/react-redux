import React from 'react'
import { useDispatch } from 'react-redux'
import { INCREMENT } from '../REDUX/CounterReducer'

function Buttons() {
    const dispatch=useDispatch()
    const increment=()=>{
      dispatch(INCREMENT())
    }

    const decrement=()=>{
        dispatch({type:"DECREMENT"})
    }
  return (
    <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Buttons