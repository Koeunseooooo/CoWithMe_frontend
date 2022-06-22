import { useState, useEffect } from "react";
import styled from "styled-components";
import Editor from "@monaco-editor/react";

const CodeSection = () => {
    const handleEditorChange = (value) => setSource(value);
    const [source, setSource] = useState();
    const [result, setResult] = useState("");


    const submit = () => {
        // axios.post(`/`);
        setResult("정답입니다!")
    }
    return (
        <>
            <Editor
                height="50vh"
                defaultLanguage="javascript"
                defaultValue="function solution(lottos, win_nums) {
            var answer = [];
            return answer;
        }"
                onChange={handleEditorChange} />
        </>
    )

}

export default CodeSection;