import { Suspense } from "react"
import { Navigate, Route, Routes } from "react-router-dom"

import Home from "../pages/Home"
import MyPage from "../pages/MyPage";
import Solve from "../pages/Solve";
import Chart from "../pages/Chart";
import Landing from "../pages/Landing";
import Baekjoon from "../pages/Landing/Baekjoon";
import LoginOrSignup from "../pages/Landing/LoginOrSignup";


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
          <Route path="login" element={<LoginOrSignup />} />
          <Route path="signup" element={<LoginOrSignup />} />
        </Route>
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </Suspense>
  )
};

export default Router;