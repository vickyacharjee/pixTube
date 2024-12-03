import React, { useState } from 'react';
import { addProfile, removeProfile,toggleProfile } from '../store/appSlice';
import { useDispatch } from 'react-redux';

const ProfileCard = () => {
    const dispatch=useDispatch();
    
    
    const [name,setName]=useState();
  return (
    <div className="w-[300px] h-[350px] border shadow-lg rounded-lg flex flex-col items-center bg-white">
      {/* Image Section */}
      <div className="w-full h-1/3 flex justify-center items-center">
        <img 
          src="https://via.placeholder.com/150" 
          alt="Profile" 
          className="rounded-full w-24 h-24 border"
        />
      </div>
      
      {/* Input and Button Section */}
      <div className="w-full flex flex-col items-center px-4 mt-4">
        <input 
          required
          onChange={(e)=>setName(e.target.value)}
          type="text" 
          placeholder="Enter your name" 
          className="w-full p-2 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button 
          onClick={()=>{
            dispatch(addProfile(name))
            dispatch(toggleProfile())
          }}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </div>
      
      {/* Logout Button Section */}
      <div className="w-full mt-auto mb-4 px-4">
        <button 
        onClick={()=>{
            dispatch(removeProfile())
            dispatch(toggleProfile())
            
          }}
          
          className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
        >
          Logout
        </button>
      </div>
      
    </div>
  );
};

export default ProfileCard;
