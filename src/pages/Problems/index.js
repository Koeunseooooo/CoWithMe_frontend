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
    // 처음엔 랜덤 

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

function selectCategory() {
    // axios.get('/recommends')
    //   .then(res => {

    //   })
    // problems/category/:id
    // 클릭한 id(카테고리유형)에 맞게 문제 제공
    console.log("업데이트")

    setProblems([
      {
        id: 1,
        title: '업데이트',
        category: 'DP'
      },
      {
        id: 2,
        title: '업데이트',
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
  }
 
  return (
    <>
      <SubHeader headText={"맞춤 유형 문제"} />
      <Header isTest />
        <Wrapper>
        <span className="description">Problem and solve</span>
        <span className="subheading"> | Basic Test</span>
          <div className="main-wrapper">
            <ContentWrapper>
              <div className="each-wrapper-left">
                <div className="section">
                  <div className="searchbar">
                    <img className="sub_icon" src={require('../../assets/Sub Icon/Serch.svg').default} alt="" />
                    <div className="search_content"> | 이름 검색 </div>
                  </div>
                  <hr className="line" />

                  
                  <div className="check-block">
                    <input type="radio" id="1" name="category" onClick={selectCategory} />
                    <label for="1"></label>
                    <div className="content" >DFS/BFS</div>
                  </div>

                  <div className="check-block">
                    <input type="radio" id="2" name="category" onClick={selectCategory}/>
                    <label for="2"></label>
                    <div className="content">그리디/탐색</div>
                  </div>

                  <div className="check-block">
                    <input type="radio" id="3" name="category" onClick={selectCategory} />
                    <label for="3"></label>
                    <div className="content" >DP</div>
                  </div>

                  <div className="check-block">
                    <input type="radio" id="4"  name="category" onClick={selectCategory}/>
                    <label for="4"></label>
                    <div className="content" >문자열</div>
                  </div>

                  <div className="check-block">
                    <input type="radio" id="5"  name="category" onClick={selectCategory}/>
                    <label for="5"></label>
                    <div className="content" >구현</div>
                  </div>

                  <div className="check-block">
                    <input type="radio" id="6"  name="category" onClick={selectCategory}/>
                    <label for="check6"></label>
                    <div className="content" >기타</div>
                  </div>


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
  .description{
    margin-left:38px;
    color: ${theme.color.green};
    font-weight: 600;
    font-size: 20px;
    line-height: 33px;
    letter-spacing: 0.25px;
  }

  .subheading{
    color: #ADADAC;
    font-weight: 400;
    font-size: 18px;
    line-height: 20px;
    letter-spacing: 0.25px;
    
  }
    

`;
const ContentWrapper = styled.div`
  display: grid;
  margin-top:6px;
  padding: 30px;
  width: 100%;
  min-height: 100vh;
  gap: 44px;
  box-sizing: border-box;
  background-color: ${theme.color.black3};
  box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.16);
  border-radius: 40px 40px 0px 0px;
  grid-template-columns: 300px 400px 400px;

  .main-wrapper{
    display: flex;
    margin-top:30px;
    flex-direction : column;
  }

  // .each-wrapper{
  //   background-color:red;
  // }

  .each-wrapper-left{
    // background-color:red;
    border-right-style: solid;
    border-right-width: 1px;
  }

  .sub_icon{
    margin-left:5px;
  }
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

  .searchbar{
    margin-top:20px;
    color:#CBCBCA;
    display:flex;
  }

  .search_content{
    margin-left:15px;
    font-family: 'AppleSDGothicNeoB00';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */
    letter-spacing: 0.25px;
    color: #FFFFFF;
    // margin-left:30px;
  }

}

.line{
  margin-top:13px;
  width:270px;
  margin-right:25px;
  color:#CBCBCA;
  margin-bottom:25px;
}

input[type="radio"]{
  display: none;
}
input[type="radio"] + label{
  display: inline-block;
  width: 15px;
  height: 15px;
  border: 1px solid #D9D9D9;
  border-radius: 3px;
  position: relative;
}

input[id="1"]:checked + label::after{
  content:'';
  background:#2DDE54;
  font-size: 15px;
  width: 15px;
  height: 15px;
  text-align: center;
  position: absolute;
  left: 0;
  top:0;
}

input[id="2"]:checked + label::after{
  content:'';
  background:#2DDE54;
  font-size: 15px;
  width: 15px;
  height: 15px;
  text-align: center;
  position: absolute;
  left: 0;
  top:0;
}

input[id="3"]:checked + label::after{
  content:'';
  background:#2DDE54;
  font-size: 15px;
  width: 15px;
  height: 15px;
  text-align: center;
  position: absolute;
  left: 0;
  top:0;
}

input[id="4"]:checked + label::after{
  content:'';
  background:#2DDE54;
  font-size: 15px;
  width: 15px;
  height: 15px;
  text-align: center;
  position: absolute;
  left: 0;
  top:0;
}

input[id="5"]:checked + label::after{
  content:'';
  background:#2DDE54;
  font-size: 15px;
  width: 15px;
  height: 15px;
  text-align: center;
  position: absolute;
  left: 0;
  top:0;
}

input[id="6"]:checked + label::after{
  content:'';
  background:#2DDE54;
  font-size: 15px;
  width: 15px;
  height: 15px;
  text-align: center;
  position: absolute;
  left: 0;
  top:0;
}


.content{
  margin-left:15px;
    font-family: 'AppleSDGothicNeoB00';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 20px;
    /* identical to box height */
    letter-spacing: 0.25px;
    color: #FFFFFF;
    // margin-left:30px;
}
  

.check-block{
  display:flex;
  margin-top:25px;
  margin-bottom:25px;
}
`;
