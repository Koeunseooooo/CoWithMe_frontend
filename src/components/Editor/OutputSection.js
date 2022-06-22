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
            <button onClick={submit}>제출하기</button>
            {result !== "" && <>{result}</>}
        </OutputWrapper>
    );
};

export default OutputSection;

const OutputWrapper = styled.div`


`;
