import { type } from 'os'
import React from 'react'
import { useNavigate } from 'react-router-dom'


type mailerType={
    path:"Bulk-sms"|"Mailer"
}


const NavBar = ({path}:mailerType) => {
     const nav=useNavigate()
  return (
    <>

      <div className='text-center col-lg-6  mx-auto mt-3'>
        <h4 className='text-white display-4 bg-info'><b>SENDER APPLICATION</b></h4>
        <hr/>
        <div className='gap-4 d-flex justify-content-around'>
            <button onClick={()=>nav("/")} className={(path=="Bulk-sms")?"btn btn-success btn-lg":"btn btn-outline-success btn-lg"}>BULK-SMS</button>
            <button onClick={()=>nav("/mailer")} className={(path=="Mailer")?"btn btn-danger btn-lg":"btn btn-outline-danger btn-lg"}>MAILER</button>
        </div>
        <hr/>
      </div>

    </>
  )
}

export default NavBar
