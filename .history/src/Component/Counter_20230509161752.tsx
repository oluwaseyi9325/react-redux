import React from 'react'

function Counter({increment}) {
  return (
    <div>
        <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Counter