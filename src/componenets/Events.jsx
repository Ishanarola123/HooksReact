import React, { useState } from 'react'

export default function Events() {
  let bg="red";
  let name="click me!" + '😧';

  const [currbg,setBg]=useState(bg);
  const [currname,setNewname]=useState(name);


   const myfunction=()=>{
    let newbg="green";
    setBg(newbg);
    let newname="you clicked me!" + '😄';
    setNewname(newname);
   }
  
   const doubleclikfun=()=>{
    let doublename="you click me two times!" + '👍'
    setNewname(doublename);
   }


    return (
        <>
            <h1 className='heading'> Events Demo </h1>
            <div className='box' style={{backgroundColor:currbg}}>
               <button onClick={myfunction} onDoubleClick={doubleclikfun} className='btn'>{currname}</button>
            </div>

            
        </>
    )
}
