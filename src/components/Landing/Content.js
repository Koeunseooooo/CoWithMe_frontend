import React, { useState } from 'react';
import styled from 'styled-components';

const Content = ({ keyword }) => {
    const [text] = useState(keyword === 'login' ? '로그인' : '회원가입');
    return (
        <Wrapper>
            <div className="content">
                <div className="login">{text}</div>
                <div className="main-content">코윗미랑 함께라면 <br /> 코딩 메이트가 필요 없습니다!</div>
                <div className="sub-content">사용하는 플랫폼의 계정으로 {text} 진행해주세요</div>
            </div>
            <div className="image-group">
                <img className="logo" src={require('../../assets/Landing/Banner_white_Symbol.svg').default} alt="" />
                <img className="cowithme" src={require('../../assets/Landing/Banner_white_Graphic.svg').default} alt="" />
            </div>

        </Wrapper>
    );
};

export default Content;

const Wrapper = styled.div`
display: flex;
flex-direction: row;

.content{
    width: 50%;
    color: black;
    padding: 25px;
    .login{
        font-family: 'neoB';;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0.25px;
        color: #282828;
    }

    .main-content{
        margin-top: 27px;
        font-family: 'AppleSDGothicNeoB00';
        font-weight: 400;
        font-size: 28px;
        line-height: 44px;
        letter-spacing: 0.25px;
        color: #000000;
    }

    .sub-content{
        margin-top: 30px;
        font-family: 'AppleSDGothicNeoB00';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0.25px;
        color: #282828;
    }
}


.image-group{
    width: 30%;
    display: flex;
    flex-direction: column;
    height: 100%;
    .logo{
        width: 90.01px;
        height: 90.01px;
        margin-left: 150px;
    }
    .cowithme{
        width: 259px;
        height: 198px;
    }
}
`;
