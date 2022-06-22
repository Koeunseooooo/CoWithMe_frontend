import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import styled from "styled-components";
import GuideSection from "../../components/Editor/GuideSection";
import BreadCrumb from "../../components/BreadCrumb";
import RunSection from "../../components/Editor/RunSection";


const Solve = () => {

  return (
    <>
      <Wrapper>
        <div className="main-wrapper">
          <BreadCrumb />
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
`;
const ContentWrapper = styled.div`
  display: flex;

  width: 100%;
  height: 80vh;
  box-sizing: border-box;
  background-color: #f8f8f8;

  .main-wrapper{
    display: flex;
    flex-direction : column;


  }
`;