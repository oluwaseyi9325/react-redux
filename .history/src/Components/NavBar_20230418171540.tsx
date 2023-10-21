import React from 'react'

const NavBar = () => {
  return (
    <>

      <div className='text-center'>
        <h4 className='text-success display-4'><b>SENDER APPLICATION</b></h4>
        <div>
            <button className='btn btn-info'>BULK-SMS</button>
            <button className='btn btn-in'>MAILER</button>
        </div>
      </div>

    </>
  )
}

export default NavBar
