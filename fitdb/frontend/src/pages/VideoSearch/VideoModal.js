import React from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: 70%;
  height: 70%;
  overflow-y: auto;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: 2em;       // 글자 크기 조정
  padding: 10px 15px;     // 버튼 패딩으로 크기 조정
  background-color: rgba(0, 0, 0, 0.5); // 반투명한 배경색
  color: #FFF;            // 텍스트 색상 흰색으로
  border: none;           // 테두리 제거
  border-radius: 5px;     // 모서리 둥글게
  cursor: pointer;        // 마우스 커서를 포인터로
  z-index: 10;            // z-index를 사용하여 모달창보다 위에 위치시킴
  &:hover {
    background-color: rgba(0, 0, 0, 0.7); // 호버 효과 추가
  }
`;

const VideoModal = ({ videoId, onClose }) => (
  <ModalBackground onClick={onClose}>
    <ModalContent onClick={(e) => e.stopPropagation()}>
      <CloseButton onClick={onClose}>X</CloseButton>
      <iframe
        width="100%"
        height="99%"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        title="Selected Video Playback"
      ></iframe>
    </ModalContent>
  </ModalBackground>
);

export default VideoModal;
