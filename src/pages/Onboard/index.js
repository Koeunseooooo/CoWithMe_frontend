import axios from "axios"
import { useEffect, useState } from "react"
import OnboardingHeader from "../../components/SubHeader/OnboardingHeader";
import styled from "styled-components";
import OnboardGuideSection from "./OnboardGuideSection";
import OnboardCodeSection from "./OnboardCodeSection";
import { useCookies } from "react-cookie"
import SelectSection from "./SelectSection";
import BreadCrumb from "../../components/BreadCrumb/OnboardCrumb";
import { theme, flexCenter } from '../../styles/theme';


const Onborad = () => {
  const [, setCookie, removeCookie] = useCookies(["Authorization"]);

  /*
    const [problemNumber, setProblemNumber] = useState(1);
    //const [problem, setProblem] = useState(null);
    const [problem, setProblem] = useState({
      'answer': "1",
      'category': "2021 KAKO BLIND",
      'choice1': "1",
      'choice2': "2",
      'choice3': "3",
      'choice4': "4",
      'createdAt': null,
      'deletedAt': null,
      'id': 1,
      'input': "신규 유저가 입력한 아이디를 나타내는 new_id가 매개변수로 주어질 때, 네오가 설계한 7단계의 처리 과정을 거친 후의 추천 아이디를 return 하도록 solution 함수를 완성해 주세요.",
      'output': " $1 ≤ Q ≤ 100\,000$ \n $3 ≤ n ≤ 9999$ \n $1 ≤ x, y ≤ n$ \n $1 ≤ z ≤ n^2$ ",
      "inputSample": " $1 ≤ Q ≤ 100\n,000$ \n $3 ≤ n ≤ 9999$ \n$1 ≤ x, y ≤ n$ \n$1 ≤ z ≤ n^2$ ",
      "outputSample": " $1 ≤ Q ≤ 100\n,000$ \n $3 ≤ n ≤ 9999$ \n$1 ≤ x, y ≤ n$ \n$1 ≤ z ≤ n^2$ ",
      'problem': "카카오에 입사한 신입 개발자 네오는 카카오계정개발팀에 배치되어, 카카오 서비스에 가입하는 유저들의 아이디를 생성하는 업무를 담당하게 되었습니다. 네오에게 주어진 첫 업무는 새로 가입하는 유저들이 카카오 아이디 규칙에 맞지 않는 아이디를 입력했을 때, 입력된 아이디와 유사하면서 규칙에 맞는 아이디를 추천해주는 프로그램을 개발하는 것입니다   다음은 카카오 아이디의 규칙입니다       아이디의 길이는 3자 이상 15자 이하여야 합니다.아이디는 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.) 문자만 사용할 수 있습니다. 단, 마침표(.)는 처음과 끝에 사용할 수 없으며 또한 연속으로 사용할 수 없습니다.네오는 다음과 같이 7단계의 순차적인 처리 과정을 통해 신규 유저가 입력한 아이디가 카카오 아이디 규칙에 맞는 지 검사하고 규칙에 맞지 않은 경우 규칙에 맞는 새로운 아이디를 추천해 주려고 합니다.신규 유저가 입력한 아이디가 new_id 라고 한다면, ",
      'title': "신규 아이디 추천",
      'updatedAt': null
    });
    const [answer, setAnswer] = useState(); // 사용자가 선택한 정답
  
    const loadProblem = async (number) => {
      const resp = await axios.get(`/tests/${number}`);
      //setProblem(resp.data);
  
  */
  const [problemNumber, setProblemNumber] = useState(5);
  const [problem, setProblem] = useState(null);
  const [answer, setAnswer] = useState(); // 사용자가 선택한 정답

  const loadProblem = async (number) => {
    // const resp = await axios.get(`/tests/${number}`);
    setProblem({
      title: '최대값 찾기',
      problem: '(Fill in the missing line here에 들어갈 알맞은 코드를 선택해주세요.',
      input: '.',
      output: '.',
      inputSample: '.',
      outputSample: '.',

      choice1: 'num = max_num',
      choice2: 'max_num += 1',
      choice3: 'max_num = num',
      choice4: 'max_num += num'
    });

  }

  useEffect(() => {
    loadProblem(5);
  }, []);

  const markProblem = async (result) => {
    // const resp = await axios.post(`/tests/mark/${problem.id}`, {
    //   answer: result
    // });

    // console.log(resp);
    // loadProblem(problemNumber + 1); // 제출하면 다음 문제 가지고 오기
    // setProblemNumber(problemNumber + 1);

    window.location.href = '/'; // 홈으로 이동
  }

  return (
    <>
      <OnboardingHeader headText={"맞춤 유형 문제"} />
      <BreadCrumb problemNumber={problemNumber} />
      <Wrapper>
        <div className="main-wrapper">
          <ContentWrapper>
            {problem && <>
              <OnboardGuideSection problem={problem} />
              <RunSection>
                <OnboardCodeSection />
                <SelectSection problem={problem} markProblem={markProblem} problemNumber={problemNumber} />
              </RunSection>
            </>
            }
          </ContentWrapper>
        </div>
      </Wrapper>
    </>
  )
}

export default Onborad;


const Wrapper = styled.div`
  padding: 20px;
  margin: 50px;
  height: 60vh;
`;

const RunSection = styled.div`
width: 75.5rem;
border-radius: 30px;
display: flex;
flex-direction: column;
`;

const ContentWrapper = styled.div`
display: flex;
padding: 50px;
width: 100%;

gap: 44px;
min-height: 90vh;
box-sizing: border-box;
background-color: ${theme.color.black3};
box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.16);
border-radius: 40px 40px 0px 0px;

.main-wrapper{
  display: flex;
  flex-direction : column;
}


`;