import React, { useState } from 'react'
import { addMessage } from '../store/chatSlice';
import { useDispatch } from 'react-redux';

const ChatInput = () => {
    const dispatch=useDispatch();

    const [message,setMessage]=useState('');

    const handleAddMessage=()=>{
            dispatch(addMessage({
                name:"vicky",
                message:message
            }))
            setMessage('')
    }
  return (
    <div>
       <form onSubmit={(e)=>{e.preventDefault()}} action="">
       <input value={message} onChange={(e)=>setMessage(e.target.value)} className='border mx-5 my-2' type="text" />
       <button onClick={handleAddMessage} className='border bg-red-600 p-1'>chat</button>
       </form>
    </div>
  )
}

export default ChatInput