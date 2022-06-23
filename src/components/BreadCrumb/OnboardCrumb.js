import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const BreadCrumb = ({ problemNumber }) => {

    return (
        <BreadCrumbWrapper>
            <span className="breadcrumb">
                <span className="total-problem">5개 중 {">"} </span>
                <span className="cur-problem">&nbsp;{`${problemNumber}개 문제`}</span>

            </span>
        </BreadCrumbWrapper>
    );
};

export default BreadCrumb;

const BreadCrumbWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;

  height: 40px;
  width: 100%;
  color: white;
  background-color: ${theme.color.black2};

  .breadcrumb{
    margin-left: 109px;
    display: flex;
    flex-direction: row;
    font-weight: 400;
    text-decoration: none;
    font-family: 'AppleSDGothicNeoM00';
    font-size: 24px;
    margin-top: 40px;
    line-height: 34px;
    letter-spacing: 0.25px;
    background-color: ${theme.color.black2};
    list-style: none;

    .cur-problem{
        color: ${theme.color.green};
    }
    
`;
