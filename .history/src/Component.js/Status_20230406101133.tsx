import React, { FC } from 'react'

 type StatusType={
    status:string
 }


function Status(props:StatusType) {
    let message;
    if (props.status==='loading') {
        message="Loading..."
    }else if (props.status==='success') {
      message="Data Fetched successfully"  
    }else if (props) {
        
    }
  return (
    <div>
    <h3></h3>

      
    </div>
  )
}

export default Status
