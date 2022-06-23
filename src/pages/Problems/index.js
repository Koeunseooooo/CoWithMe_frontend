import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie"
import styled from "styled-components";
import ProblemCard from "../../components/ProblemCard";
import Header from '../../components/Header'
import Button from '../../components/Button'
import ProblemBox from '../../components/ProblemBox'
import SubHeader from '../../components/SubHeader'
import { theme, flexCenter } from '../../styles/theme';
import Graph1Section from "../../components/Graph/Graph1Section";

const Problems = ({ history }) => {
  const [, setCookie, removeCookie] = useCookies(["Authorization"]);
  const [problems, setProblems] = useState(null);
  useEffect(() => {
    // TODO: 연결
    // axios.get('/recommends')
    //   .then(res => {

    //   })

    setProblems([
      {
        id: 1,
        title: 'A+B',
        category: 'DP'
      },
      {
        id: 2,
        title: '피보나치 함수',
        category: 'BFS'
      },
      {
        id: 3,
        title: '유기농 배추',
        category: '문자열'
      },
      {
        id: 4,
        title: '체스판 다시 칠하기',
        category: '구현'
      },
      {
        id: 5,
        title: '유기농 배추',
        category: '문자열'
      },
      {
        id: 6,
        title: '체스판 다시 칠하기',
        category: '구현'
      }
    ])
  }, []);
//   {problems?
//     const problems1 = problems.slice(0,2)  
//  const problems2 = problems.slice(3,5)  :""
//   }
 


 
  return (
    <>
      <SubHeader headText={"맞춤 유형 문제"} />
      <Header isTest />
      {/* <div className="section-name">
                  내 코딩 영역 차트
                </div> */}
        <Wrapper>
          <div className="main-wrapper">
            <ContentWrapper>
              <div className="each-wrapper">
                <div className="section">
                </div>
              </div>
              <div className="each-wrapper">
              <div className="section">
              {problems&&problems.slice(0,3).map((it) => (
                  <ProblemBox 
                    key={it.id}
                    problem_title={it.title} 
                    problem_source={it.category} 
                    id={it.id}
                    />
                  ))}
                 </div>
                 </div>
              <div className="each-wrapper">
              <div className="section">
              {problems&&problems.slice(3,6).map((it) => (
                  <ProblemBox 
                    key={it.id}
                    problem_title={it.title} 
                    problem_source={it.category} 
                    id={it.id}
                    />
                  ))}
                 </div>
             </div>
            </ContentWrapper>
          </div>
        </Wrapper>
      </>

    
  )
}

export default Problems;

const RightWrapper = styled.div`
  display: flex;
  flex-direction:column;
`
const Wrapper = styled.div`
  margin-left: 143px;
  padding: 20px;

`;
const ContentWrapper = styled.div`
  display: grid;
  margin-top:120px;
  padding: 30px;
  width: 100%;
  min-height: 100vh;
  gap: 44px;
  box-sizing: border-box;
  background-color: ${theme.color.black3};
  box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.16);
  border-radius: 40px 40px 0px 0px;
  grid-template-columns: 250px 400px 400px;

  .main-wrapper{
    display: flex;
    margin-top:30px;
    flex-direction : column;
  }

  // .each-wrapper{
  //   background-color:red;
  // }

  .section-name{
    font-family: neoEB;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 0.25px;
    color: #39E25E;
    margin-bottom:10px;
  }

  .section{
    display:flex;
    flex-direction:column;
  }

  
  
`;
