import { Suspense } from "react"
import { Navigate, Route, Routes } from "react-router-dom"

import Home from "../pages/Home"
import MyPage from "../pages/MyPage";
import Solve from "../pages/Solve";
import Chart from "../pages/Chart";
import Landing from "../pages/Landing";
import Baekjoon from "../pages/Landing/Baekjoon";
import Login from "../pages/Landing/Login";
import Signup from "../pages/Landing/Signup";

import Header from "../components/Header"
import Onborad from "../pages/Onboard";
import Test from "../pages/Test";

const Router = () => {
  return (

    <Suspense>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/me" element={<MyPage />} />
        <Route exact path="/solve/:id" element={<Solve />} />
        <Route exact path="/chart" element={<Chart />} />

        <Route path="/landing" element={<Landing />} >
          <Route path="baekjoon" element={<Baekjoon />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
        <Route path="*" element={<Navigate replace to="/" />} />
        <Route exact path="/onboard" element={<Onborad />} />

        {/* 테스트 후 제거 필요 */}
        <Route exact path="/test" element={<Test />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </Suspense>
  )
};

export default Router;