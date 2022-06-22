import jwtDecode from 'jwt-decode';
import styled from 'styled-components';
// import GoogleLogin from 'react-google-login';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

import axios from 'axios';

const GoogleAuth = () => {
    // 구글 로그인 성공 시

    const onGoogleSignInFailure = (res) => {
        console.log(res);
    }
    const onGoogleSignInSuccess = (res) => {
        console.log(res);
        localStorage.setItem('userName', res.profileObj.givenName);
        console.log(localStorage);

        const params = new URLSearchParams();
        params.append('idToken', res.tokenObj.id_token);

        const googleLogin = async () => {
            const { data } = await axios.post('/login/google', params, { // TODO: 로그인 api 연결해야 합니다
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            });

            localStorage.setItem('accessToken', data.token.access);
            localStorage.setItem('refreshToken', data.token.refresh);
            localStorage.setItem('tooltip', data.tooltip);
            localStorage.setItem(
                'accessExpiredAt',
                jwtDecode(data.token.access).exp * 1000
            );
            localStorage.setItem(
                'refreshExpiredAt',
                jwtDecode(data.token.refresh).exp * 1000
            );

            window.location.href = '/home';
        };

        // googleLogin();
    };

    return (
        <>
            <GoogleOAuthProvider clientId=''>
                <GoogleLogin
                    // clientId={process.env.REACT_APP_GOOGLE_API_KEY}
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
