import React from 'react'
import { useSelector } from 'react-redux'

function ShowNow() {
  const getStore:any=useSelector((state:any)=>state.CounterReducer.count)

  return (
    <div>ShowNow{}</div>
  )
}

export default ShowNow