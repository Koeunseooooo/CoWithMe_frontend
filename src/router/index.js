import { Suspense } from "react"
import { Navigate, Route, Routes } from "react-router-dom"

import Home from "../pages/Home"
import MyPage from "../pages/MyPage";

const Router = () => {
  return (
    <Suspense>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/me" element={<MyPage />} />

        <Route path="*" element={<Navigate replace to="/" />} /> 
      </Routes>
    </Suspense>
  )
};

export default Router;