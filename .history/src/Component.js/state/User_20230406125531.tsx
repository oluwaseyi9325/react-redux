import React, { useState } from 'react'

type AuthUser={
    name:string,
    email:string
}

function User() {
    const[user,setUser]=useState(null)
    const handleLogin=()=>{
        setUser({
            name
        })
      }
      const handleLogout=()=>{
        setUser(null)
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
