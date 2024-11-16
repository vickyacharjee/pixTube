import React, { useState } from 'react'

const Test = () => {
    // const [hide,setHide]=useState();
    // const handlePassword=()=>{
    //     setHide(!hide);
    const [hide,setHide]=useState();
    const [size,setSize]=useState(0);
    const handlePassword=()=>{
        setHide(!hide);
    }
  return (
    <div>
        <h1>password!</h1>
        {/* <div>
            <input className='border p-5' type={hide ? "password":"text"}  />
            <button onClick={handlePassword} className='text-3xl m-3'>{hide ? "🙈":"👀"}</button>
        </div> */}
        <div><p>{(size.length<=7 ) ? <span className='text-red-700 font-bold'>Weak</span> : <span className='text-green-700 font-bold'>Strong</span>}</p>
            
            <input className='border p-5' type={hide ? "password":"text"} onChange={(e)=>{setSize(e.target.value)}} />
            <button onClick={handlePassword} className='text-3xl m-3'>{hide ? "🙈":"👀"}</button>
        </div>
    </div>
  )
}

export default Test