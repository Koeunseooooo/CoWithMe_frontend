import { useState, useEffect } from "react";
import styled from "styled-components";
import { useMonaco } from "@monaco-editor/react";

import { theme } from "../../styles/theme";

const OnboardCodeSection = () => {
    const handleEditorChange = (value) => setSource(value);
    const [value, setValue] = useState("def solution(lottos, win_nums): \nanswer =[]\nreturn answer; ")
    const [source, setSource] = useState();
    const [result, setResult] = useState("");


    const monaco = useMonaco();


    useEffect(() => {
        monaco && monaco.editor.defineTheme('myTheme', {
            base: 'vs-dark',
            automaticLayout: true,
            rules: [{ background: 'EDF9FA' }],
            colors: {
                'editor.foreground': '#FFFFFF',
                'editor.background': '#0C0A18',
                'editor.lineHighlightBackground': '#0000FF20',
                'editorLineNumber.foreground': '#B02A0E',
                'editor.selectionBackground': '#88000030',
            }
        });
        monaco && monaco.editor.setTheme('myTheme');

        monaco && monaco.editor.create(document.getElementById('container'), {
            value: value,
            language: 'python',
            fontFamily: 'Arial',
            fontSize: 20,
            minimap: { enabled: false },
        });

    }, [monaco]);

    const submit = () => {
        // axios.post(`/`);
        setResult("정답입니다!")
    }
    return (
        <Wrapper>
            <Solution>예제 소스</Solution>
            <Editor>
                <div id="container" className="container" />
            </Editor>
        </Wrapper>
    )

}

export default OnboardCodeSection;

const Editor = styled.div`
    width: 600px;
    height: 300px;
    .container{
        height: 100%;
        width: 100%;
    }
`;
const Wrapper = styled.div`
    border-radius: 30px;
    background-color: ${theme.color.black2};
    padding: 0px;
    padding: 50px;
    margin-top: 80px;


`;
const Solution = styled.div`
    color: ${theme.color.green};
    font-family: 'AppleSDGothicNeoB00';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    margin-bottom: 30px;
    line-height: 33px;
    letter-spacing: 0.25px;
`;