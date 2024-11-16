import React from 'react'

const VideoCard = ({info}) => {
  
  const {snippet, statistics}=info;
  const view=parseInt(statistics.viewCount)
  const {title,thumbnails,channelTitle}=snippet;  
  return (
    <div className='p-2 m-2 w-56 h-72 rounded shadow-lg'>
      <img className='rounded-lg ' src={thumbnails.medium.url} alt="" />
     {/* <h1 className='font-bold'>{title.substring(0,54)}...</h1> */}
     <h1 className='font-bold'>{title.length<=54 ? title : title.substring(0,54)+"..."}</h1>
     <h4>{channelTitle}</h4>
     <p>{view.toLocaleString('en-IN')+ " views"}</p>
     
    </div>
  )
}

export default VideoCard