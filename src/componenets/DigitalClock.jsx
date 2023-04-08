import React, { useState } from 'react'

export default function DigitalClock() {
    let time = new Date().toLocaleTimeString('en-US');
    const [currtime, settime] = useState(time)

    const updatetime = () => {
        time = new Date().toLocaleTimeString('en-US');
        settime(time);
    }
    //digital clock
    setInterval(updatetime, 1000);
    return (

        <>
            <h1 className='heading'> Digital clock</h1>
            <div className='box'>
                <h1>{currtime} </h1>
            </div>
        </>
    )
}
