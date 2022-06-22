import React from 'react';
import styled from 'styled-components';
import { theme, flexCenter } from '../../styles/theme';
import { useNavigate } from 'react-router-dom';
import GoogleAuth from "../Auth/GoogleAuth";
const LoginButton = () => {
    return (
        <Wrapper>
            <GoogleAuth />

        </Wrapper>
    );
};

export default LoginButton;

const Wrapper = styled.div`
    width: 601px;
    height: 61px;
    left: 659px;
    top: 582px;

    background: ${theme.color.white1};
    border-radius: 10px;
 
  }
`;
