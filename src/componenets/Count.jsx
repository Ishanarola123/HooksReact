import React, { useState } from 'react'


export default function Count() {

    // const state = useState();
    // console.log(state);
    //array destructuring is used because useState returns the array

    //arr=[1,2,3,4]
    //[a,b,c,d]=arr
    //now a is varibale which is hold 1

    const [count, setCount] = useState(0);
    //current data and updated data 

    const IncNum = () => {
        //updatedata
        setCount(count + 1);

    }
    return (
        <>
           <h1 className='heading'> Count using Hooks</h1>
            <div className='box'>
                <h1> {count} </h1>
                <button onClick={IncNum} className='btn'>Count</button>
            </div>

        </>
    )
}



