import axios from 'axios'
import React, { useState } from 'react'
import { BarLoader } from 'react-spinners'
import NavBar from '../Components/NavBar'

const Mailer = () => {
     const[subject,setSubject]=useState<string>("")
      const[email,setEmail]=useState<string>("")
      const[body,setBody]=useState<string>("")
      const [loader,setLoader]=useState<boolean>(false)
    const path="Mailer"

    const sendBtn=()=>{
      setLoader(true)
        if (subject&&email&&body) {
            const Emails=email.split(',').map((num: string) => num.trim())
            const details={Emails,subject,bod}
            console.log(details)
            axios.post("http://localhost:5000/api/v1/send-mail",details,{headers:{Authorization:`Bearer ${123456789}`}}).then(res=>{
              setLoader(false)
                console.log(res)
            }).catch(err=>{
                alert("An error occur!")
                setLoader(false)
                // console.log(err)
            })
        }else{
          setLoader(false)
            alert("Please enter all details!")
        }
    }

  return (
   <>
    <NavBar path={path}/>

    <div className='container'>
       <div className='row mt-3'> 
       <div className='mx-auto col-lg-5'>
            <div className='p-3'>
                  <div>
                 <div className='col-12 my-2'>
                 <BarLoader loading={loader} className='w-100' color="red" />
                 </div>
                    <div>
                         <label>Mail Subject</label>
                        <input value={subject} onChange={(e)=>setSubject(e.target.value)} className='form-control' type="text" placeholder='Subject' />
                    </div>
                    <div className='my-3'>
                    <label>Emails</label>
                        <textarea value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Seperate Email with comma' rows={7} style={{resize:"none"}} className='form-control'>
                        </textarea>
                    </div>
                    <div className='my-3'>
                    <label>Mail Body</label>
                        <textarea value={body} onChange={(e)=>setBody(e.target.value)} rows={5} style={{resize:"none"}} className='form-control'>
                        </textarea>
                    </div>
                    <div className='my-3'>
                        <button onClick={sendBtn} className='btn btn-lg btn-danger col-12'>SEND MAILS</button>
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
