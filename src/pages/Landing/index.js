import styled from "styled-components";

import { theme, flexCenter } from '../../styles/theme';
import { Outlet } from "react-router-dom";


const Landing = () => {

  return (
    <Wrapper>
      <img className="bg-image" src={require('../../assets/Landing/Background_Image.svg').default} alt="" />
      <header>
        <img className="logo" src={require('../../assets/Landing/white_Logo.svg').default} alt="" />
      </header>
      <section>
        <Outlet />
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

`;