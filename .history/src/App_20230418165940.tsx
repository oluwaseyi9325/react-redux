import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'

const App = () => {

  return (
    <>
    <Routes>
      <Route path='/' element={<Index/>} />
    </Routes>
    </>
  )
}

export default App
