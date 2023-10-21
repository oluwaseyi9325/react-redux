import axios from 'axios'
import React, { useState } from 'react'
import NavBar from '../Components/NavBar'
import Mailer from './Mailer'

type BulkTypes={
  numbersArray:string[],
}

interface Idetails{
  numbersArray:BulkTypes,
  smsBody:string
}

const Index = () => {
  const[smsBody,setSmsBody]=useState<string>("")
  const[number,setNumber]=useState<any>("")
  const [loader,setLoader]=useState<boolean>(true)
  const path="Bulk-sms"

  const sendBtn=()=>{
    if (smsBody&&number) {
      const numbersArray:BulkTypes = number.split(',').map((num: string) => num.trim())
      const details:Idetails={numbersArray,smsBody}
      axios.post("http://localhost:5000/api/v1/send-sms",details,{headers:{Authorization:`Bearer ${}`}}).then(res=>{
         console.log(res)
      }).catch(err=>{
        alert("An error occur!")
        // console.log(err)
      })
    }else{
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
                   
                    <div className='mt-2'>
                         <label>Bulk-SMS Number</label>
                         <textarea value={number} onChange={(e)=>setNumber(e.target.value)} placeholder='TypeNumber with space' rows={5} style={{resize:"none"}} className='form-control'>
                        </textarea>
                    </div>
                    <div className='my-3'>
                    <label>Bulk-SMS Body</label>
                        <textarea value={smsBody}  onChange={(e) => setSmsBody(e.target.value)} rows={3} style={{resize:"none"}} className='form-control'>
                        </textarea>
                    </div>
                    <div className='my-3'>
                        <button onClick={()=>sendBtn()} className='btn btn-lg btn-success col-12'>SEND BULK-SMS</button>
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
