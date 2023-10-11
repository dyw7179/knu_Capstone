import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #fff;
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
    background-color: aqua;
    justify-content: center;
    align-items: center;
    color: #ADB5BD;
    font-family: ABeeZee;
    font-size: 27.147px;
    font-style: italic;
    font-weight: 400;
    line-height: normal;
`;
const FooterText = styled.p`
  color: #555;
  font-size: 14px;
  
`;

function Footer() {
  return (
    <FooterContainer>
        <FooterElement>
            <Logo>FIT DB</Logo>
            <FooterText>
                (주)FitDB
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
