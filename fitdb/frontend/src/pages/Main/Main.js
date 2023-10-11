import React from 'react';
import { IndexContainer, } from '../../component/common/GlobalStyle';
import { FTSideBox, FTh1, FitTrendArea, FitTrendBox, MainContainer, VideoSearch, VideoSearchBox, VideoSearchH1, VideoSearchSpan, VideoSearchText, VideoSearchTextBox, VideoSearchlogo } from './MainStyles';

function Main() {
    return (
        <IndexContainer>
            <MainContainer>
                <VideoSearchBox>
                    <VideoSearchH1>
                        FitSearch로 배우고 싶은 운동을 검색해보세요!
                    </VideoSearchH1>
                    <VideoSearch></VideoSearch>
                    <VideoSearchTextBox>
                        <VideoSearchSpan>FitSearch</VideoSearchSpan>
                        <VideoSearchlogo>new</VideoSearchlogo>
                        <VideoSearchText>Youtube Data 기반으로 딱 맞는 영상을 추천해 드려요!</VideoSearchText>
                    </VideoSearchTextBox>
                </VideoSearchBox>
                <FitTrendArea>
                    <FitTrendBox>
                        <FTh1>FitTrend</FTh1>
                    </FitTrendBox>
                    <FTSideBox>
                        
                    </FTSideBox>
                </FitTrendArea>
            </MainContainer>
        </IndexContainer>
    );
}

export default Main;
