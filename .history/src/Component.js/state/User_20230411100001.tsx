import React, { useState } from 'react'

type AuthUser={
    name:string,
    email:string
}

function User() {
    const[user,setUser]=useState<null|AuthUser>(null)

    // const[user,setUser]=useState<AuthUser>({}as AuthUser)
    const handleLogin=()=>{
        setUser({
            name:"Seyi",
            email:"ade@gmail.com"
        })
      }
      const handleLogout=()=>{
        setUser(onull)
      }
  return (
    
    <div>
       <button onClick={handleLogin}>Login</button>

    <button onClick={handleLogout}>Logout</button>
    <div>User name is {user?.name}</div>
    <div>User email is{user?.email}</div>
    </div>
  )
}

export default User
