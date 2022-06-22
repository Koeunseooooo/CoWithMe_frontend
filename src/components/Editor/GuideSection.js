import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import styled from "styled-components";

const GuideSection = () => {
    const { id } = useParams();
    const [problem, setProblem] = useState({});
    const [answer, setAnswer] = useState("");
    const [result, setResult] = useState("");


    useEffect(() => {
        // axios.get(`/problem/${id}`)
        //   .then(res => {})

        setProblem({
            title: 'A + B',
            category: 'DP',
            problem: '두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.',
            input: '첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)',
            output: '첫째 줄에 A+B를 출력한다.',
            examples: [{
                input: '1 2',
                output: '3'
            }, {
                input: '4 6',
                output: '10'
            }]
        })
    }, []);

    return (
        <Wrapper>
            {problem &&
                <>
                    <div>{`문제 #${id}(${problem.category})`}</div>
                    <div>{problem.title}</div>
                    <div>{problem.problem}</div>
                    <div>{problem.input}</div>
                    <div>{problem.output}</div>

                    {problem.examples?.map(example => (
                        <>
                            <div>{example.input}</div>
                            <div>{example.output}</div>
                        </>
                    ))}


                </>}
        </Wrapper>
    )
}
export default GuideSection;

const Wrapper = styled.div`
width: calc(50.7651% - 12px);
min-height: 100%;

margin-left: 143px;
background-color: blue;
`