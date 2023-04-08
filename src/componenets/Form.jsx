import React, { useState } from 'react'

export default function Form() {
    const [currentname, setname] = useState("");
    const [Fullname, setFullname] = useState("");
    const [Lastname, setlastname] = useState("");
    const myhandler = (e) => {

        setname(e.target.value);
        // console.log(e.target.value);

    };
    const myhandler2=(e)=>{
       setlastname(e.target.value)
    }
    const submitdata = (e) => {
        e.preventDefault();
        setFullname(currentname + " " +Lastname);

    };
    return (
        <>

            <div className='container'>
                <form onSubmit={submitdata}>
                    <h1 className='heading'>Hello {Fullname} </h1>
                    <input type='text'
                        placeholder='Enter your Name'
                        onChange={myhandler}
                        value={currentname} />
                        <br></br>
                        <br></br>
                    <input type='text'
                        placeholder='Enter your Last Name'
                        onChange={myhandler2}
                        value={Lastname} />
                    <br></br>
                    <hr></hr>
                    <button type='submit' >Submit</button>
                </form>
            </div>
        </>
    )
}
