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
    'problem': "카카오에 입사한 신입 개발자 네오는 카카오계정개발팀에 배치되어, 카카오 서비스에 가입하는 유저들의 아이디를 생성하는 업무를 담당하게 되었습니다. 네오에게 주어진 첫 업무는 새로 가입하는 유저들이 카카오 아이디 규칙에 맞지 않는 아이디를 입력했을 때, 입력된 아이디와 유사하면서 규칙에 맞는 아이디를 추천해주는 프로그램을 개발하는 것입니다   다음은 카카오 아이디의 규칙입니다       아이디의 길이는 3자 이상 15자 이하여야 합니다.아이디는 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.) 문자만 사용할 수 있습니다. 단, 마침표(.)는 처음과 끝에 사용할 수 없으며 또한 연속으로 사용할 수 없습니다.네오는 다음과 같이 7단계의 순차적인 처리 과정을 통해 신규 유저가 입력한 아이디가 카카오 아이디 규칙에 맞는 지 검사하고 규칙에 맞지 않은 경우 규칙에 맞는 새로운 아이디를 추천해 주려고 합니다.신규 유저가 입력한 아이디가 new_id 라고 한다면, ",
    'title': "신규 아이디 추천",
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