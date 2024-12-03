import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu, toggleProfile } from '../store/appSlice'
import { youtube_Search_Api } from '../Apis/searchApi'
import { cacheResults } from '../store/searchSlice'
import { HAMBURGER_MENU, YOUTUBE_LOGO,USER_LOGO } from '../utils/constants'


import { addList } from '../store/appSlice'
import { useNavigate } from 'react-router-dom'
import ProfileCard from './Profilecard'
const Header = () => {
  const [searchQuery,setSearchQuery]=useState('');
  const [searchResults,setSearchResults]=useState('');
  const [showSuggestions,setShowSuggestions]=useState(false);
  const navigate=useNavigate();
  let showName=useSelector(store=>store.app.showProfile);
  // showName=String(showName)
  const showProfile=useSelector(store=>store.app.isProfile);
  // const []
  const searchCache=useSelector(store=>store.search)
  const dispatch=useDispatch();
  

  const handleAdd=()=>{
    console.log("res");
    dispatch(addList(searchQuery))
    navigate('/search')
  }

  useEffect(()=>{
    const clearTimer=setTimeout(()=>{
      if (searchCache[searchQuery]){
        setSearchResults(searchCache[searchQuery])
      }
      else{
        fetchData();
      }
      
    },300)

    return ()=>{
      clearTimeout(clearTimer);
    }
  },[searchQuery])

  const fetchData=async()=>{
    // console.log("Api call -"+searchQuery);
    
    const data=await fetch(youtube_Search_Api+searchQuery);
    const json=await data.json();
    setSearchResults(json[1]);
    dispatch(cacheResults(
      {
        [searchQuery]:json[1]
      }
    ))
    // console.log(json[1]);
  }

  const handleToggleButton=()=>{
      dispatch(toggleMenu(false))
  }
   const handleProfile=()=>{
      dispatch(toggleProfile())
   }
  return (
    <div className='w-screen grid grid-flow-col p-1 m-1 shadow-lg sticky top-0 bg-white z-20' >
      <div className='flex col-span-1'>
        
        <img onClick={handleToggleButton} className='h-10 p-1 cursor-pointer' src={HAMBURGER_MENU} alt="MENU" />
        <img className='h-10 p-[8px] mx-4 ' src={YOUTUBE_LOGO} alt="LOGO" />
      </div>
      <div className='col-span-10 w-1/2 '>
      <div className='   '>
        <input className='border p-2 my-auto w-[449px] rounded-l-2xl' value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} onFocus={()=>setShowSuggestions(true)} onBlur={()=>setShowSuggestions(false)} onScroll={()=>setShowSuggestions(false)} type="text" />
        <button onClick={handleAdd} className='p-2 px-4  border rounded-r-2xl bg-gray-200'>🔍</button>
      </div>
      { (searchResults && showSuggestions) && <div className='fixed p-1 shadow-xl rounded-md bg-white w-1/3'>
        <ul>    
        {
  searchResults.map((res, index) => (
    <li
      key={index}
      onMouseDown={() => setSearchQuery(res)} // Use onMouseDown here
      className="p-2 cursor-pointer hover:bg-gray-200"
    >
      {res}
    </li>
  ))
}
   
</ul>

      </div>}
      </div>
      <div className='flex'>
         <span>{showName}</span>
        <img className='h-10 col-span-1' src={USER_LOGO} alt="" onClick={(handleProfile)} />
        {showProfile && <div className="absolute top-16 right-4 z-50">
           <ProfileCard />
        </div>}
      </div>
    </div>
  )
}

export default Header