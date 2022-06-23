import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import Login from "../../components/Landing/Login";
import { theme, flexCenter } from '../../styles/theme';
import { useNavigate } from 'react-router-dom';

const Loginpage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [emailError, setEmailError] = useState();
    const [pwError, setpwError] = useState();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlePWChange = (e) => setPassword(e.target.value);

    const passwordValidCheck = (password) => {
        const specialLetter = password.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
        const result = password.length >= 8 && specialLetter >= 1;
        result ? setpwError() : setpwError("올바른 비밀번호를 입력해주세요.");
        return result;
    }

    const emailValidCheck = (email) => {
        const emailRegex =
            /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

        let result = emailRegex.test(email);
        result ? setEmailError() : setEmailError("올바른 이메일을 입력해주세요.");
        return result;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let emailResult = emailValidCheck(email)
        let passwordResult = passwordValidCheck(password);
        if (emailResult && passwordResult) {

            //axios.post('/user/login', { email: email, password: password }).then((res) => {
            //     console.log(res);
            //     if (res.access_token) { // 토큰 받으면
            //         localStorage.setItem('login-token'); // 로컬 스토리지에 저장
            //          window.location.href = '/'; // 홈으로 이동
            //      }
            //  })
        }
        // navigate(`/`);

    }
    return (
        <LaunchContainer>
            <div className="content-area-1">
                <Login />
            </div>
            <form onSubmit={handleSubmit}>
                <div className="content-area-2">

                    <Input placeholder="이메일을 입력해주세요!" name="email" onChange={handleEmailChange} />
                    <ErrorMessage>{emailError}</ErrorMessage>
                    <Input type="password" placeholder="비밀번호를 입력해주세요!" name="password" onChange={handlePWChange} />
                    <ErrorMessage>{pwError}</ErrorMessage>
                    <LoginButton>코윗미 계정으로 로그인하기</LoginButton>

                    <Wrapper>
                        <div className="auth" onClick={() => navigate(`/landing/signup`)}>회원가입하기</div>
                        <div className="auth">비밀번호 찾기</div>
                    </Wrapper>

                </div>
            </form>
        </LaunchContainer >
    )
}

export default Loginpage;

const ErrorMessage = styled.div`
    color: red;
    width: 601px;
    height: 10px;
    font-family: 'AppleSDGothicNeoB00';
    font-size: 13px;
`;

const Wrapper = styled.div`
display: flex;
width: 601px;
justify-content: space-between;

.auth{
    font-family: 'AppleSDGothicNeoB00';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.5px;
    margin-top: 20px;

    color: #353434;
}

`

const LoginButton = styled.button`
width: 601px;
height: 61px;
margin-top: 20px;
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


const Input = styled.input`
width: 601px;
margin-bottom: 10px;
border:none; 
background-color:  ${theme.color.green};
border-bottom: 1px solid #000;
padding: 20px 0px;
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