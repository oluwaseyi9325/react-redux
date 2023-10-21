import axios from 'axios'
import React, { useState } from 'react'
import NavBar from '../Components/NavBar'
import Mailer from './Mailer'

type BulkTypes={
  numbers
}

const Index = () => {
  const[smsBody,setSmsBody]=useState<string>("")
  const[number,setNumber]=useState<any>("")
  const [loader,setLoader]=useState<boolean>(true)
  const path="Bulk-sms"

  const sendBtn=()=>{
    if (smsBody&&number) {
      const numbersArray = number.split(',').map((num: string) => num.trim())
      const details={numbersArray,smsBody}
      // const details={number,smsBody}
      // axios.post("").then(res=>{
      
      // }).catch(err=>{
      //   alert("An error occur!")
      // })
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
                        <textarea value={smsBody}  onChange={(e) => setNumber(e.target.value)} rows={3} style={{resize:"none"}} className='form-control'>
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
