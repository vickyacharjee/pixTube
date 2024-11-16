import React from 'react'
import { buttonListNames } from '../utils/constants'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className='flex'>
      {
        buttonListNames.map((name,indec)=><Button key={indec} name={name}/>)
      }
      {/* <Button name={"vicky"} />
      <Button name={"vicky"} /> */}
    </div>
  )
}

export default ButtonList