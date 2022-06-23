import React from 'react';
import styled from "styled-components";
import { theme, flexCenter } from "../../styles/theme";

const Modal = ({ modalClose }) => {
    return (
        <ModalContainer>
            <div className="modal">
                <img className="logo" src={require('../../assets/Landing/Banner_white_Symbol.svg').default} alt="" />
                <img className="modal_button" onClick={modalClose} src={require('../../assets/Landing/Close.svg').default} alt="" />

                <div className="main-desc">회원가입</div>
                <div className="sub-desc">안녕하세요 코윗미입니다!</div>
                <div className="sub-desc">다른 방식으로 로그인하거나 새롭게 가입해주세요!</div>
                <StyledButton color="green">새로운 계정 만들기</StyledButton>
                <StyledButton color="white" onClick={modalClose}>다른 방식으로 로그인</StyledButton>
            </div>
        </ModalContainer>
    )
}

export default Modal;

const StyledButton = styled.div`
${flexCenter}
width: 441px;
height: 61px;
margin-top: 12px;
background-color: ${(props) => props.color === 'green' ? theme.color.green : theme.color.black};
color:  ${(props) => props.color === 'green' ? theme.color.black : theme.color.white};
border: ${(props) => props.color === 'white' ? '2px solid #F4F4F4' : 'none'};
border-radius: 10px;
`
const ModalContainer = styled.div`
width: 100%;
height: 100vh;
background-color: rgba(0,0,0,0.4);
z-index: 10;
position: fixed;
top: 0;
left: 0;

.modal{
    width: 519px;
    height: 404px;
    background-color: #fff;
    position: absolute;
    background: ${theme.color.black3};
    border-radius: 15px;
    left: 30%;
    top:50%;
    transform: translate(-50%, -50%);
    z-index:100;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 48px;

    .logo{
        position: absolute;
        top: -50px;
        left: 50px;
    }
      
    .main-desc{
        margin-top: 75px;
        align-self: flex-start;
        margin-left: 41px;
        font-family: 'AppleSDGothicNeoB00';
        font-weight: 400;
        font-size: 28px;
        line-height: 44px;
        letter-spacing: 0.25px;
        color: #FFFFFF;
    }

    .sub-desc{
        margin-top: 8px;
        font-weight: 400;
        align-self: flex-start;
        margin-left: 41px;
        font-size: 16px;
        line-height: 32px;
        letter-spacing: 0.5px;
        color: #FFFFFF;
    }

    .modal_button{
        position: relative;
        width: 20px;
        height: 20px;
        align-self: flex-end;
        right: 10px;
        top: 30px;
        transform: translate(-50%, -50%);
    }
}
}
`