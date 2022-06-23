import { Link } from "react-router-dom";
import React from 'react';
import styled, { css } from 'styled-components';

import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
// from "../"

const HeaderBlock = styled.div`
  position: sticky;
  top: 0;
  background-color: #1E1E1E;
  height:100px;
  width:85vw;
  float:right;
  display: flex;
  justify-content: space-between;
  align-items:center;
  z-index: 50;
  

  .head_text{
    // margin-left:20px;
    font-family: 'neoB';
    font-style: normal;
    font-weight: 700;
    font-size: 23px;
    line-height: 46px;
    /* identical to box height */

    letter-spacing: 0.25px;

    color: #FFFFFF;
  }

  .right_block{
    margin-right:50px;
    display: flex;
    justify-content: space-between;
  }

  .search_bar{
    display: flex;
    justify-content: space-between;
    align-items:center;

    width: 319px;
    height: 52px;
    background: #2D2936;
    border-radius: 100px;
    
  }

  .sub_icon{
    margin-right:25px;
  }

  .content{
    font-family: 'AppleSDGothicNeoB00';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    /* identical to box height */
    letter-spacing: 0.25px;
    color: #FFFFFF;

  }

  .search_content{
    font-family: 'AppleSDGothicNeoB00';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    /* identical to box height */
    letter-spacing: 0.25px;
    color: #FFFFFF;
    margin-left:30px;
  }
`
const SubHeader = ({ headText }) => {
  return (
    <HeaderBlock>
      <div className="head_text">{headText}</div>
      <div className="right_block">
        <div className="sub_block">
          <img className="sub_icon" src={require('../../assets/Sub Icon/Notif.svg').default} alt="" />
          <div className="content">알림</div>
        </div>
        <div className="sub_block">
          <img className="sub_icon" src={require('../../assets/Sub Icon/Chat.svg').default} alt="" />
          <div className="content">채팅</div>
        </div>
        <div className="sub_block">
          <img className="sub_icon" src={require('../../assets/Sub Icon/My.svg').default} alt="" />
          <div className="content">MY</div>
        </div>
        <div className="search_bar">
          <div className="search_content">통합 검색</div>
          <img className="sub_icon" src={require('../../assets/Sub Icon/Serch.svg').default} alt="" />
        </div>
      </div>
    </HeaderBlock>
  );
};

export default SubHeader;