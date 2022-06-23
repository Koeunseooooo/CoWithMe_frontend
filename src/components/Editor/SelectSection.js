import React, { useState } from 'react';
import styled from 'styled-components';
import { theme, flexCenter } from '../../styles/theme';

const SelectSection = ({ dummy, setAnswer }) => {
    console.log(dummy);
    const [result, setResult] = useState("");
    const [source, setSource] = useState();
    // const monaco = useMonaco();

    const handleEditorChange = (value) => setSource(value);

    const handleClick = (e) => {
        console.log(e.target);

    }

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
                정답 선택
            </div>
            <div className="button-wrapper">

                <RadioButton onClick={handleClick}>{dummy.choice1}</RadioButton>
                <RadioButton onClick={handleClick}>{dummy.choice2}</RadioButton>
                <RadioButton onClick={handleClick}>{dummy.choice3}</RadioButton>
                <RadioButton onClick={handleClick}>{dummy.choice4}</RadioButton>
            </div>
            <Button color="grey">다음 문제 풀기</Button>
        </OutputWrapper>
    );
};

export default SelectSection;

const RadioButton = styled.div`
width: 145px;
height: 35px;
border-radius: 100px;
padding: 10px;
${flexCenter}
color: #2DDE54;
border: 1px solid #2DDE54;
background-color: black;
font-weight: 400;
font-size: 16px;
font-family: 'AppleSDGothicNeoB00';
line-height: 22px;
&:hover{
    background-color: #2DDE54;
    color: black;
}
`

const OutputWrapper = styled.div`
padding: 30px;
display: flex;
gap: 36px;
flex-direction: column;
background-color: ${theme.color.black4};

.button-wrapper{
    flex-direction: row;
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
align-self: center;
color: ${(props) => props.color === 'grey' ? theme.color.white : theme.color.black};
background-color: ${(props) => props.color === 'grey' ? theme.color.grey : theme.color.green};
font-family: 'AppleSDGothicNeoB00';
font-weight: 400;
font-size: 16px;
line-height: 22px;
letter-spacing: 0.25px;

`