import styled from 'styled-components';
import SearchLogo from '../../assets/img/Searchlogo.png';

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

export const FitTrendArea = styled.div`
    margin-top: 45px;
    width: 1440px;
    height: 600px;
    display: flex;
    justify-content: space-between;
`;

export const FitTrendBox = styled.div`
    width: 710px;
    height: 594px;
    flex-shrink: 0;
    border-radius: 16px;
    border: 8px solid #F0F6F9;
    box-sizing: border-box;
    padding: 25px;
`;

export const FTtopBox = styled.div`
    width: 640px;
    height: 80px;
    display: flex;
    justify-content: space-between;
    aline-item: center;
`;

export const FTh1 = styled.h1`
    width: 120px;
    height: 50px;
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

export const FTPeriod = styled.div`
    display: flex;
    width: 190px;
    height: 30px;
    margin-top: 20px;
    `;

export const FTPeriodbtn = styled.div`
    width: 60px;
    height: 35px;
    flex-shrink: 0;
    border-radius: 3.65px;
    border: 1px solid #E0E0E0;
    background: rgba(255, 255, 255, 0.00);
    box-shadow: 0px 1.82607px 3.65213px 0px rgba(0, 0, 0, 0.12);
    color: #757575;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 19px; /* 135.714% */
`;

export const FTcategory = styled.div`
    width: 890px;
    height: 100px;
    display: flex;
    align-items: center;
`;

export const FTcategoryBtn = styled.button`
    width: 150px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    border: 2px solid #000; 
    background-color: transparent;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        color: #FFF;
        background-color: #000;
    }
    &:active {
        transform: scale(0.98);
    }
`;


export const FTSideBox = styled.div`
    display: flex;
    width: 710px;
    height: 594px;
    margin-left: 25px;
    padding: 25px;
    flex-direction: column;
    align-items: flex-start;
    gap: 9px;
    border-radius: 16px;
    border: 8px solid #F0F6F9;
    background: #FFF;
    box-sizing: border-box;
`;

export const FTSideBoxh1 = styled.h1`
    width: 150px;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    background: linear-gradient(277deg, #0C7BEB 0.26%, #4B34D8 62.22%, #7109CC 99.73%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export const FitCommunityArea = styled.div`
    width: 1440px;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
`;

export const FitCommunityBox = styled.div`
    display: flex;
    width: 900px;
    height: 402px;
    border-radius: 16px;
    border: 8px solid #F0F6F9;
    box-sizing: border-box;
    padding: 25px;
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



export const AISchedulerBox = styled.div`
width: 500px;
height: 402px;
border-radius: 16px;
border: 8px solid #F0F6F9;
box-sizing: border-box;
padding: 25px;
`;

export const AISh1 = styled.h1`
    width: 190px;
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