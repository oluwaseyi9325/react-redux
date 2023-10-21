import React, { useState } from 'react'

function User() {
    const[user,setUser]=useState()
  return (
    <div>
       <button onClick={handleLogin}>Login</button>
    <button onClick={handleLogout}>Logout</button>
    <div>User is {isLoggedIn?'logged in':"logged out"} out</div>
    </div>
  )
}

export default User
