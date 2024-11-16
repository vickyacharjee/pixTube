import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../store/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentContainer from './CommentContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {
    
    const dispatch=useDispatch();
    const [params]=useSearchParams();
    console.log(params.get('v'));
    const pass=params.get("v")
    
    useEffect(()=>{
        dispatch(closeMenu())
    })
  return (
    <div className='w-full'>
      <div className='flex w-full '>
      <div className='px-1'>
          <iframe width="1000" height="600" src={"https://www.youtube.com/embed/"+pass}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen></iframe>
        </div> 
        <div className='w-full'>
          <LiveChat/>
        </div>
      </div>
        

        <div>
          <CommentContainer/>
        </div>
    </div>
  )
}

export default WatchPage