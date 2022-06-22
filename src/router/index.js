import { Suspense } from "react"
import { Navigate, Route, Routes } from "react-router-dom"

import Home from "../pages/Home"
import MyPage from "../pages/MyPage";
import Solve from "../pages/Solve";
import Chart from "../pages/Chart";
import Landing from "../pages/Landing";

import Header from "../components/Header"

const Router = () => {
  return (

    <Suspense>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/me" element={<MyPage />} />
        <Route exact path="/solve/:id" element={<Solve />} />
        <Route exact path="/chart" element={<Chart />} />
        <Route exact path="/landing" element={<Landing />} />

        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </Suspense>
  )
};

export default Router;