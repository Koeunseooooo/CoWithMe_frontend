import { useState, useEffect } from "react";
import styled from "styled-components";
import Editor, { useMonaco } from "@monaco-editor/react";
import { theme } from "../../styles/theme";

const CodeSection = ({ setSource }) => {
    const handleEditorChange = (value) => setSource(value);
    const [result, setResult] = useState("");
    const monaco = useMonaco();

    useEffect(() => {

    }, []);

    const submit = () => {
        // axios.post(`/`);
        setResult("정답입니다!")
    }
    return (
        <Wrapper>
            <Solution>Solution.py</Solution>
            <Editor
                className="editor"
                height="307px"
                theme="vs-dark"
                fontSize="30px"
                defaultLanguage="python"

                defaultValue="def solution(lottos, win_nums):
                answer = []
                return answer;
        }"
                onChange={handleEditorChange} />
        </Wrapper>
    )

}

export default CodeSection;


const Wrapper = styled.div`
    border-radius: 30px;
    background-color: ${theme.color.black2};
    padding: 30px;
    margin-top: 100px;
    .editor{
        margin-top: 34px;
        padding: 20px;
        width: 686px;
    }

`;
const Solution = styled.div`
    color: ${theme.color.green};
    font-family: 'AppleSDGothicNeoB00';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 33px;
    letter-spacing: 0.25px;
`;