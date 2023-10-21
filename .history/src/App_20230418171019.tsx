import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Index from './Pages/Index'
import NotFond from './Pages/NotFond'

const App = () => {

  return (
    <>
    <Routes>
      <Route path='/' element={<Index/>} />
      <Route path='/mailer' element={<M} />
      <Route path='*' element={<NotFond/>}/>
    </Routes>
    </>
  )
}

export default App
