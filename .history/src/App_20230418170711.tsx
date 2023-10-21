import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Index from './Pages/Index'

const App = () => {

  return (
    <>
    <Routes>
      <Route path='/' element={<Index/>} />
      <Route path='*' element={<Not}/>
    </Routes>
    </>
  )
}

export default App
