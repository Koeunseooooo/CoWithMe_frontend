import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/me">마이페이지</Link>
    </>
  )
}

export default Header;