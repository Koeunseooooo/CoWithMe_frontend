import { useCookies } from "react-cookie"

const Home = () => {
  const [, setCookie, removeCookie] = useCookies(["Authorization"]);

  const loginTest = () => {
    setCookie("Authorization", "abcd", {
      path: "/",
      maxAge: 24 * 60 * 60,
    })
  }

  const logoutTest = () => {
    removeCookie("Authorization");
  }

  return (
    <>
      <button onClick={loginTest}>Login</button>
      <button onClick={logoutTest}>LogOut</button>
    </>
  )
}

export default Home;