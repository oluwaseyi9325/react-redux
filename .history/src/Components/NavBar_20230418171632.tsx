import React from 'react'

const NavBar = () => {
  return (
    <>

      <div className='text-center'>
        <h4 className='text-success display-4'><b>SENDER APPLICATION</b></h4>
        <div className='gap-4'>
            <button className='btn btn-info'>BULK-SMS</button>
           <div>
           <button className='btn btn-info'>MAILER</button>
           </div>
        </div>
      </div>

    </>
  )
}

export default NavBar
