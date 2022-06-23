import { useState, useEffect } from "react";
import styled from "styled-components";
import Editor, { useMonaco } from "@monaco-editor/react";
import { theme } from "../../styles/theme";

const OnboardCodeSection = () => {
    const handleEditorChange = (value) => setSource(value);
    const [source, setSource] = useState();
    const [result, setResult] = useState("");

    const monaco = useMonaco();

    // 에디터 레이아웃 시도중
    monaco?.editor.defineTheme('myCoolTheme', {
        base: 'vs-dark',
        inherit: false,
        rules: [
            { token: 'green', background: 'FF0000', foreground: '00FF00', fontStyle: 'italic' },
            { token: 'red', foreground: 'FF0000', fontStyle: 'bold underline' },
            { background: '000000' },
            { foreground: 'FFFFFF' }
        ],
        colors: {
            'editor.foreground': '#FFFFFF',
            'editor.background': '#000000',
        }
    });
    useEffect(() => {

    }, []);

    const submit = () => {
        // axios.post(`/`);
        setResult("정답입니다!")
    }
    return (
        <Wrapper>
            <Solution>예제 소스</Solution>
            <Editor
                className="editor"
                height="307px"
                width="670px"
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

export default OnboardCodeSection;


const Wrapper = styled.div`
    border-radius: 30px;
    background-color: ${theme.color.black2};
    padding: 0px;
    padding: 50px;
    margin-top: 110px;
    .editor{
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