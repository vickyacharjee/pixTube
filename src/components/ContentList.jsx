import React, { useEffect,useState } from 'react'
import VideoCard from './VideoCard'
import VideoDisplayContainer from './VideoDisplayContainer'
import { Link } from 'react-router-dom'
import { useSearchParams,useParams } from 'react-router-dom'


const ContentList = () => {
  const [content, setContent] =useState([])
    useEffect(()=>{

        fetchListData()
    },[])

    const [searchParams] = useSearchParams();
    const query = searchParams.get('q');
    console.log("q: ",query);
  
  
    

    const fetchListData= async()=>{
      const data= await fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&q=vickyacharjee&type=video&key=AIzaSyAyR8zMyuT5tJjMpg6gPZ5vWOt9pLe4yVQ');
      const json =await data.json();
      setContent(json.items)
      console.log(json.items);      

    }
     
  return (
    <div className='col-span-12 border p-1 m-2'>
     { 
      //content.length>0 && 
      content.map((video)=>(
        <Link to={"/watch?v=" + video.id.videoId}>
          <VideoDisplayContainer info={video}/>
        </Link>
       
      ))
     }
    </div>
  )
}

export default ContentList