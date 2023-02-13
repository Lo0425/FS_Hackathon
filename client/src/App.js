import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Main from "./Dashboard/Main";
import Login from "./form/Login";
import Navbar from "./form/partials/Navbar";
import Register from "./form/Register";
import Profile from "./form/Profile";
function App() {
    const [auth, setAuth] = useState(false);
    const navigate = useNavigate();

<<<<<<< HEAD
    const logoutHandler = () => {
        setAuth(false);
        localStorage.removeItem("token");
        navigate("/");
    };
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login setAuth={setAuth} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    );
=======
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
>>>>>>> 2cf1230ebb76550fd804c7e2e75983dfac74915e
}

export default App;
