import React from 'react'
import NavBar from '../Components/NavBar'

const Mailer = () => {
  return (
   <>
    <NavBar/>

    <div className='container'>
       <div className='row mt-3'> 
       <div className='mx-auto col-5'>
            <div className='p-3'>
                  <div>
                    <div>
                         <label>Mail Subject</label>
                        <input className='form-control' type="text" placeholder='Subject' />
                    </div>
                    <div className='my-3'>
                    <label>Mail Body</label>
                        <textarea ro style={{resize:"none"}} className='form-control'>

                        </textarea>
                    </div>
                  </div>
            </div>
       </div>
       </div>
    </div>

   </>
  )
}

export default Mailer