import React from 'react'

function LoggedIn() {
  return (
    <div>
    <button onClick={handleLogin}>Login</button>
    <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default LoggedIn
