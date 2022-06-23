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

  const [problemNumber, setProblemNumber] = useState(1);
  const [problem, setProblem] = useState(null);
  const [answer, setAnswer] = useState(); // 사용자가 선택한 정답

  const loadProblem = async (number) => {
    const resp = await axios.get(`/tests/${number}`);
    setProblem(resp.data);
  }

  useEffect(() => {
    loadProblem(1);
  }, []);

  const markProblem = async (result) => {
    const resp = await axios.post(`/tests/mark/${problem.id}`, {
      answer: result
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