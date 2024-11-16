/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate('/places');
  };

  return (
      <div className='bg d-flex flex-column justify-content-center'>
      <div className='text-center'>
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button className='bt'
        onClick={handleExplore} 
        style={{ padding: '10px 20px', fontSize: '20px', cursor: 'pointer' }}
      >
        Explore
      </button>
      </div>
      </div>
    </div>
  );
}

export default Home;
