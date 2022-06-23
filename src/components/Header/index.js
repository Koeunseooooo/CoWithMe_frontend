import { Link } from "react-router-dom";
import React from 'react';
import styled, { css } from 'styled-components';

import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
// from "../"


const HeaderBlock = styled.div`
  z-index:5;
  position: fixed;
  left: 0;
  top: 0;
  width: 135px;
  height: 1080px;
  background: #39E25E;
  padding-top:230px;
  margin:0px;

  .container{
    z-index: 1;
    display:flex;
    flex-direction:column;
    align-items: center;
    
  }
  
  .logo{
    cursor:pointer;
    position: absolute;
    left: 0.79%;
    right: 93.59%;
    top: 3%;
    bottom: 93.26%;
    margin-left:15px;
    display: block; 
    // margin: 0px auto;
  }

  .block{
    cursor:pointer;
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-bottom:40px;
    position:relative;

  .content_negative{
    font-family: 'neoB';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    letter-spacing: 0.25px;
    color: #000000;
  }

  .content{
    font-family: 'neoM';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.25px;
    color: #FFFFFF;
  }
  
`
function Header({ isMainHome, isTest, isMyCoding }) {

  const navigate = useNavigate();

  return (
    <>
      <HeaderBlock>
        <div className="imgblock">
          <img className="logo" src={require('../../assets/Header/Logo/Cowithme.svg').default} alt="" />
        </div>

        <div className="container">
          {isMainHome ? (
            <div className="block" onClick={() => navigate('/')}>
               {/* <img className="card" src={require('../../assets/Header/Card/Select.svg').default} alt="" /> */}
                <img className="mainHome" src={require('../../assets/Header/Icon/Main Home.svg').default} alt="" />
                <div className="content">코딩 메인 홈</div>
    
            </div>
          ) : (
            <div className="block" onClick={() => navigate('/')}>

              <img className="mainHome_negative" src={require('../../assets/Header/Icon/Main Home_Negative.svg').default} alt="" />
              <div className="content_negative">코딩 메인 홈</div>


            </div>)}

          {isTest ? (
            <div className="block" onClick={() => navigate('/problems')}>
              {/* <img className="card" src={require('../../assets/Header/Card/Select.svg').default} alt="" /> */}
                <img className="test" src={require('../../assets/Header/Icon/Test.svg').default} alt="" />
                <div className="content">맞춤 유형 문제</div>
              </div>

          ) : (
            <div className="block" onClick={() => navigate('/problems')}>
              <img className="test_negative" src={require('../../assets/Header/Icon/Test__Negative.svg').default} alt="" />
              <div className="content_negative">맞춤 유형 문제</div>

            </div>)}

          {isMyCoding ? (
            <div className="block" onClick={() => navigate('/chart')}>
              {/* <img className="card" src={require('../../assets/Header/Card/Select.svg').default} alt="" /> */}
                <img className="myCoding" src={require('../../assets/Header/Icon/My Coding.svg').default} alt="" />
                <div className="content">마이 코딩</div>


            </div>
          ) : (
            <div className="block" onClick={() => navigate('/chart')}>

              <img className="myCoding_negative" src={require('../../assets/Header/Icon/My Coding__Negative.svg').default} alt="" />
              <div className="content_negative">마이 코딩</div>

            </div>)}
        </div>


      </HeaderBlock>
    </>
  );
}

export default Header;