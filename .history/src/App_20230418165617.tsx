import React from 'react'
import { Route, Router } from 'react-router-dom'

const App = () => {

  return (
    <>
      <Router>
        <Route path='/' element="<h1></h1>" />
      </Router>
    </>
  )
}

export default App
