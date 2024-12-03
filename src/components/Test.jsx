import React, { useState } from 'react'

const Test = () => {
   
   const [isDark,setIsDark]=useState(true);
   console.log("rendering...");
   
  return (
    <div>
        <div className={'w-full h-full border '+(isDark && 'bg-gray-900 text-white')}>
            <button onClick={()=>setIsDark(!isDark)} className='p-2 border'>{isDark ? "🐼"+" Go-Light " : "🌚"+" Go-Dark"}</button>
        </div>
    </div>
  )
}

export default Test