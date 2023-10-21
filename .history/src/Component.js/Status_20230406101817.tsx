import React, { FC } from 'react'

 type StatusType={
    status: 'loading'|'sucess'|error
 }


function Status(props:StatusType) {
    let message;
    if (props.status==='loading') {
        message="Loading..."
    }else if (props.status==='success') {
      message="Data Fetched successfully"  
    }else if (props.status==='error') {
       // eslint-disable-next-line @typescript-eslint/no-unused-vars
       message='Error fetching data' 
    }
  return (
    <div>
    <h3>Status - {message}</h3>

      
    </div>
  )
}

export default Status
