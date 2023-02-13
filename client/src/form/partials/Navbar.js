import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  let navigate = useNavigate();
  return (
    <nav>
      <Link to="/">Home</Link>
      {localStorage.getItem("token") ? (
        <>
          <Link to="/profile">Profile</Link>
          <Link to="/request">Request</Link>
          <button>Logout</button>
        </>
      ) : (
        <>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </nav>
  );
};
export default Navbar;
