import React from 'react'
import {USER_LOGO} from "../utils/constants"

const ChatMessage = ({name, message}) => {
  return (
    <div>
      <div className='flex my-3 shadow-sm items-center'>
      <img className='h-8' src={USER_LOGO} alt="User" />
      <span className='font-bold pr-2'>{name}</span>
      <span>{message}</span>
      </div>
    </div>
  )
}

export default ChatMessage