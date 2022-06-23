import axios from "axios";
import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";

const GuideSection = ({ problem }) => {
    return (
        <Section>
            <div className="problem-name">
                {problem.title}
            </div>
            <Wrapper>

                <div className="problem">
                    <div className="problem-description">
                        문제 설명
                    </div>
                    {problem &&
                        <Content>
                            {problem.problem}
                        </Content>}
                </div>
            </Wrapper>
        </Section>
    )
}
export default GuideSection;

const Section = styled.div`
display:flex;
flex-direction: column;
.problem-name{
    font-family: 'AppleSDGothicNeoM00';
    font-weight: 400;
    font-size: 32px;
    margin-left: 20px;
    line-height: 46px;
    letter-spacing: 0.25px;
    margin-bottom: 36px;
  }
`
const Wrapper = styled.div`
width: 75.8rem;
height: 50vh;
overflow-y: auto;
border-radius: 30px;
font-family: 'neoB';
padding: 20px;

background-color: ${theme.color.black2};
.problem{
    padding: 30px;
    line-height: 28px;
}


.problem-description{
    color: ${theme.color.green};
    font-weight: 400;
    font-size: 24px;
    font-family: 'AppleSDGothicNeoM00';
    line-height: 33px;
    letter-spacing: 0.25px;
}
`

const Content = styled.div`
margin-top: 20px;
font-family: 'AppleSDGothicNeoM00';
padding: 10px;
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 28px;
letter-spacing: 0.25px;
`