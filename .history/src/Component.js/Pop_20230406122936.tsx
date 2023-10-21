import React from 'react'
import { propsType } from './Person.type'

function Pop({details,arr}:propsType)  {
    console.log(arr)
  return (
    <div>
      {
    details.first
      }
    </div>
  )
}

export default Pop


