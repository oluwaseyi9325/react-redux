import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Index from './Pages/Index'
import Mailer from './Pages/Mailer'
import NotFond from './Pages/NotFond'

const App = () => {

  return (
    <>
    <Routes>
      <
      <Route path='*' element={<NotFond/>}/>
    </Routes>
    </>
  )
}

export default App
