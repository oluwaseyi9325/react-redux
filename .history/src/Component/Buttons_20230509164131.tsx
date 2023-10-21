import React from 'react'

function Buttons() {
    const dispatch=useDispatch()
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