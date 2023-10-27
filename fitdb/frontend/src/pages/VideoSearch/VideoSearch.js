import React from 'react';
import { IndexContainer, MainContainer } from '../../component/common/GlobalStyle';
import VideoSearchBox from '../../component/VideoSearchBox';


function VideoSearch() {
    return (
        <IndexContainer>
            <MainContainer>
                <VideoSearchBox/>
                
            </MainContainer>
        </IndexContainer>
    );
}

export default VideoSearch;
