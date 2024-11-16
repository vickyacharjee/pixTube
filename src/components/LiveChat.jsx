import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../store/chatSlice'
import { generateRaandomName,generateRaandomMessage } from '../utils/helper'
import { chatFrequency } from '../utils/constants'
import ChatInput from './ChatInput'


const LiveChat = () => {
  const dispatch=useDispatch()
  const chatMessages=useSelector(store=>store.chat.messages)


  useEffect(()=>{
    const timer=setInterval(()=>{
      console.log('APi Polled at 2000 MS');
      dispatch(addMessage(
        {
          name:generateRaandomName(),
          message:generateRaandomMessage()
        }
      ))
    },chatFrequency)
    return ()=>clearInterval(timer)
  },[])

  return (
    <>
    <div className='mx-2 p-2 border w-[400px] h-[600px] bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
      {
        chatMessages.map((chat)=><ChatMessage name={chat.name} message={chat.message}/>)
      }
    </div>
    <div>
      <ChatInput/>
    </div>
    </>
  )
}

export default LiveChat