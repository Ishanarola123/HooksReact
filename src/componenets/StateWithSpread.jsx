import React, { useState } from 'react'

export default function StateWithSpread() {
    const [fullname,setfullname]=useState({
        fname:" ",
        lname:" ",
        email:" ",
        mobileno:" "
    })


    const submitdata = (e) => {
        e.preventDefault();

    };
    const InputEvent=(e)=>{
        console.log(e.target)
        const {value,name}=e.target;
        setfullname((prev)=>{
            console.log(prev);
          return{
                ...prev,
                [name]:value
          }
        })

    }
  return (
    <>

    <div className='container'>
        <form onSubmit={submitdata}>
            <h1 className='heading'>Hello {fullname.fname} {fullname.lname} </h1>
            <p>{fullname.email} {fullname.mobileno} </p>
            <input type='text'
                placeholder='Enter your Name'
                name='fname' onChange={InputEvent}
                value={fullname.fname}
            />
            <br></br>
            <br></br>
            <input type='text'
                placeholder='Enter your Last Name'
                name='lname' onChange={InputEvent}
                value={fullname.lname}
            />
            <br></br>
            <br></br>
            <input type='text'
                placeholder='Enter your Email id'
                name='email' onChange={InputEvent}
                value={fullname.email}
            />
            <br></br>
            <br></br>
            <input type='text'
                placeholder='Enter your Mobile no'
                name='mobileno' onChange={InputEvent}
                value={fullname.mobileno}
            />
            <br></br>
            <br></br>
            <hr></hr>
            <button type='submit' >Submit</button>
        </form>
    </div>
</>
  )
}
