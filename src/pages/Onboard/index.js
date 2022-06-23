import axios from "axios"
import { useEffect, useState } from "react"
import OnboardingHeader from "../../components/SubHeader/OnboardingHeader";
import styled from "styled-components";
import GuideSection from "../../components/Editor/GuideSection";
import BreadCrumb from "../../components/BreadCrumb/OnboardCrumb";
import RunSection from "../../components/Editor/RunSection";
import { theme, flexCenter } from '../../styles/theme';


const Onborad = () => {
  const [problemNumber, setProblemNumber] = useState(1);
  const [problem, setProblem] = useState(null);
  const [answer, setAnswer] = useState(); // 사용자가 선택한 정답

  // 1씩 증가시키면서 문제 가져오는 api
  const loadProblem = async (number) => {
    const resp = await axios.get(`/tests/${number}`);
    setProblem(resp.data);
  }

  const dummy = {
    'answer': "1",
    'category': "1",
    'choice1': "1",
    'choice2': "2",
    'choice3': "3",
    'choice4': "4",
    'createdAt': null,
    'deletedAt': null,
    'id': 1,
    'input': "hi",
    'output': "hi",
    'problem': "hi",
    'title': "hi",
    'updatedAt': null
  }

  // 처음엔 1로 시작
  useEffect(() => {
    loadProblem(1);
  }, []);

  // 제출 api
  const markProblem = async () => {
    const resp = await axios.post(`/tests/mark/${problem.id}`, {
      answer: '1' // 사용자가 마킹한 답
    });

    console.log(resp);
    loadProblem(problemNumber + 1); // 제출하면 다음 문제 가지고 오기
    setProblemNumber(problemNumber + 1);
  }

  return (
    <>
      <OnboardingHeader headText={"맞춤 유형 문제"} />
      <BreadCrumb problemNumber={problemNumber} />
      <Wrapper>
        <div className="main-wrapper">
          <ContentWrapper>
            {/*
            {problem &&
              <>
                <div>{`${problemNumber}/5`}</div>
                <div>{problem.title}</div>
                <div>{problem.choice1}</div>
                <button onClick={markProblem}>제출하기</button>
              </>
            }
          */}
            <GuideSection type="onboard" dummy={dummy} /> {/* dummy => problem으로 수정 */}
            <RunSection type="onboard" dummy={dummy} setAnswer={setAnswer} />
          </ContentWrapper>
        </div>
      </Wrapper>
    </>
  )
}

export default Onborad;


const Wrapper = styled.div`
margin-left: 143px;
padding: 20px;


`;
const ContentWrapper = styled.div`
  display: flex;
  padding: 50px;
  width: 100%;

  gap: 44px;
  min-height: 80vh;
  box-sizing: border-box;
  background-color: ${theme.color.black3};
  box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.16);
  border-radius: 40px 40px 0px 0px;

  .main-wrapper{
    display: flex;
    flex-direction : column;
  }


`;