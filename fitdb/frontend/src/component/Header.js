import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


// 스타일 정의
const HeaderWrapper = styled.header`
  margin: 0 auto;  

`;

const HeaderElement = styled.div`
  width: 1440px;
  height: 65px;
  margin: 0 auto;
  background-color: #fff;
  align-items: center;
  display: flex;
`;

const Logo = styled.div`
  background: linear-gradient(277deg, #0C7BEB 0.26%, #4B34D8 62.22%, #7109CC 99.73%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  font-size: 37px;
  font-style: italic;
  font-weight: 900;
`;

const Nav = styled.nav`
  margin-left: 80px;
  color: #191F28;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 79px; /* 438.889% */

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 50px;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;  /* 상위 요소(Nav)의 color 속성을 상속받음 */

    &.active {
      background: linear-gradient(277deg, #0C7BEB 0.26%, #4B34D8 62.22%, #7109CC 99.73%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-align: center;
      font-size: 18px;
      font-style: normal;
      font-weight: 1000;
      line-height: 23px; /* 85.185% */
    }
  }
`;


// 컴포넌트 정의
const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderElement>
        <Logo>FitDB</Logo>
        <Nav>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/fitsearch" activeClassName="active">
              FitSearch
            </NavLink>
          </li>
          <li>
            <NavLink to="/ai" activeClassName="active">
              AI Scheduler
            </NavLink>
          </li>
        </ul>
      </Nav>
      </HeaderElement>
      <hr/>
    </HeaderWrapper>
  );
};

export default Header;