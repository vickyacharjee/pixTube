import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { subscription } from '../utils/constants'

const SideBar = () => {
  const isMenu=useSelector(store=>store.app.isMenu)
  if (!isMenu) return false;
  return (
    
    <div className='sticky top-10 h-screen w-52 overflow-y-auto'>
      <div className='p-3  shadow-lg  rounded-xl'>

      
      <div className=' text-xl p-1  font-bold  hover: bg-gray-50 border-b border-b-black '>
        <div className=' my-2 flex p-2  gap-2 '>
           <img className='h-6' src="https://cdn-icons-png.flaticon.com/128/1946/1946488.png" alt="" />
           <Link to={"/"}> <p>Home</p> </Link>
        </div>
        <div className='my-2 flex p-2 gap-2'>
           <img className='h-6' src="https://cdn-icons-png.flaticon.com/128/15522/15522333.png" alt="" />
            <p> Shorts</p> 
        </div>
        <div className='my-2 flex p-1 gap-2'>
           <img className='h-6' src="https://cdn-icons-png.flaticon.com/128/2989/2989849.png" alt="" />
           <Link to={"/"}> <p>  Subscriptions</p> </Link>
        </div>
        <div className='my-2 flex p-2 gap-2'>
           <img className='h-6' src="https://cdn-icons-png.flaticon.com/128/15047/15047529.png" alt="" />
           <Link to={"/"}> <p>  Music</p> </Link>
        </div>
      </div>
      
      <h1 className='font-bold mt-10 text-xl mx-3'>You ></h1>
      <div className=' text-xl p-1  font-bold  hover: bg-gray-50 border-b border-b-black '>
        <div className=' my-2 flex p-2  gap-2 '>
           <img className='h-6' src="https://cdn-icons-png.flaticon.com/128/3503/3503786.png" alt="" />
           <Link to={"/"}> <p>History</p> </Link>
        </div>
        <div className='my-2 flex p-2 gap-2'>
           <img className='h-6' src="https://cdn-icons-png.flaticon.com/128/15069/15069985.png" alt="" />
            <p> Playlist</p> 
        </div>
        <div className='my-2 flex p-1 gap-2'>
           <img className='h-6' src="https://cdn-icons-png.flaticon.com/128/2989/2989849.png" alt="" />
           <Link to={"/"}> <p>  Subscriptions</p> </Link>
        </div>
        <div className='my-2 flex p-2 gap-2'>
           <img className='h-6' src="https://cdn-icons-png.flaticon.com/128/16163/16163550.png" alt="" />
           <Link to={"/"}> <p>  Videos</p> </Link>
        </div>
        <div className='my-2 flex p-2 gap-2'>
           <img className='h-6' src="https://cdn-icons-png.flaticon.com/128/10885/10885092.png" alt="" />
           <Link to={"/"}> <p>  Downloads</p> </Link>
        </div>
      </div>
      <h1 className='font-bold mt-10 text-xl mx-3'>Subscriptions </h1>
      <ul className='text-sm py-2 px-2 font-semibold  hover: bg-gray-50 border-b border-b-black '>
          {
            subscription.map((list,index)=>(
              <div key={index} className='flex p-1'>
              <img className='h-7 rounded-2xl mr-1' src={list.img} alt="" />
              <li>{ list.name}</li>
              </div>
            ))
          }
        
      </ul>
    </div>
    </div>
    
    
  )
}

export default SideBar


    