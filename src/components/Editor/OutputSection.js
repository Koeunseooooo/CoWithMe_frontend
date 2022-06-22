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
                <button onClick={submit}>제출하기</button>
                <button>다음 문제 풀기</button>
            </div>
        </OutputWrapper>
    );
};

export default OutputSection;

const OutputWrapper = styled.div`

margin-top: 40px;
display: flex;
flex-direction: column;
background-color: pink;
.console{
    padding: 30px;
}
.button-wraper{

}

`;
