import React, { useState } from 'react'

function User() {
    const[user,setUser]=useState()
    const handleLogin=()=>{
       
      }
      const handleLogout=()=>{
      
      }
  return (
    
    <div>
       <button onClick={handleLogin}>Login</button>

    <button onClick={handleLogout}>Logout</button>
    <div>User name is </div>
    <div>User email is</div>
    </div>
  )
}

export default User
