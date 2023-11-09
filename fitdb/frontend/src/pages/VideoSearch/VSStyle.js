import styled from 'styled-components';


export const MainContainer = styled.div`
    display: flex;
    flex-direction: column; 
    background-color: #fff;
`;

export const ContentArea = styled.section`
    display: flex;
    
`;

export const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3개의 열 생성 */
  gap: 16px; /* 각 비디오 사이의 간격 */
  margin: 20px 0; /* 상하 마진 */
`;

export const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 비율 */
  height: 0;
  overflow: hidden;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const VideoTitle = styled.div`
  text-align: center;
  margin-top: 10px;
`;


// 페이지 넘기기용 스타일
export const PaginationWrapper = styled.div`
    text-align: center;
    margin: 20px 0;
`;

export const PaginationButton = styled.button`
    margin: 0 5px;
    padding: 5px 10px;
    border: none;
    background-color: #eee;
    cursor: pointer;
    &:hover {
        background-color: #ddd;
    }
`;


// 모달창 켜는 버튼
export const PlayButton = styled.button`
position: absolute;
top: 45%;
left: 55%;
transform: translate(-50%, -50%);
font-size: 10em;
background: none;
border: none;
cursor: pointer;
opacity: 0.7;
&:hover {
    opacity: 1;
}
`;