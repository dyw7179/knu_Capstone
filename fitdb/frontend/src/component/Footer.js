import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #f8f8f8;
  margin: 0 auto;
`;

const FooterElement = styled.div`
    width: 1440px;
    height: 250px;
    background-color: #f8f8f8;
    padding: 20px 0;
    text-align: center;
    align-items: center;
    margin: 0 auto;
    display: flex;

`;

const Logo = styled.div`
    width: 230px;
    height: 170px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ADB5BD;
    font-family: ABeeZee;
    font-size: 35px;
    font-style: italic;
    font-weight: 900;
    line-height: normal;
`;
const FooterText = styled.p`
  color: #8B95A1;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 20px; /* 153.846% */
  display: flex;
  align-items: flex-start;
`;

function Footer() {
  return (
    <FooterContainer>
        <FooterElement>
            <Logo>FIT DB</Logo>
            <FooterText>
                (주)FitDB
                <br/>
                주소 경기도 용인시 수지구 신봉1로 248번길 74-14
                <br/>
                사업자등록번호 8455-7179-991001 이메일 dyw7179@naver.com
                <br/>
                © 2023 Your Company. All Rights Reserved.
            </FooterText>
        </FooterElement>
    </FooterContainer>
  );
}

export default Footer;
