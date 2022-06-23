import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie"

const Test = () => {
  const [, setCookie, removeCookie] = useCookies(["Authorization"]);
  const [email, setEmail] = useState("");

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
    <div>
      <h3>{email}</h3>
      <button onClick={join}>Join</button>
      <button onClick={login}>Login</button>
      <button onClick={logout}>LogOut</button>
      <button onClick={loadUser}>Load</button>
    </div>
  )
}

export default Test