import React, { useState } from 'react'
import { addMessage } from '../store/chatSlice';
import { useDispatch,useSelector } from 'react-redux';

const ChatInput = () => {
    const dispatch=useDispatch();
    let showName=useSelector(store=>store.app.showProfile);

    const [message,setMessage]=useState('');

    const handleAddMessage=()=>{
            dispatch(addMessage({
                name:showName ? showName : "unknown",
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