import axios from "axios";
import { useState } from "react";
import { useCookies } from "react-cookie";

function JoinTest() {
  const [, setCookie] = useCookies(["Authorization"]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const handleEmailChange = ({ target: { value } }) => setEmail(value);
  const handlePasswordChange = ({ target: { value } }) => setPassword(value);
  const handleNicknameChange = ({ target: { value } }) => setNickname(value);

  const setUserCookie = (token) => {
    setCookie("Authorization", token, {
      path: "/",
      maxAge: 24 * 60 * 60,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const resp = await axios.post("/auth/join", {
        email,
        password,
        nickname
      })

      console.log(resp.data);
      setUserCookie(resp.data.token) 
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="email"
        value={email}
        onChange={handleEmailChange}
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <input
        name="nickname"
        value={nickname}
        onChange={handleNicknameChange}
      />
      <button type="submit">
        가입
      </button>
    </form>
  );
}

export default JoinTest;