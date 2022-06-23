import axios from "axios";
import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

import { theme, flexCenter } from '../../styles/theme';

const Baekjoon = () => {

    const [email, setEmail] = useState();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setEmail(e.target.value);
    }

    const handleClick = (e) => {
        //axios.post('/user/baekjoon', { email: email }).then((res) => {
        //    console.log(res);
        //})
        navigate(`/onboard`); // 홈으로 이동
    }

    return (
        <LaunchContainer>
            <div className="title">
                백준 플랫폼 연결하기
            </div>
            <img className="baekjoon-logo" src={require('../../assets/Landing/Backjoon_Logo.svg').default} alt="" />
            <div className="sub-title">
                백준 플랫폼 로그인을 통해 코딩 데이터를 받아보세요!
            </div>

            <input placeholder="이메일을 입력해주세요!" name="email" onChange={handleChange} />
            <Button onClick={handleClick}>입력완료하기</Button>
            <div className="pass" onClick={() => navigate(`/`)}>건너뛰기</div>

        </LaunchContainer>
    )
}

export default Baekjoon;

const LaunchContainer = styled.div`
${flexCenter}
    flex-direction: column;
    gap: 20px;
    padding: 30px;
    width: 681px;
    position: fixed;
    top: 30%;
    left: 35%;
    height: 384px;
    background-color: ${theme.color.green};
    margin: 0 auto;
    box-sizing: border-box;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.6);
    border-radius: 20px;

    .baekjoon-logo{
        position: absolute;
        right: 40px;
        top: 40px;
    }

    input{
        width: 601px;
        border:none; 
        background-color:  ${theme.color.green};
        border-bottom: 1px solid #000;
        padding: 10px 0px;
        font-weight: 400;
        font-family: 'AppleSDGothicNeoEB00';
        font-size: 18px;
        line-height: 25px;
        letter-spacing: 0.5px;
        color: black;
        &:focus{
            outline: none;
        }
    }


    .title{
        align-self: flex-start;
        font-family: 'AppleSDGothicNeoEB00';
        font-weight: 400;
        font-size: 28px;
        line-height: 40px;
        letter-spacing: 0.25px;
        color: #000000;
    }

    .sub-title{
        align-self: flex-start;
        font-family: 'AppleSDGothicNeoB00';
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        letter-spacing: 0.25px;
        color: #262626;
        margin-bottom: 40px;
    }

    .pass{
        font-family: 'AppleSDGothicNeoB00';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        letter-spacing: 0.5px;
        color: #353434;
    }
    

}

`;


const Button = styled.div`
${flexCenter};
width: 601px;
height: 61px;
background: #F4F4F4;
border-radius: 10px;
font-weight: 400;
font-size: 16px;
line-height: 23px;
font-family: 'AppleSDGothicNeoEB00';
letter-spacing: 0.5px;
color: #000000;

`;