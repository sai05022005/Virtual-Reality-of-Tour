
import React from 'react';
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';
import { useNavigate } from 'react-router-dom';


function VideoPlayer() {
  const navigate = useNavigate();
  const handle = () => {
    navigate('/places');
  };
  const { videoUrl } = useParams();
  
  // Function to extract the video ID from a YouTube URL
  const extractVideoId = (url) => {
    // eslint-disable-next-line no-useless-escape
    const match = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|embed|e|watch|watch\?v=|\?v=)|\S*?\/|v\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    return match ? match[1] : null;
  };
  
  const videoId = extractVideoId(decodeURIComponent(videoUrl));
  
  const onReady = (event) => {
    event.target.pauseVideo(); // Keeps the video paused initially
  };
  
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
    <button className='btn btn-outline-success' on onClick={handle}>Back</button>
      <h2>Enjoy Your VR Tour</h2>
      {videoId ? (
        <YouTube
          videoId={videoId}
          opts={{
            height: '450',
            width: '800',
            playerVars: {
              autoplay: 1,
            },
          }}
          onReady={onReady}
        />
      ) : (
        <p>Video not available. Please check the video URL.</p>
      )}
    </div>
  );
}

export default VideoPlayer;
