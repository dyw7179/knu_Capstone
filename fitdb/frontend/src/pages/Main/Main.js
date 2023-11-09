import React from 'react';
import { IndexContainer, } from '../../component/common/GlobalStyle';
import VideoSearchBox from '../../component/VideoSearchBox';
import AiSearchBox2 from '../../component/AiSearchBox2';
import { AISchedulerBox, AISh1, FCh1, FTPeriod, FTPeriodbtn, FTSideBox, 
    FTSideBoxh1, FTcategory, FTcategoryBtn, FTh1, FTtopBox, 
    FitCommunityArea, FitCommunityBox, FitTrendArea, FitTrendBox, 
    MainContainer, } from './MainStyles';
import Infl from '../../component/Infl';


function Main() {
    return (
        <IndexContainer>
            <MainContainer>
                <VideoSearchBox/>
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
                        <Infl>d</Infl>
                    </FitTrendBox>
                    <FTSideBox>
                        <FTSideBoxh1>AI스케줄러</FTSideBoxh1>
                        <AiSearchBox2/>
                    </FTSideBox>
                </FitTrendArea>
                <FitCommunityArea>
                    <FitCommunityBox>
                        <FCh1>FitCommunity</FCh1>
                    </FitCommunityBox>
                    <AISchedulerBox>
                        <AISh1>광고</AISh1>
                    </AISchedulerBox>
                </FitCommunityArea>
            </MainContainer>
        </IndexContainer>
    );
}

export default Main;
