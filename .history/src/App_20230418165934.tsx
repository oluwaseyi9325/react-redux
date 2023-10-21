import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'

const App = () => {

  return (
    <>
    <Routes>
      <Route path='/' element={<In} />
    </Routes>
    </>
  )
}

export default App
