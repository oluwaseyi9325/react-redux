import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Index from './Pages/Index'
import Mailer from './Pages/Mailer'
import NotFond from './Pages/NotFond'

const App = () => {

  return (
    <>
    <Routes>
      <Routes>
      <Route path='/' element={<Index/>} />
      <Route path='/mailer' element={<Mailer/>} />
      </Routes>
      <Route path='*' element={<NotFond/>}/>
    </Routes>
    </>
  )
}

export default App
