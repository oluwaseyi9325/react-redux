import React from 'react'
import NavBar from '../Components/NavBar'
import Mailer from './Mailer'

const Index = () => {
  const path="Bulk-sms"
  return (
    <>
    <NavBar path={path}/>

    <div className='container'>
       <div className='row mt-3'> 
       <div className='mx-auto col-lg-5'>
            <div className='p-3'>
                  <div>
                    <div>
                         <label>Mail Subject</label>
                        <input className='form-control' type="text" placeholder='Subject' />
                    </div>
                    <div className='my-3'>
                    <label>Bulk-SMS Body</label>
                        <textarea rows={7} style={{resize:"none"}} className='form-control'>
                        </textarea>
                    </div>
                    <div className='my-3'>
                        <button className='btn btn-lg btn-danger col-12'>SEND MAILS</button>
                    </div>
                  </div>
            </div>
       </div>
       </div>
    </div>

   </>
  )
}

export default Index
