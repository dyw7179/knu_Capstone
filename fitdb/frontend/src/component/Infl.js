import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';


const StyledSlider = styled(Slider)`
  .slick-slide {
    margin: 10px 20px;
  }
`;
export const ProfileBox = styled.div`
    width: 50px;
    height: 250px;
    display: flex;
    align-items: center;
    border-radius: 16px;
    border: 2px solid #DFE6F1;
    background: #FFF;
    padding: 10px;
    margin: 0 10px;
`;
const ProfileImg = styled.img`
    display: flex;
    border-radius: 100px; // 원하는 border-radius 값을 설정하세요
`;
const ChannelName = styled.h1`
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%; /* 20px */
`;


function Infl() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,           // 슬라이더가 자동으로 움직이게 합니다.
        autoplaySpeed: 2000,      // 2초마다 슬라이더가 움직입니다.
        pauseOnHover: true,       // 슬라이더 위에 마우스를 올리면 자동 움직임이 일시정지됩니다.
    };

  return (
    <StyledSlider {...settings}>
      <ProfileBox>
      <ProfileImg src="https://yt3.googleusercontent.com/LzBr3K1XPUs1fEwJA1dpcIJNQo7q0gsR3EIwCFFbrH8pZi5AUNYH2iGEE0R5AsMUlR_1J3QnWGE=s176-c-k-c0x00ffffff-no-rj" alt="Image 9" />
      <ChannelName>김종국 GYM JONG KOOK</ChannelName>
      </ProfileBox>
      <ProfileBox>
      <ProfileImg src="https://yt3.googleusercontent.com/0WxMKahm58KPQdTeR8Pz3wZ1W5x1b7JL8_z-kYzPxWzgRBMalYlfmM7Y3sWYY6jj9Dm5RYAJpTM=s176-c-k-c0x00ffffff-no-rj" alt="Image 9" />
      <ChannelName>Allright24_박재훈</ChannelName>
      </ProfileBox>
      <ProfileBox>
      <ProfileImg src="https://yt3.googleusercontent.com/BCssT-G6KF3fWZxxGUkf2LPhWq2-EOt_Ez9hgf92R-zWaJzfVdANY6PvchSsxgnCKxJfwU-q=s176-c-k-c0x00ffffff-no-rj" alt="Image 9" />
      <ChannelName>코리안헤라클레스 이용승</ChannelName>
      </ProfileBox>
      <ProfileBox>
      <ProfileImg src="https://yt3.googleusercontent.com/n-O9btEtAyWY7453pnANkco4VRnM_QiRTVBJIyHoLAp1GcE5sJeLfwsbc5hYC90qubXOlbjZBw=s176-c-k-c0x00ffffff-no-rj" alt="Image 9" />
      <ChannelName>노익스강</ChannelName>
      </ProfileBox>
      <ProfileBox>
      <ProfileImg src="https://yt3.googleusercontent.com/CUre6J2N9SovHCbMpjtt3n2BQkAVYlvYwOy2cMpOWXvvHBl9UQ3P7lQNR0T3PaQjZSMpOXjh=s176-c-k-c0x00ffffff-no-rj" alt="Image 9" />
      <ChannelName>김강민_Kim Kang min</ChannelName>
      </ProfileBox>
      <ProfileBox>
      <ProfileImg src="https://yt3.googleusercontent.com/6W4_hrk62jI1vl_DP6voTz-xvqzee2wPhxapMjnsJPQFRy77AioxQ2w5r1HGHwiMPK6fMs75Ug=s176-c-k-c0x00ffffff-no-rj" alt="Image 9" />
      <ChannelName>핏블리 FITVELY</ChannelName>
      </ProfileBox>
      {/* ... 여러 아이템을 추가할 수 있습니다. */}
    </StyledSlider>
  );
}

export default Infl;
