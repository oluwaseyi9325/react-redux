import React,{useState} from 'react'

function LoggedIn() {
    const[isLoggedIn,setIsLoggedIn]=useState(false)
    const handleLogin=()=>{}
    const handleLogout=()=>{}
  return (
    <div>
    <button onClick={handleLogin}>Login</button>
    <button onClick={handleLogout}>Logout</button>
    <div>User is {isLoggedIn?} out</div>
    </div>
  )
}

export default LoggedIn
