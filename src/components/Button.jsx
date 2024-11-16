import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='bg-gray-200 px-5 py-2 m-1'>
            {name}
        </button>
    </div>
  )
}

export default Button