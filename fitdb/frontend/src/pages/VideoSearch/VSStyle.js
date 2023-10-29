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