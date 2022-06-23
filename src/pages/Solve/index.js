import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import styled from "styled-components";
import GuideSection from "../../components/Editor/GuideSection";
import CodeSection from "../../components/Editor/CodeSection";
import OutputSection from "../../components/Editor/OutputSection";
import BreadCrumb from "../../components/BreadCrumb";
import SubHeader from '../../components/SubHeader'
import Header from '../../components/Header'
import { theme, flexCenter } from '../../styles/theme';

const Solve = () => {
  const [source, setSource] = useState(); // source: 제출할 소스코드
  const [problem, setProblem] = useState({
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
  });

  useEffect(() => { // 문제 가져오기
    //axios.get('/problems/recommend').then(res => setProblem(res.data));
  });

  return (
    <>
      <Header />
      <SubHeader headText={"맞춤 유형 문제"} />
      <BreadCrumb />
      <Wrapper>
        <div className="main-wrapper">
          <ContentWrapper>
            <GuideSection problem={problem} />
            <RunSection>
              <CodeSection setSource={setSource} />
              <OutputSection source={source} />
            </RunSection>
          </ContentWrapper>
        </div>
      </Wrapper>

    </>
  )
}

export default Solve;

const RunSection = styled.div`
width: 75.5rem;
border-radius: 30px;
display: flex;
flex-direction: column;
`;


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