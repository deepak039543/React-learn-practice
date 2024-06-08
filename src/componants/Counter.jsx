import React from 'react'
import { useState, useEffect, useRef } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);
    const [color,setColor]=useState("pink");
    const [isclicked, setIsclicked] = useState(false);

    useEffect(() => {
        if(isclicked){
              setColor("red");
        }else{
            setColor("pink");
        }
    }, [isclicked])

    const handleStart = () => {
        setCount(count + 1);
    }

    const handleEnd = () => {
        setCount(count - 1);
    }

    const handleReset = () => {
        setCount(0);
        setIsclicked(!isclicked);
    }

    return (
        <>
            <div className={`bg-${color}-500 flex`}>
                <h1 className='text-center text-xl font-bold'>{count} </h1>

                <button onClick={handleStart} className='bg-green-500 px-4 py-2 rounded m-2'>Increase</button>
                <button onClick={handleEnd} className='bg-red-500 px-4 rounded m-2'>Decrease</button>
                <button onClick={handleReset} className='bg-pink-500 px-4 rounded m-2'>Reset</button>
            </div>

        </>
    )
}

export default Counter