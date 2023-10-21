import React, { useState } from 'react'
import NavBar from '../Components/NavBar'

const Mailer = () => {
     const[subject,setSubject]=useState<string>("")
    const path="Mailer"
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
                        <input value={subject} onChange={(e)=>setSubject(e.target.value)} className='form-control' type="text" placeholder='Subject' />
                    </div>
                    <div className='my-3'>
                    <label>Emails</label>
                        <textarea  placeholder='Seperate Email with comma' rows={7} style={{resize:"none"}} className='form-control'>
                        </textarea>
                    </div>
                    <div className='my-3'>
                    <label>Mail Body</label>
                        <textarea rows={5} style={{resize:"none"}} className='form-control'>
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

export default Mailer
