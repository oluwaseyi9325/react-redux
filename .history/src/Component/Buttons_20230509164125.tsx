import React from 'react'

function Buttons() {
    const dio=useSelector((state:any)=>state.CounterReducer.count)
    const increment=()=>{

    }
  return (
    <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Buttons