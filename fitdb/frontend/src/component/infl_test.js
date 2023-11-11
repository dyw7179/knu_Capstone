import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TopInfluencers = () => {
  const [influencers, setInfluencers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // '/'를 URL의 시작에 추가하여 절대 경로를 지정합니다.
        const response = await axios.get('http://localhost:8000/infl_app/top/');
        setInfluencers(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
        // 적절한 에러 처리 로직을 추가하십시오.
      }
    };

    fetchData();
  }, []); // 빈 의존성 배열은 컴포넌트 마운트시에만 fetchData를 호출한다는 것을 의미합니다.

  return (
    <div>
      <h1>Top Influencers</h1>
      <ul>
        {influencers.map((influencer, index) => (
          <li key={index}>
            <img src={influencer.profile_image_url} alt={influencer.title} />
            <h2>{influencer.title}</h2>
            <p>Subscribers: {influencer.subscribers}</p>
            <p>Total Views: {influencer.views}</p>
            <p>Average Views: {influencer.average_views}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopInfluencers;
