import React from 'react';
import styled from 'styled-components';
import { theme, flexCenter } from '../../styles/theme';
import { Link } from "react-router-dom";

const BreadCrumb = () => {

    return (
        <BreadCrumbWrapper>
            <div className="solve">맞춤 유형 문제</div>
            <ol className="breadcrumb">
                <Link to='/'>
                    코딩테스트 연습
                </Link>
                <Link to='/'>
                    2021 KAKAO BLIND
                </Link>
                <Link to='/'>
                    신규 아이디 추천
                </Link>
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

  height: 70px;
  width: 100%;
  color: white;
  background-color: black;

  .breadcrumb{
    display: flex;
    flex-direction: row;
    font-weight: 400;
    font-size: 12px;
    line-height: 34px;
    letter-spacing: 0.25px;
    background-color: black;
  }

  .solve{
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    letter-spacing: 0.25px;
  }
`;
