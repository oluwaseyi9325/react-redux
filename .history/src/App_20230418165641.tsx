import React from 'react'
import { Route, Router } from 'react-router-dom'

const App = () => {

  return (
    <>
      <Router location={''} >
        <Route path='/' element="<h1>Hello wolrd</h1>" />
      </Router>
    </>
  )
}

export default App
