import React from 'react'

function LoggedIn() {
    const handleLogin=()=>{}
    const handleLogout=()=>{}
  return (
    <div>
    <button onClick={handleLogin}>Login</button>
    <button onClick={handleLogout}>Logout</button>
    <div>User is logged in / log</div>
    </div>
  )
}

export default LoggedIn
