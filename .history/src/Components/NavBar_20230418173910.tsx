import { type } from 'os'
import React from 'react'


type mailerType={
    path:"Bulk-sms"|"Mailer"
}


const NavBar = ({path}:mailerType) => {
     console.log(path)
  return (
    <>

      <div className='text-center col-lg-6  mx-auto mt-3'>
        <h4 className='text-success display-4 bg-info'><b>SENDER APPLICATION</b></h4>
        <hr/>
        <div className='gap-4 d-flex justify-content-around'>
            <button className='btn btn-outline-success btn-lg'>BULK-SMS</button>
            <button className={(path=="Mailer"?"btn btn-danger  btn-lg":"")}>MAILER</button>
        </div>
        <hr/>
      </div>

    </>
  )
}

export default NavBar
