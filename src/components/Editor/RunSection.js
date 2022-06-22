import { useState, useEffect } from "react";
import styled from "styled-components";
import CodeEditor from "./CodeSection";
import CodeSection from "./CodeSection";
import OutputSection from "./OutputSection";

import axios from "axios";


const RunSection = () => {

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
        <Wrapper>
            <CodeSection />
            <OutputSection />
        </Wrapper>
    );
}

export default RunSection;

const Wrapper = styled.div`
 width: 75.5rem;
 border-radius: 30px;
 display: flex;
 flex-direction: column;
`