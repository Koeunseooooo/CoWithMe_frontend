import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import styled from "styled-components";
import GuideSection from "../../components/Editor/GuideSection";
import BreadCrumb from "../../components/BreadCrumb";
import RunSection from "../../components/Editor/RunSection";
import { theme, flexCenter } from '../../styles/theme';

const Solve = () => {

  return (
    <>
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
  border-radius: 20px;
  border: 1px solid white;
  gap: 44px;
  min-height: 80vh;
  box-sizing: border-box;
  background-color: yellow;

  .main-wrapper{
    display: flex;
    flex-direction : column;
  }
`;