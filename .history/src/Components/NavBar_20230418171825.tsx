import React from 'react'

const NavBar = () => {
  return (
    <>

      <div className='text-center col-6 mx-auto'>
        <h4 className='text-success display-4'><b>SENDER APPLICATION</b></h4>
        <div className='gap-4 d-flex justify-content-around'>
            <button className='btn btn-outline-success btn-lg'>BULK-SMS</button>
            <button className='btn btn-info'>MAILER</button>
        </div>
      </div>

    </>
  )
}

export default NavBar
