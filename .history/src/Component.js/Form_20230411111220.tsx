import React, { useState } from 'react'

function Form() {
    const [name,setName]=useState<string>("")
  return (
    <div>
      <input placeholder='ENter name' value={name} onch  />
    </div>
  )
}

export default Form
