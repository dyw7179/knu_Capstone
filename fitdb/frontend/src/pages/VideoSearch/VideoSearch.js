import React, { useState, useEffect } from 'react';
import { IndexContainer, MainContainer } from '../../component/common/GlobalStyle';
import { VideoGrid, VideoWrapper, VideoTitle, PaginationWrapper, 
    PaginationButton, PlayButton } from '../VideoSearch/VSStyle';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import VideoSearchBox from '../../component/VideoSearchBox';
import VideoModal from './VideoModal';

function VideoSearch() {
    const [videoIds, setVideoIds] = useState([]);
    const [currentPage, setCurrentPage] = useState(1); 
    const videosPerPage = 15; 

    const location = useLocation();

    const totalPageCount = Math.ceil(videoIds.length / videosPerPage);

    //모달창 관리
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedVideoId, setSelectedVideoId] = useState(null);

    useEffect(() => {
        const getQuery = () => {
            const query = new URLSearchParams(location.search).get('query');
            return query || '';
        };

        const searchQuery = getQuery();
        if (searchQuery) {
            const fetchVideos = async () => {
                try {
                    const response = await axios.get('http://127.0.0.1:8000/video_search_app/search/', {
                        params: {
                            query: searchQuery
                        }
                    });
                    setVideoIds(response.data.video_ids);
                } catch (error) {
                    console.error('Search failed:', error);
                }
            };

            fetchVideos();
        }
    }, [location.search]);

    const currentVideos = videoIds.slice((currentPage - 1) * videosPerPage, currentPage * videosPerPage);

    const renderPageNumbers = () => {
        const pages = [];
        for (let i = 1; i <= totalPageCount; i++) {
            pages.push(
                <PaginationButton 
                    key={i} 
                    onClick={() => setCurrentPage(i)}
                    style={i === currentPage ? {backgroundColor: '#ddd', color: 'white'} : null}
                >
                    {i}
                </PaginationButton>
            );
        }
        return pages;
    };

    return (
        <IndexContainer>
            <MainContainer>
                <VideoSearchBox setVideoIds={setVideoIds} />
                <VideoGrid>
                    {currentVideos.map((id, index) => (
                        // 비디오를 클릭하면 모달이 열리도록 onClick 핸들러 추가
                        <VideoWrapper key={id}>
                        <iframe
                            title={`Video ${index + 1}`}
                            src={`https://www.youtube.com/embed/${id}`}
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                        <PlayButton onClick={() => {
                            setSelectedVideoId(id);
                            setIsModalOpen(true);
                        }}>
                            ▶️
                        </PlayButton>
                        <VideoTitle>Video Title {index + 1}</VideoTitle>
                    </VideoWrapper>
                    
                    ))}
                </VideoGrid>
                <PaginationWrapper>
                    {currentPage > 1 && <button onClick={() => setCurrentPage(currentPage - 1)}>이전</button>}
                    {renderPageNumbers()}
                    {videoIds.length > videosPerPage * currentPage && <button onClick={() => setCurrentPage(currentPage + 1)}>다음</button>}
                </PaginationWrapper>
                {/* 선택된 비디오 ID가 있고 모달 상태가 열린 경우에만 VideoModal을 렌더링합니다. */}
                {isModalOpen && <VideoModal videoId={selectedVideoId} onClose={() => setIsModalOpen(false)} />}
            </MainContainer>
        </IndexContainer>
    );
}

export default VideoSearch;