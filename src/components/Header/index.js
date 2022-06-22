import { Link } from "react-router-dom";
import React from 'react';
import styled, { css } from 'styled-components';

import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
// from "../"

const HeaderBlock = styled.div`
  
  width: 143px;
  height: 1080px;
  background: #39E25E;
  padding-top:250px;

  .container{
    display:flex;
    flex-direction:column;
    align-items: center;
  }
  
  .logo{
    position: absolute;
    left: 0.99%;
    right: 93.59%;
    top: 5.27%;
    bottom: 93.26%;
    margin-left:5px;
  }

  .block{
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-bottom:30px;
  }
  .content{
    font-family: 'AppleSDGothicNeoM00';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    letter-spacing: 0.25px;
    
    color: #000000;
  }
  
  
  
`
function Header({ title, backFunc, params, noBackBtn }) {

  return (
    <HeaderBlock>
      <img className="logo" src={require('../../assets/Header/Logo/Cowithme.svg').default} alt=""/>  
      
      <div className="container">
        <div className="block">
          <img className="mainHome_negative"src={require('../../assets/Header/Icon/Main Home_Negative.svg').default} alt=""/>
          <div className="content">코딩 메인 홈</div>
        </div>

        <div className="block">
          <img className="test_negative"src={require('../../assets/Header/Icon/Test__Negative.svg').default} alt=""/>
          <div className="content">맞춤 유형 문제</div>
        </div>

        <div className="block">
          <img className="myCoding_negative"src={require('../../assets/Header/Icon/My Coding__Negative.svg').default} alt=""/>
          <div className="content">마이 코딩</div>
        </div>
      </div>


    </HeaderBlock>
  );
}

export default Header;