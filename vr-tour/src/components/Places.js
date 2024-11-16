/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars


const places = [
  { id: 1, name: 'Taj Mahal', img: 'https://th-thumbnailer.cdn-si-edu.com/KPHiwfaC7pBGVYeQOt3_RF6L4Dw=/800x450/filters:focal(1471x1061:1472x1062)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/b6/30/b630b48b-7344-4661-9264-186b70531bdc/istock-478831658.jpg', videoUrl: 'https://youtu.be/8HV1JVgqPM0?si=2Nr40CGAlrgpAth8' },
  { id: 2, name: 'Egypt', img: 'https://visitegypt.com/wp-content/uploads/2021/09/cairo-luxor-aswan-tour3.jpg', videoUrl: 'https://youtu.be/mOuvAJRknXk?si=RCKHntgGfMaMi_Ic' },
  { id: 3, name: 'London', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall_%28cropped%29.jpg/900px-Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall_%28cropped%29.jpg', videoUrl: 'https://youtu.be/SNx8B_oE8IY?si=CkcGQRVkaRIOfGkB' },
  { id: 4, name: 'Mumbai', img: 'https://www.blibli.com/friends-backend/wp-content/uploads/2024/03/B111078-1-Gateway-of-India-1024x538.jpg', videoUrl: 'https://youtu.be/CZHFu2BSZPs?si=5i60RpOCzmpp1kuo' }
];

function Places() {
  const navigate = useNavigate();
  const handlePlaceClick = (videoUrl) => {
    navigate(`/video/${encodeURIComponent(videoUrl)}`);
  };
  const handle = () => {
    navigate('/');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }} className='bbb'>
    <button className='btn btn-outline-primary' on onClick={handle}>Back</button>
      <h2 className='head'>Select a Place to Explore</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
        {places.map((place) => (
          <div key={place.id} onClick={() => handlePlaceClick(place.videoUrl)} style={{ cursor: 'pointer' }}>
            <img className='ii' src={place.img} alt={place.name} style={{ width: '200px', height: '150px', borderRadius: '10px' }} />
            <p>{place.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Places;
