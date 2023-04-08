import React, { useState } from 'react'

export default function ComplexState() {
    const [fullname, setfullname] = useState({
        fname: " ",
        lname: " ",
        email: " ",
        mobileno: " "


    });

    const InputEvent = (e) => {
        const { value, name } = e.target;
        setfullname((prev) => {
            if (name === "fname") {
                return {
                    fname: value,
                    lname: prev.lname,
                    email: prev.email,
                    mobileno: prev.mobileno
                };

            }
            else if (name == "lname") {
                return {
                    fname: prev.fname,
                    lname: value,
                    email: prev.email,
                    mobileno: prev.mobileno
                }

            }
            else if (name == "email") {
                return {
                    fname: prev.fname,
                    lname: prev.lname,
                    email: value,
                    mobileno: prev.mobileno
                }

            }
            else if (name == "mobileno") {
                return {
                    fname: prev.fname,
                    lname: prev.lname,
                    email: prev.email,
                    mobileno: value

                }

            }


        })

    };

    const submitdata = (e) => {
        e.preventDefault();

    };
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
