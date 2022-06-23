import { Link } from "react-router-dom";
import React from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme';

import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
// from "../"

const HeaderBlock = styled.div`
  position: sticky;
  top: 0;
  background-color: ${theme.color.black2};
  height:100px;
  width:100vw;
  float:right;
  display: flex;
  justify-content: space-between;
  align-items:center;
  z-index:3;
  

  .head_text{
    margin-left:200px;
    font-family: 'neoB';
    font-style: normal;
    font-weight: 700;
    font-size: 23px;
    line-height: 46px;

    letter-spacing: 0.25px;

    color: #FFFFFF;
  }

  .right_block{
    margin-right:50px;
    display: flex;
    // justify-content: space-between;
    justify-content: center;
  }

  .search_bar{
    display: flex;
    justify-content: space-between;
    align-items:center;
    padding-right:20px;
    padding-left:20px;

    width: 319px;
    height: 52px;
    background: #2D2936;
    border-radius: 100px;
    
  }

  .sub_icon{
    max-width: 100%;
    max-height: 100%;
    margin-bottom:5px;
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

  .sub_block{
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    margin-right:25px;
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
    // margin-left:30px;
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