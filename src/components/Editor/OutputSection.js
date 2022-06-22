import React, { useState } from 'react';
import styled from 'styled-components';
import { theme, flexCenter } from '../../styles/theme';

const OutputSection = () => {
    const [result, setResult] = useState("");
    const [source, setSource] = useState();
    // const monaco = useMonaco();

    const handleEditorChange = (value) => setSource(value);

    // TODO: 소스코드 전송
    // axios.post(``)
    //   .then(res => {})


    const submit = () => {
        // axios.post(`/`);
        setResult("정답입니다!")
    }

    return (
        <OutputWrapper>
            <div className="output-title">
                실행 결과
            </div>
            <div className="console">
                {result !== "" && <>{result}</>}
            </div>
            <div className="button-wrapper">
                <Button color="grey" onClick={submit}>제출하기</Button>
                <Button color="green">다음 문제 풀기</Button>
            </div>
        </OutputWrapper>
    );
};

export default OutputSection;

const OutputWrapper = styled.div`
padding: 30px;
margin-top: 40px;
display: flex;
flex-direction: column;
background-color: ${theme.color.black4};
.console{
    padding: 30px;
    margin-top: 36px;
    height: 68px;
    font-size: 18px;
    
}
.button-wrapper{
    ${flexCenter}
    gap: 40px;

}
.output-title{
    font-family: 'AppleSDGothicNeoB00';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 33px;
    letter-spacing: 0.25px;
    color: ${theme.color.green}
}

`;

const Button = styled.button`
width: 165px;
height: 48px;
border-radius: 100px;
color: ${(props) => props.color === 'grey' ? theme.color.white : theme.color.black};
background-color: ${(props) => props.color === 'grey' ? theme.color.grey : theme.color.green};
font-family: 'AppleSDGothicNeoB00';
font-weight: 400;
font-size: 16px;
line-height: 22px;
letter-spacing: 0.25px;

`