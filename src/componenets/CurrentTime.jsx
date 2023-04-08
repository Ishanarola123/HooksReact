import React, { useState } from 'react'

export default function CurrentTime() {
  let time=new Date().toLocaleTimeString('en-US');
  
  const [currtime,setTime]=useState(time);
  
  const DisTime=()=>{
  
    let distime=new Date().toLocaleTimeString('en-US');
     setTime(distime);
    
  }

  return (
   <>
     <h1 className='heading'> Get Time on Refreshing and Clicking Button using useState Hook </h1>
            <div className='box'>
                <h1> {currtime} </h1>
                <button onClick={DisTime} className='btn'>Count</button>
            </div>
   </>
  )

}
