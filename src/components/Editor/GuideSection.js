import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom"
import styled from "styled-components";
import { theme } from "../../styles/theme";

const GuideSection = ({ type, dummy }) => {
    // type: code or onboard
    // - code: api call
    // - onboard: 데이터 뿌려주기
    console.log(type, dummy);
    const { id } = useParams();
    const [problem, setProblem] = useState(dummy);
    const [answer, setAnswer] = useState("");
    const [result, setResult] = useState("");

    useEffect(() => {
        //if(type === 'code'){ // 타입이 코드일 때만 api call하기
        // axios.get(`/problem/${id}`)
        //   .then(res => {})
        //}

        setProblem({
            title: 'A + B',
            category: 'DP',
            problem: '카카오에 입사한 신입 개발자 네오는 "카카오계정개발팀"에 배치되어, 카카오 서비스에 가입하는 유저들의 아이디를 생성하는 업무를 담당하게 되었습니다. "네오"에게 주어진 첫 업무는 새로 가입하는 유저들이 카카오 아이디 규칙에 맞지 않는 아이디를 입력했을 때, 입력된 아이디와 유사하면서 규칙에 맞는 아이디를 추천해주는 프로그램을 개발하는 것입니다 다음은 카카오 아이디의 규칙입니다 카카오에 입사한 신입 개발자 네오는 "카카오계정개발팀"에 배치되어, 카카오 서비스에 가입하는 유저들의 아이디를 생성하는 업무를 담당하게 되었습니다. "네오"에게 주어진 첫 업무는 새로 가입하는 유저들이 카카오 아이디 규칙에 맞지 않는 아이디를 입력했을 때, 입력된 아이디와 유사하면서 규칙에 맞는 아이디를 추천해주는 프로그램을 개발하는 것입니다 다음은 카카오 아이디의 규칙입니다. 카카오에 입사한 신입 개발자 네오는 "카카오계정개발팀"에 배치되어, 카카오 서비스에 가입하는 유저들의 아이디를 생성하는 업무를 담당하게 되었습니다. "네오"에게 주어진 첫 업무는 새로 가입하는 유저들이 카카오 아이디 규칙에 맞지 않는 아이디를 입력했을 때, 입력된 아이디와 유사하면서 규칙에 맞는 아이디를 추천해주는 프로그램을 개발하는 것입니다 다음은 카카오 아이디의 규칙입니다. 카카오에 입사한 신입 개발자 네오는 "카카오계정개발팀"에 배치되어, 카카오 서비스에 가입하는 유저들의 아이디를 생성하는 업무를 담당하게 되었습니다. "네오"에게 주어진 첫 업무는 새로 가입하는 유저들이 카카오 아이디 규칙에 맞지 않는 아이디를 입력했을 때, 입력된 아이디와 유사하면서 규칙에 맞는 아이디를 추천해주는 프로그램을 개발하는 것입니다 다음은 카카오 아이디의 규칙입니다. 카카오에 입사한 신입 개발자 네오는 "카카오계정개발팀"에 배치되어, 카카오 서비스에 가입하는 유저들의 아이디를 생성하는 업무를 담당하게 되었습니다. "네오"에게 주어진 첫 업무는 새로 가입하는 유저들이 카카오 아이디 규칙에 맞지 않는 아이디를 입력했을 때, 입력된 아이디와 유사하면서 규칙에 맞는 아이디를 추천해주는 프로그램을 개발하는 것입니다 다음은 카카오 아이디의 규칙입니다.'
            , input: '첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)',
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
            <div className="problem-name">
                {dummy.title}
            </div>
            <div className="problem">
                <div className="problem-description">
                    문제 설명
                </div>
                {problem &&
                    <Content>
                        {dummy.problem}
                    </Content>}
            </div>
        </Wrapper>
    )
}
export default GuideSection;

const Wrapper = styled.div`
width: 75.8rem;
height: 50vh;
overflow-y: auto;
border-radius: 30px;
font-family: 'neoB';
padding: 20px;

background-color: ${theme.color.black2};
.problem{
    padding: 30px;
    line-height: 28px;
}
.problem-name{
    font-family: 'AppleSDGothicNeoM00';
    font-weight: 400;
    font-size: 32px;
    margin-left: 20px;
    line-height: 46px;
    letter-spacing: 0.25px;
    margin-bottom: 36px;
  }

.problem-description{
    color: ${theme.color.green};
    font-weight: 400;
    font-size: 24px;
    font-family: 'AppleSDGothicNeoM00';
    line-height: 33px;
    letter-spacing: 0.25px;
}
`

const Content = styled.div`
margin-top: 20px;
font-family: 'AppleSDGothicNeoM00';
padding: 10px;
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 28px;
letter-spacing: 0.25px;
`