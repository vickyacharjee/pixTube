import React from 'react'

const VideoDisplayContainer = ({info}) => {
    const {snippet}=info;
    const {thumbnails,title,channelTitle,description}=snippet;
  return (
    <div className=' m-10'> 
        <div className='flex items-center'>
                 <img className='w-[500px] rounded-lg' src={thumbnails.medium.url} alt="" />
            <div>
                <h1 className='ml-10 text-3xl'>{info.snippet.title}</h1>
                <p className='ml-10 font-bold text-lg'> {channelTitle}</p>
                <p className='ml-10 text-sm'> {description}</p>

            </div> 
        </div>
        
    </div>
  )
}

export default VideoDisplayContainer