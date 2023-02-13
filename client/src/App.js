import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./form/Login";
import Navbar from "./form/partials/Navbar";
import Register from "./form/Register";
import Profile from "./form/Profile";
function App() {
  const [auth, setAuth] = useState(false);
  const navigate = useNavigate();

  const logoutHandler = () => {
    setAuth(false);
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login setAuth={setAuth} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
