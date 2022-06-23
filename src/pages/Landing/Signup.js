import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import Signup from "../../components/Landing/Signup";
import { theme, flexCenter } from '../../styles/theme';
import { useCookies } from "react-cookie";

const Signuppage = () => {
    const [, setCookie] = useCookies(["Authorization"]);

    const [email, setEmail] = useState();
    const [nickname, setNickname] = useState();
    const [password, setPassword] = useState();
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePWChange = (e) => setPassword(e.target.value);
    const handleNicknameChange = (e) => setNickname(e.target.value);


    // TODO: valid 체크
    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post('/auth/join', { email: email, password: password, nickname: nickname }).then((res) => {
           if (res.data.token) { // 토큰 받으면
                setCookie("Authorization", res.data.token, {
                    path: "/",
                    maxAge: 24 * 60 * 60,
                })
            
                window.location.href = '/landing/baekjoon'; // 백준 페이지로 이동
           }
        })
    }

    return (
        <LaunchContainer>
            <div className="content-area-1">
                <Signup />
            </div>
            <form onSubmit={handleSubmit}>
                <div className="content-area-2">
                    <Input placeholder="이메일을 입력해주세요!" name="email" onChange={handleEmailChange} />
                    <Input placeholder="사용할 닉네임을 입력해주세요!" name="nickname" onChange={handleNicknameChange} />
                    <Input placeholder="비밀번호를 입력해주세요!" name="password" type="password" onChange={handlePWChange} />
                    <LoginButton>회원가입 완료</LoginButton>
                </div>
            </form>
        </LaunchContainer>
    )
}

export default Signuppage;

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


const LoginButton = styled.button`
width: 601px;
height: 61px;
${flexCenter}
background: #F4F4F4;
border-radius: 10px;
border: none;
font-family: 'AppleSDGothicNeoEB00';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 29px;
/* identical to box height */

letter-spacing: 0.5px;
color: black;

`;


const Input = styled.input`
width: 601px;
margin-bottom: 20px;
border:none; 
background-color:  ${theme.color.green};
border-bottom: 1px solid #000;
padding: 10px 0px;
font-weight: 400;
font-family: 'AppleSDGothicNeoB00';
font-size: 18px;
line-height: 25px;
color: black;
letter-spacing: 0.5px;
color: black;
&:focus{
    outline: none;
}
&:placholder{
    color: black;
}

`;