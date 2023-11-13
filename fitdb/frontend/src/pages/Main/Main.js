import React from 'react';
import { IndexContainer, } from '../../component/common/GlobalStyle';
import VideoSearchBox from '../../component/VideoSearchBox';
import { AdBox, FTSideBox, 
    FTSideBoxh1, FTh1, FTh2, FTtopBox, 
    Fit500, 
    FitCommunityArea, FitNews, FitNewsText, FitNewsTextBox, FitNewsTextSpan, FitTrendArea, FitTrendBox, 
    MainContainer,
    NewsnsBox, } from './MainStyles';
import Infl from '../../component/Infl';
import fitNewsImage from '../../assets/img/fitnews.png';
import instalogo from '../../assets/img/instalogo.svg';
import AiSearchBox2 from '../../component/AiSearchBox2';

function Main() {
    return (
        <IndexContainer>
            <MainContainer>
                <VideoSearchBox/>
                <FitTrendArea>
                    <FitTrendBox>
                        <FTtopBox>
                            <FTh1>FitTrend</FTh1>
                            <FTh2>- 가장 인기있는 피트니스 인플루언서</FTh2>
                        </FTtopBox>
                        <Infl>d</Infl>
                    </FitTrendBox>
                    <FTSideBox>
                        <FTSideBoxh1>AI스케줄러</FTSideBoxh1>
                        <AiSearchBox2/>
                    </FTSideBox>
                </FitTrendArea>
                <FitCommunityArea>
                    <NewsnsBox>
                        <FitNews bgImage={fitNewsImage}>
                            <FitNewsTextBox>
                                <FitNewsText>
                                피트니스 대회의 소식이 궁금하다면?
                                <FitNewsTextSpan>
                                Fit뉴스 구독하기
                                </FitNewsTextSpan>
                                </FitNewsText>

                            </FitNewsTextBox>
                        </FitNews>
                        <FitNews bgColor='#9227C5' bgImage={instalogo}>
                                <FitNewsText>
                                피트니스 인플루언서의 인터뷰와 이벤트 소식을 볼 수 있는 
                                <FitNewsTextSpan>
                                FitDB 공식 인스타그램
                                </FitNewsTextSpan>
                                </FitNewsText>
                        </FitNews>
                    </NewsnsBox>
                    <AdBox>
                    </AdBox>
                    <Fit500>
                        <FitNewsText>
                        FitDB 활용법
                        <FitNewsTextSpan>
                        FitDB를 이용해 3대500되는 노하우 확인하기
                        </FitNewsTextSpan>
                        </FitNewsText>

                    </Fit500>
                </FitCommunityArea>
            </MainContainer>
        </IndexContainer>
    );
}

export default Main;
