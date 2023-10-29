import React from 'react';
import { IndexContainer, MainContainer } from '../../component/common/GlobalStyle';
import VideoSearchBox from '../../component/VideoSearchBox';
import { VideoGrid, VideoWrapper, VideoTitle} from '../VideoSearch/VSStyle';


const videoIds = ['VIDEO_ID_1', 'VIDEO_ID_2', 
'VIDEO_ID_3','VIDEO_ID_2', 'VIDEO_ID_3','VIDEO_ID_2', 'VIDEO_ID_3'
,'VIDEO_ID_2', 'VIDEO_ID_3','VIDEO_ID_2', 'VIDEO_ID_3',
'VIDEO_ID_2', 'VIDEO_ID_3',
'VIDEO_ID_2', 'VIDEO_ID_3',];

function VideoSearch() {
    return (
        <IndexContainer>
            <MainContainer>
                <VideoSearchBox/>
                <div>
                <VideoGrid>
                    {videoIds.map((id, index) => (
                    <VideoWrapper key={id}>
                        <iframe
                        title={`Video ${index + 1}`}
                        src={`https://www.youtube.com/embed/${id}`}
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                        ></iframe>
                        <VideoTitle>Video Title {index + 1}</VideoTitle> {/* 비디오 제목 예시 */}
                    </VideoWrapper>
                    ))}
                </VideoGrid>
                </div>
            </MainContainer>
        </IndexContainer>
    );
}

export default VideoSearch;
