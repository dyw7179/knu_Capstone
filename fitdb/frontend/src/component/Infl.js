import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

const StyledSlider = styled(Slider)`
`;
const ProfileLink = styled.a`
  text-decoration: none;  // 링크에 기본 스타일 제거
  color: inherit;  // 텍스트 색상을 상속받아 링크색 변경 방지
  display: flex;  // Flexbox를 사용하여 내부 요소들을 세로로 정렬
  flex-direction: column;  // 요소들을 세로로 정렬
  align-items: center;  // 가운데 정렬
`;

const ProfileBox = styled.div`
    max-width: 260px;
    height: 430px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column; 
    border-radius: 16px;
    border: 2px solid #DFE6F1;
    padding: 10px;
    box-sizing:border-box;
    background-color: #fff;
`;
const Rank = styled.div`
  margin-bottom: 10px;
  font-size: 25px;
  font-weight: bold;
  background: linear-gradient(277deg, #0C7BEB 0.26%, #4B34D8 62.22%, #7109CC 99.73%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`;
const ProfileImg = styled.img`
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
    font-size: ${props => props.text && props.text.length > 10 ? '19px' : '21px'};    font-weight: 600;
    line-height: 100%; /* 20px */
`;
const Youtubelogo = styled.div`
    margin-right: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
`;


const SubscribersCount = styled.p`
  color: #8B95A1;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  margin-bottom: 3px;
`;

const AverageViews = styled.p`
  color: #8B95A1;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  margin-bottom: 3px;
`;

const ChannelCreat = styled.p`
  color: #8B95A1;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
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
        <ProfileLink href={`https://www.youtube.com/channel/${influencer.channel_id}`} target="_blank" key={index}>
            <ProfileBox >
            <Rank>#{index + 1}위</Rank> {/* 순위 표시 */}
            <ProfileImg src={influencer.profile_image_url} alt={influencer.title} />
            <ChannelName text={influencer.title}>
              <Youtubelogo>
                  <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 17 17" fill="none">
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
              구독자 {influencer.subscribers.toLocaleString()}명
            </SubscribersCount>
            <AverageViews>
              평균 조회수 {influencer.average_views.toLocaleString()}회
            </AverageViews>
            <ChannelCreat>
              채널 생성일 {influencer.channel_created_at ? influencer.channel_created_at.toLocaleString() : '정보 없음'}
            </ChannelCreat>
          </ProfileBox>
        </ProfileLink>
      ))}
    </StyledSlider>
  );
};

export default Infl;
