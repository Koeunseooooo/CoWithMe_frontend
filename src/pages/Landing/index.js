import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import styled from "styled-components";
import Content from "../../components/Landing/Content";
import LoginButton from "../../components/Landing/LoginButton";
import { theme, flexCenter } from '../../styles/theme';

const Landing = () => {

  return (
    <Wrapper>
      <img className="bg-image" src={require('../../assets/Landing/Background_Image.svg').default} alt="" />

      <header>
        <img className="logo" src={require('../../assets/Landing/white_Logo.svg').default} alt="" />
      </header>
      <section>
        <div className="launch-container">
          <div className="content-area-1">
            <Content />
          </div>
          <div className="content-area-2">
            <LoginButton />
          </div>
        </div>

      </section>

    </Wrapper>
  )
}

export default Landing;


const Wrapper = styled.div`
.bg-image{
  position: absolute;
  top:0;
  left:0;
}

width: 100%;
height: 100%;
position: relative;
header{
  padding: 60px;
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  height: 64px;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  z-index: 1;
}
section{
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 137px;
  box-sizing: border-box;
}

.launch-container{
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
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
}

`;