import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie"
import ProblemCard from "../../components/ProblemCard";

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
      <div>
        <h3>{email}</h3>
        <button onClick={join}>Join</button>
        <button onClick={login}>Login</button>
        <button onClick={logout}>LogOut</button>
        <button onClick={loadUser}>Load</button>
      </div>
      <div>
        {problems?.map(problem => <ProblemCard key={problem.id} problem={problem} />)}
      </div>
    </>
  )
}

export default Home;