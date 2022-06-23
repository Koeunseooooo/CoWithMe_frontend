import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { useLocation } from 'react-router-dom';
import styled from "styled-components";
import Content from "../../components/Landing/Content";
import ModalContainer from "../../components/Auth/ModalContainer";
import LoginButton from "../../components/Landing/LoginButton";
import { theme, flexCenter } from '../../styles/theme';

const LoginOrSignup = () => {

    const location = useLocation();
    const LOGIN_OR_SIGNUP = location.pathname.split('/')[2];
    console.log(location.pathname.split('/')[2]);
    return (
        <LaunchContainer>
            <div className="content-area-1">
                <Content keyword={LOGIN_OR_SIGNUP} />
            </div>
            <div className="content-area-2">
                <LoginButton />
                <div className="other-method"  >
                    <ModalContainer keyword={LOGIN_OR_SIGNUP} />
                </div>
            </div>
        </LaunchContainer>
    )
}

export default LoginOrSignup;

const LaunchContainer = styled.div`
width: 100%;
    padding: 0 16px 80px;
    width: 681px;
    height: 799px;
    background-color: ${theme.color.green};
    margin: 0 auto;
    box-sizing: border-box;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.6);
    border-radius: 20px;

    .content-area-1{
      display: flex;
      flex-direction: row;
      gap: 16px;
      padding: 66px 0;
    }

    .content-area-2{
      ${flexCenter}
      margin-top: 20px;
      flex-direction: column;
      gap: 8px;
      .other-method{
        ${flexCenter}
        margin-top: 20px;
        font-family: 'AppleSDGothicNeoB00';
        font-weight: 400;
        font-size: 20px;
        line-height: 28px;
        letter-spacing: 0.25px;
        color: #000000;
      }
    }
    
}

`;