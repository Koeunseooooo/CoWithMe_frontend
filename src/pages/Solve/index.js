import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import styled from "styled-components";
import GuideSection from "../../components/Editor/GuideSection";
import BreadCrumb from "../../components/BreadCrumb";
import RunSection from "../../components/Editor/RunSection";
import SubHeader from '../../components/SubHeader'

import { theme, flexCenter } from '../../styles/theme';

const Solve = () => {

  return (
    <>
      <SubHeader headText={"코윗미 메인 홈"} />
      <BreadCrumb />
      <Wrapper>
        <div className="main-wrapper">
          <ContentWrapper>

            <GuideSection />
            <RunSection />
          </ContentWrapper>
        </div>
      </Wrapper>

    </>
  )
}

export default Solve;


const Wrapper = styled.div`
margin-left: 143px;
padding: 20px;

`;
const ContentWrapper = styled.div`
  display: flex;
  padding: 50px;
  width: 100%;

  gap: 44px;
  min-height: 80vh;
  box-sizing: border-box;
  background-color: ${theme.color.black3};
  box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.16);
  border-radius: 40px 40px 0px 0px;

  .main-wrapper{
    display: flex;
    flex-direction : column;
  }


`;