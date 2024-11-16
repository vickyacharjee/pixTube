import React from 'react'
import { USER_LOGO } from '../utils/constants'

const Comment = ({info}) => {
    const {name,text,replies}=info;
  return (
    <div className='flex border w-1/2 p-2 m-3 bg-gray-200'>
        <img className='h-8' src={USER_LOGO} alt="user-logo" />
        <div>
            <p className='font-bold'>{name}</p>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Comment