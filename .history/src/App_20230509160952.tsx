import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'


const App = () => {

  return (
    <>
    <Routes>
      <Route path='/' element={<Index/>} />
      <Route path='/mailer' element={<Mailer/>} />
      <Route path='*' element={<NotFond/>}/>
    </Routes>
    </>
  )
}

export default App
