import React, { useEffect, useState } from 'react';
import VideoCard from './VideoCard';
import VideoDisplayContainer from './VideoDisplayContainer';
import { Link } from 'react-router-dom';
import Error from './Error';
import { useSelector } from 'react-redux';
import Shimmer from './Shimmer';

const ContentList = () => {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true); // Manage shimmer UI
  const query = useSelector((store) => store.app.list);

  useEffect(() => {
    fetchListData();
  }, [query]);

  const fetchListData = async () => {
    try {
      setLoading(true); // Start shimmer before fetching
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${query}&type=video&key=AIzaSyBzSr8X9bJ3SHX62OTYBhZyUC33LFxnrGI`
      );
      const json = await response.json();
      setContent(json.items || []);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    } finally {
      setLoading(false); // Stop shimmer after fetching
    }
  };

  // Display shimmer while loading
  if (loading) {
    return (
      <div className='col-span-12 border p-1 m-2'><Shimmer /></div>
            
        )
  }

  // Handle case when no content is found
  if (!loading && content.length === 0) {
    return <div>No videos found.</div>;
  }

  return (
    <div className="col-span-12 border p-1 m-2">
      {content.map((video) => (
        <Link to={`/watch?v=${video.id.videoId}`} key={video.id.videoId}>
          <VideoDisplayContainer info={video} />
        </Link>
      ))}
    </div>
  );
};

export default ContentList;
