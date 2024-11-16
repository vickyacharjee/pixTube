import React, { useEffect, useState } from 'react';
import { apiUrl } from '../Apis/youtubeApi';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]); // Stores the videos to display
  const [loading, setLoading] = useState(false); // To prevent multiple fetch requests

  // This function fetches videos from the API
  const fetchData = async () => {
    if (loading) return; // If we're already loading, don't start a new request
    setLoading(true); // Set loading to true when the fetch starts

    try {
      const data = await fetch(apiUrl); // Call the API
      const json = await data.json(); // Parse the response
      setVideos((prevVideos) => [...prevVideos, ...json?.items]); // Add the new videos to the current list
    } catch (error) {
      console.error("Error fetching data", error); // Handle errors
    } finally {
      setLoading(false); // Set loading to false after the fetch completes
    }
  };

  // This function is called when the user scrolls down
  const handleScroll = () => {
    // Check if we're near the bottom of the page
    if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 10) {
      fetchData(); // If we're near the bottom, load more videos
    }
  };

  // Run this code when the component mounts
  useEffect(() => {
    fetchData(); // Fetch initial set of videos
    window.addEventListener('scroll', handleScroll); // Listen for scroll events

    // Clean up by removing the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty array means this effect runs only once when the component mounts

  return (
    <div className='flex flex-wrap'>
      {videos.map((video,index) => (
        <Link key={index} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
