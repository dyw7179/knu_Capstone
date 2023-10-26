import React from 'react';
import { IndexContainer, } from '../../component/common/GlobalStyle';
import VideoSearchBox1 from '../../component/VideoSearchBox1';
import { AISchedulerBox, AISh1, FCh1, FTPeriod, FTPeriodbtn, FTSideBox, 
    FTSideBoxh1, FTcategory, FTcategoryBtn, FTh1, FTtopBox, 
    FitCommunityArea, FitCommunityBox, FitTrendArea, FitTrendBox, 
    MainContainer, VideoSearch, VideoSearchBox, VideoSearchH1, 
    VideoSearchSpan, VideoSearchText, VideoSearchTextBox,
     VideoSearchlogo } from './MainStyles';


function Main() {
    return (
        <IndexContainer>
            <MainContainer>
                <VideoSearchBox1/>
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
                        <FTtopBox>
                            <FTh1>FitTrend</FTh1>
                             <FTPeriod>
                                <FTPeriodbtn>일간</FTPeriodbtn>
                                <FTPeriodbtn>주간</FTPeriodbtn>
                                <FTPeriodbtn>월간</FTPeriodbtn>
                            </FTPeriod>
                        </FTtopBox>
                        <FTcategory>
                            <FTcategoryBtn>보디빌딩</FTcategoryBtn>
                            <FTcategoryBtn>파워리프팅</FTcategoryBtn>
                            <FTcategoryBtn>필라테스/요가</FTcategoryBtn>
                            <FTcategoryBtn>크로스핏</FTcategoryBtn>
                        </FTcategory>
                    </FitTrendBox>
                    <FTSideBox>
                        <FTSideBoxh1>운동 검색 순위</FTSideBoxh1>
                    </FTSideBox>
                </FitTrendArea>
                <FitCommunityArea>
                    <FitCommunityBox>
                        <FCh1>FitCommunity</FCh1>
                    </FitCommunityBox>
                    <AISchedulerBox>
                        <AISh1>AI스케줄러</AISh1>
                    </AISchedulerBox>
                </FitCommunityArea>
            </MainContainer>
        </IndexContainer>
    );
}

export default Main;
