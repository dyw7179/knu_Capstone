// VideoSearchComponent.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import SearchLogo from '../assets/img/Searchlogo.png';


export const MainContainer = styled.div`
    display: flex;
    flex-direction: column; 
    background-color: #fff;
`;


export const VideoSearchContainer = styled.div`
    width: 1440px;
    height: 247px;
    flex-shrink: 0;
    border-radius: 16px;
    background: linear-gradient(266deg, rgba(12, 123, 235, 0.80) 5.59%, rgba(113, 9, 204, 0.80) 95.39%);
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
`;

export const VideoSearchH1 = styled.h1`
    color: #FFF;
    font-family: Pretendard;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export const VideoSearch = styled.input.attrs({
    placeholder: "3분할 가슴 루틴",
    type: "text"
  })`
    width: 650px;
    height: 54px;
    flex-shrink: 0;
    border-radius: 20px;
    border: 1px solid #DADFE8;
    background: #FFF url('${SearchLogo}') no-repeat 610px center;
    padding-left: 20px; // 이미지 너비에 따라 조절해 주세요.
    font-size: 16px;
    color: #555;
    ::placeholder {
      color: #bbb;
      opacity: 1;
    }
    :-ms-input-placeholder { /* Internet Explorer 10-11 */
      color: #bbb;
    }
    ::-ms-input-placeholder { /* Microsoft Edge */
      color: #bbb;
    }
  `;

export const VideoSearchTextBox = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 650px;
    
`; 
export const VideoSearchSpan = styled.span`
    color: #FFF;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%; /* 18px */
    margin-right: 10px;
`;

export const VideoSearchlogo = styled.div`
    display: inline-flex;
    padding: 3px 17.5px 3px 18.5px;
    justify-content: center;
    align-items: center;
    border-radius: 32px;
    background: #000;
    color: #63F3EB;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px; /* 150% */
`;

export const VideoSearchText = styled.p`
    color: #FFF;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    margin-left: 15px;
    line-height: 100%; /* 14px */
`;

export const SearchIconContainer = styled.div`
    cursor: pointer;
    background: url('${SearchLogo}') no-repeat center;
    width: 30px;
    height: 30px;
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
`;
export default function VideoSearchBox({ setVideoIds }) {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearchRequest = async () => {
        console.log("Search requested for:", searchTerm);
        
        // 메인 페이지에서 검색을 수행할 경우
        if (!setVideoIds) {
            // 검색 페이지로 이동하면서 검색어를 쿼리 스트링으로 전달
            navigate(`/fitsearch?query=${searchTerm}`);
            return;
        }
        
        // 그 외의 경우 (예: 검색 페이지 내에서의 검색)
        try {
            const response = await axios.get('http://127.0.0.1:8000/video_search_app/search/', {
                params: {
                    query: searchTerm
                }
            });
            setVideoIds(response.data.video_ids);
        } catch (error) {
            console.error('Search failed:', error);
        }
    }
    return (
        <VideoSearchContainer>
            <VideoSearchH1>
                FitSearch로 배우고 싶은 운동을 검색해보세요!
            </VideoSearchH1>
            <div style={{position: 'relative', width: '650px'}}>
                <VideoSearch 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyPress={(e) => {
                        if(e.key === 'Enter') {
                            handleSearchRequest();
                        }
                    }}
                />
                <SearchIconContainer onClick={handleSearchRequest} />
            </div>
            <VideoSearchTextBox>
                <VideoSearchSpan>FitSearch</VideoSearchSpan>
                <VideoSearchlogo>new</VideoSearchlogo>
                <VideoSearchText>Youtube Data 기반으로 딱 맞는 영상을 추천해 드려요!</VideoSearchText>
            </VideoSearchTextBox>
            {/* 검색 결과id값 테스트용 코드
            <ul>
                {searchResults.map(video_id => (
                    <li key={video_id}>{video_id}</li>
                ))}
            </ul> */}
        </VideoSearchContainer>
    );
}