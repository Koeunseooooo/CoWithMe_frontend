import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom"
import styled from "styled-components";
import { theme } from "../../styles/theme";

const OnboardGuideSection = ({ problem }) => {
    return (
        <Section>
            <div className="problem-name">
                {problem.title}
            </div>
            <Wrapper>

                <div className="problem">
                    <ProblemDescription>
                        문제 설명
                    </ProblemDescription>
                    {problem &&
                        <Content>
                            {problem.problem}
                        </Content>}

                    <ProblemDescription>
                        입력
                    </ProblemDescription>
                    {problem &&
                        <Content>
                            {problem.input}
                        </Content>}

                    <ProblemDescription>
                        출력
                    </ProblemDescription>
                    {problem &&
                        <Content>
                            {problem.output}
                        </Content>}

                    <SideWrapper>
                        <div className="example">
                            <ProblemDescription>
                                예제 입력
                            </ProblemDescription>
                            {problem &&
                                <Content>
                                    {problem.inputSample}
                                </Content>}
                        </div>
                        <div className="example">
                            <ProblemDescription>
                                예제 출력
                            </ProblemDescription>
                            {problem &&
                                <Content>
                                    {problem.outputSample}
                                </Content>}
                        </div>
                    </SideWrapper>
                </div>
            </Wrapper>
        </Section>
    )
}
export default OnboardGuideSection;

const SideWrapper = styled.div`
        display: flex;
        flex-direction: row;
        .example{
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            width: 50%;
            .sample{
                
            }
        }
    `

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

const ProblemDescription = styled.div`
    
        color: ${theme.color.green};
        font-weight: 400;
        font-size: 24px;
        font-family: 'AppleSDGothicNeoM00';
        line-height: 33px;
        letter-spacing: 0.25px;
    
    `
const Wrapper = styled.div`
    width: 75.8rem;
    height: 58vh;
    overflow-y: auto;
    border-radius: 30px;
    font-family: 'neoB';
    padding: 20px;
    
    background-color: ${theme.color.black2};
    .problem{
        padding: 30px;
        line-height: 28px;
    }
    
    `

const Content = styled.div`
    margin: 30px 0;
    font-family: 'AppleSDGothicNeoM00';
    padding: 10px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: 0.25px;
    `