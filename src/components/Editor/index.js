import { useState, useEffect } from "react";

import Editor, { useMonaco } from "@monaco-editor/react";
import axios from "axios";
import LeftSideSection from "./LeftSideSection";
import RightSideSection from "./RightSideSection";
import SelectBox from "./Selectbox";

const CodeEditor = () => {
    const [result, setResult] = useState("");
    const [source, setSource] = useState();
    const monaco = useMonaco();

    const handleEditorChange = (value) => {
        console.log(value);
        setSource(value);
    }

    const OPTIONS = [
        { value: "javascript", name: "javascript" },
        { value: "python", name: "python" },
        { value: "c++", name: "c++" },
    ];

    // TODO: 소스코드 전송
    // axios.post(``)
    //   .then(res => {})


    const submit = () => {
        // axios.post(`/`);
        setResult("정답입니다!")
    }

    return (
        <>
            <SelectBox options={OPTIONS} defaultValue="banana"></SelectBox>;
            <Editor
                height="50vh"
                defaultLanguage="javascript"
                defaultValue="function solution(lottos, win_nums) {
                    var answer = [];
                    return answer;
                }"
                onChange={handleEditorChange} />
            <button onClick={submit}>제출하기</button>
            {result !== "" && <>{result}</>}
        </>
    );
}

export default CodeEditor;