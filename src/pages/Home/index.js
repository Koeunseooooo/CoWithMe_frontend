import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie"
import styled from "styled-components";
import ProblemCard from "../../components/ProblemCard";
import Header from '../../components/Header'
import SubHeader from '../../components/SubHeader'
import { theme, flexCenter } from '../../styles/theme';

const Home = ({ history }) => {
  const [, setCookie, removeCookie] = useCookies(["Authorization"]);

  const [email, setEmail] = useState("");
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
      }
    ])
  }, []);

  const join = async () => {
    // const resp = await axios.post('/auth/join', {})

    setCookie("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiZW1haWwiOiJoQGguY29tIiwiaWF0IjoxNjU1ODg0NTg1LCJleHAiOjE2NTU5NzA5ODV9.vgHvGEy400xVeMemCdLg9PESL75KJY6_fyMzfOsy46A", {
      path: "/",
      maxAge: 24 * 60 * 60,
    })
    window.location.href = "/";
  }

  const login = async () => {
    // const resp = await axios.post('/auth/join', {})

    setCookie("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiZW1haWwiOiJoQGguY29tIiwiaWF0IjoxNjU1ODg0NTg1LCJleHAiOjE2NTU5NzA5ODV9.vgHvGEy400xVeMemCdLg9PESL75KJY6_fyMzfOsy46A", {
      path: "/",
      maxAge: 24 * 60 * 60,
    })
    window.location.href = "/";
  }

  const logout = () => {
    removeCookie("Authorization");
    window.location.href = "/";
  }

  const loadUser = () => {
    axios.get('/users/me')
      .then(res => {
        console.log(res.data);
        setEmail(res.data?.email)
      })
  }

  return (
    <>
      <SubHeader headText={"마이 코딩"} />
      <Header isMainHome />
        <Wrapper>
          <div className="main-wrapper">
            <ContentWrapper>
              <div className="each-wrapper"></div>
              <div className="each-wrapper"></div>
              <div className="each-wrapper"></div>
            </ContentWrapper>
          </div>
        </Wrapper>
      </>

    
  )
}

export default Home;

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
  grid-template-columns: 400px 400px 300px;

  .main-wrapper{
    display: flex;
    margin-top:30px;
    flex-direction : column;
  }

  .each-wrapper{
    background-color:red;
  }
`;

  {/* <div>
        <h3>{email}</h3>
        <button onClick={join}>Join</button>
        <button onClick={login}>Login</button>
        <button onClick={logout}>LogOut</button>
        <button onClick={loadUser}>Load</button>
      </div>
      <div>
        {problems?.map(problem => <ProblemCard key={problem.id} problem={problem} />)}
      </div> */}