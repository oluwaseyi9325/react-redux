import React from 'react'

function ShowNow() {
  const getStore:any=useSelector((state:any)=>state.CounterReducer.count)

  return (
    <div>ShowNow</div>
  )
}

export default ShowNow