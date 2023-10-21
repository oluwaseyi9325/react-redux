import React from 'react'
type propsType={
    details:{
        first: string,
        second: string
    },
    arr:{
        id:number,
        title:string
    }[]
}

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


