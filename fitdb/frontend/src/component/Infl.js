import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

const StyledSlider = styled(Slider)`
`;

const ProfileBox = styled.div`
    max-width: 260px;
    height: 420px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    border: 2px solid #DFE6F1;
    padding: 10px;
    box-sizing:border-box;
`;

const ProfileImg = styled.img`
    margin-left: 20px;
    border-radius: 125px;
    width: 200px;
    height: 200px;
`;

const ChannelName = styled.h1`
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%; /* 20px */
`;
const Youtubelogo = styled.div`
    margin-right: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SubscribersCount = styled.p`
  /* 스타일 설정 */
  color: #333;
  font-size: 14px;
`;

const AverageViews = styled.p`
  /* 스타일 설정 */
  color: #333;
  font-size: 14px;
`;

const Infl = () => {
  const [influencers, setInfluencers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/infl_app/top/');
        setInfluencers(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 2500, 
    pauseOnHover: true,
  };

  return (
    <StyledSlider {...settings}>
      {influencers.map((influencer, index) => (
        <ProfileBox key={index}>
          <ProfileImg src={influencer.profile_image_url} alt={influencer.title} />
          <ChannelName>
            <Youtubelogo>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 17 17" fill="none">
                  <g clip-path="url(#clip0_54_178)">
                    <path d="M15.6872 4.92012C15.5166 4.28272 15.0157 3.78182 14.3783 3.61119C13.2229 3.30164 8.59292 3.30164 8.59292 3.30164C8.59292 3.30164 3.96294 3.30164 2.80879 3.61119C2.17139 3.78182 1.67049 4.28272 1.49986 4.92012C1.19031 6.07427 1.19031 8.48368 1.19031 8.48368C1.19031 8.48368 1.19031 10.8931 1.49986 12.0473C1.67049 12.6847 2.17139 13.1856 2.80879 13.3562C3.96294 13.6658 8.59292 13.6658 8.59292 13.6658C8.59292 13.6658 13.2229 13.6658 14.377 13.3562C15.0145 13.1856 15.5154 12.6847 15.686 12.0473C15.9955 10.8931 15.9955 8.48368 15.9955 8.48368C15.9955 8.48368 15.9955 6.07427 15.686 4.92012H15.6872ZM7.11215 10.7043V6.26317L10.9585 8.48368L7.11215 10.7043Z" fill="#FF4022"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_54_178">
                      <rect width="15.7922" height="15.7922" fill="white" transform="translate(0.697144 0.587341)"/>
                    </clipPath>
                  </defs>
                </svg>
            </Youtubelogo>
            {influencer.title}
          </ChannelName>
          <SubscribersCount>
            구독자 수: {influencer.subscribers.toLocaleString()}명
          </SubscribersCount>
          <AverageViews>
            평균 조회수: {influencer.average_views.toLocaleString()}회
          </AverageViews>
          {/* 다른 정보들을 필요에 따라 추가할 수 있습니다. */}
        </ProfileBox>
      ))}
    </StyledSlider>
  );
};

export default Infl;
