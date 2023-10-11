import styled from 'styled-components';
import SearchLogo from '../../assets/img/Searchlogo.png'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column; 
    background-color: #fff;
`;


export const VideoSearchBox = styled.div`
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
    width: 630px;
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
    width: 630px;
    
`; 
export const VideoSearchSpan = styled.span`
    color: #FFF;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%; /* 18px */
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
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%; /* 14px */
`;

export const FitTrendArea = styled.div`
    margin-top: 45px;
    width: 1440px;
    height: 600px;
    display: flex;
    justify-content: space-between;
`;

export const FitTrendBox = styled.div`
    width: 1060px;
    height: 594px;
    flex-shrink: 0;
    border-radius: 16px;
    border: 8px solid #F0F6F9;
    box-sizing: border-box;
    padding: 30px;
`;

export const FTh1 = styled.div`
    width: 120px;
    font-family: Pretendard;
    font-size: 27.147px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    background: linear-gradient(277deg, #0C7BEB 0.26%, #4B34D8 62.22%, #7109CC 99.73%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export const FTSideBox = styled.div`
    display: flex;
    width: 329px;
    height: 594px;
    margin-left: 25px;
    padding: 34px 31px 47px 31px;
    flex-direction: column;
    align-items: flex-start;
    gap: 9px;
    border-radius: 16px;
    border: 8px solid #F0F6F9;
    background: #FFF;
    box-sizing: border-box;
`;

export const FitCommunityArea = styled.div`
    width: 1440px;
    display: flex;
    justify-content: space-between;
`;

export const FitCommunityBox = styled.div`
    display: flex;
    width: 1027px;
    height: 402px;
    padding: 25px 35px 25px 35px;
    justify-content: flex-end;
    align-items: center;
    flex-shrink: 0;
    border-radius: 16px;
    border: 8px solid #F0F6F9;
    background: #FFF;
    box-sizing: border-box;
`;

export const FCh1 = styled.h1`
font-family: Pretendard;
font-size: 27.147px;
font-style: normal;
font-weight: 700;
line-height: normal;
background: linear-gradient(277deg, #0C7BEB 0.26%, #4B34D8 62.22%, #7109CC 99.73%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`;