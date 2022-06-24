import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import StyledLink from "./StyledLink";

const BreadCrumb = ({ category, title }) => {

    return (
        <BreadCrumbWrapper>
            <ol className="breadcrumb">
                <li>
                    <StyledLink to='/problems' color="white">
                        코딩테스트 연습
                    </StyledLink>
                </li>
                <li>
                    <StyledLink to='/problems' color="white">
                        {category}
                    </StyledLink>
                </li>
                <li>
                    <StyledLink to='/problems' color="green">
                        {title}
                    </StyledLink>
                </li>
            </ol>
        </BreadCrumbWrapper>
    );
};

export default BreadCrumb;

const BreadCrumbWrapper = styled.div`
  margin-left: 143px;
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  font-family: 'AppleSDGothicNeoB00';
  height: 90px;
  width: 100%;
  color: white;
  background-color: black;

  .breadcrumb{
    display: flex;
    flex-direction: row;
    font-weight: 400;
    text-decoration: none;
    font-size: 24px;
    line-height: 34px;
    letter-spacing: 0.25px;
    background-color: black;
    list-style: none;
    
    li + li::before {
        color: ${theme.color.grey2};
        content: "〉 ";
        font-family: sans-serif;
        font-weight: 400;
        padding: 0px 4px;
    }
    li{
        margin-left: 20px;
    }
    
  }

  .solve{
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    letter-spacing: 0.25px;
  }
`;
