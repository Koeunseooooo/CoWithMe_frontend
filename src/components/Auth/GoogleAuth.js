import jwtDecode from 'jwt-decode';
import styled from 'styled-components';
// import GoogleLogin from 'react-google-login';
import { GoogleOAuthProvider, GoogleLogin, hasGrantedAllScopesGoogle } from '@react-oauth/google';

import axios from 'axios';

const GoogleAuth = () => {
    // 구글 로그인 성공 시

    const onGoogleSignInFailure = (res) => {
        console.log(res);
    }
    const onGoogleSignInSuccess = (res) => {
        console.log(res);
        const { credential } = res;
        console.log(localStorage);

        const googleLogin = async () => {
            const resp = await axios.post('/auth/login', { token: credential });
            console.log(resp.data);
            window.location.href = '/home';
        }

        // // TODO: 상황에 맞춰 호출
        const googleSignup = async () => {
            const resp = await axios.post('/auth/join', { token: credential });
            console.log(resp.data);
            window.location.href = '/home';

            // localStorage.setItem('accessToken', data.token.access);
            // localStorage.setItem('refreshToken', data.token.refresh);
            // localStorage.setItem('tooltip', data.tooltip);
        };

        // googleLogin(credential);
        googleSignup(credential);
    };

    return (
        <>
            <GoogleOAuthProvider clientId='593606914816-bmmq2brv4k6mokcb85jl7lv33agijhb1'>
                <GoogleLogin
                    onSuccess={onGoogleSignInSuccess}
                    onError={onGoogleSignInFailure}
                />
            </GoogleOAuthProvider>
        </>
    )

}

export default GoogleAuth;

const GoogleButton = styled.button`
  width: 300px;
  height: 60px;
`;

const GoogleWrapper = styled.div`
  width: 228px;
  height: 36px;
`;


const GoogleText = styled.span`
  font-size: 18px;
  display: flex;
`;
