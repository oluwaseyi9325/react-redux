import React from 'react'

function Counter({in}) {
  return (
    <div>
        <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Counter