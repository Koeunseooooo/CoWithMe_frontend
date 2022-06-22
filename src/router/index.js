import axios from "axios";
import { Suspense, useEffect } from "react"
import { Navigate, Route, Routes } from "react-router-dom"

import Home from "../pages/Home"
import JoinTest from "../pages/JoinTest";
import MyPage from "../pages/MyPage";

const Router = () => {

  // TODO: user 정보 호출
  useEffect(() => {
    axios.get('/users/me')
      .then(res => {
        console.log(res.data);
      })
  }, [])

  return (
    <Suspense>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/me" element={<MyPage />} />
        <Route exact path="/join" element={<JoinTest />} />

        <Route path="*" element={<Navigate replace to="/" />} /> 
      </Routes>
    </Suspense>
  )
};

export default Router;