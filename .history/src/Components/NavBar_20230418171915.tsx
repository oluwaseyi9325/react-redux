import React from 'react'

const NavBar = () => {
  return (
    <>

      <div className='text-center col-6 mx-auto'>
        <h4 className='text-success display-4 bg-info'><b>SENDER APPLICATION</b></h4>
        <hr/>
        <div className='gap-4 d-flex justify-content-around'>
            <button className='btn btn-outline-success btn-lg'>BULK-SMS</button>
            <button className='btn btn-outline-danger btn-lg'>MAILER</button>
        </div>
        <hr/>
      </div>

    </>
  )
}

export default NavBar
