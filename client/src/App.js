import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./form/Login";
import Register from "./form/Register";

function App() {
  const [auth, setAuth] = useState(false);
  const navigate = useNavigate();

  const logoutHandler = () => {
    setAuth(false);
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <Routes>
      <Route path="/login" element={<Login setAuth={setAuth} />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
