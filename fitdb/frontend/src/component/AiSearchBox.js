// VideoSearchComponent.js
import React, { useState } from 'react';
import styled from 'styled-components';
import SearchLogo from '../assets/img/Searchlogo.png';


export const MainContainer = styled.div`
    display: flex;
    flex-direction: column; 
    background-color: #fff;
`;


export const AiSearchContainer = styled.div`
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

export const AiSearchH1 = styled.h1`
    color: #FFF;
    font-family: Pretendard;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export const AiSearch = styled.input.attrs({
    placeholder: "오늘 가슴 운동했어",
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

export const AiSearchTextBox = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 650px;
    
`; 
export const AiSearchSpan = styled.span`
    color: #FFF;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%; /* 18px */
    margin-right: 10px;
`;

export const AiSearchlogo = styled.div`
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

export const AiSearchText = styled.p`
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

export default function AiSearchBox() {
    const [searchTerm, setSearchTerm] = useState('');
    const [recommendation, setRecommendation] = useState('');

    const handleSearchRequest = async () => {
        console.log('Search term:', searchTerm); // 입력 데이터 콘솔 출력

        try {
            const response = await fetch('http://127.0.0.1:8000/api/gpt', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ input: searchTerm }),
            });

            if (response.ok) {
                const data = await response.json();
                setRecommendation(data.recommendation);
            } else {
                console.error('API 요청 실패');
            }
        } catch (error) {
            console.error('API 요청 중 오류 발생:', error);
        }
    };

    return (
        <div>
           {/* <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        handleSearchRequest();
                    }
                }}
            />
            <button onClick={handleSearchRequest}>검색</button>
            <div>
                <p>추천: {recommendation}</p>
            </div> */}

            {/* 추가 요소 */}
            <AiSearchContainer>
                <AiSearchH1>
                    AiSearch로 다음날 운동 부위를 추천받아보세요!
                </AiSearchH1>
                <div style={{ position: 'relative', width: '650px' }}>
                    <AiSearch
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                handleSearchRequest();
                            }
                        }}
                    />
                    <SearchIconContainer onClick={handleSearchRequest} />
                </div>
                <AiSearchTextBox>
                    <AiSearchSpan>AiSearch</AiSearchSpan>
                    <AiSearchlogo>new</AiSearchlogo>
                    <AiSearchText>ChatGPT 기반으로 다음날 부위를 추천해 드려요!</AiSearchText>
                </AiSearchTextBox>
            </AiSearchContainer>
            {/* 추가 요소 끝 */}
            <div style={{ fontSize: '20px' }}>
                <p>GPT: {recommendation}</p>
            </div>
        </div>
    );
}