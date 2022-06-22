import { useState, useEffect } from "react";
import styled from "styled-components";
import Editor, { useMonaco } from "@monaco-editor/react";
import { theme } from "../../styles/theme";

const CodeSection = () => {
    const handleEditorChange = (value) => setSource(value);
    const [source, setSource] = useState();
    const [result, setResult] = useState("");

    const monaco = useMonaco();

    const handleEditorDidMount = () => {
        monaco?.editor.defineTheme('my-theme', {
            base: 'vs-dark',
            inherit: true,
            rules: [],
            colors: {
                'editor.background': '#000000',

            },
        });
    }

    /*
    useEffect(() => {
        // TODO: 다크모드로 바꾸기
        monaco?.editor.defineTheme('my-theme', {
            base: 'vs-dark',
            inherit: true,
            rules: [],
            colors: {
                'editor.background': '#000000',

            },
        });

    }, []);
    */
    const submit = () => {
        // axios.post(`/`);
        setResult("정답입니다!")
    }
    return (
        <Wrapper>
            <Solution>Solution.cpp</Solution>
            <Editor
                className="editor"
                height="320px"
                theme="vs-dark"
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
    .editor{
        margin-top: 34px;
        padding: 20px;
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