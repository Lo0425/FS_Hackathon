import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Main from "./Dashboard/Main";
import Login from "./form/Login";
import Register from "./form/Register";
import Leave from "./Dashboard/Leave";
import Benefit from "./Dashboard/Benefit";
import Performance from "./Dashboard/Performance";
import Profile from "./form/Profile";
function App() {
    const [auth, setAuth] = useState(false);
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login setAuth={setAuth} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/leave" element={<Leave />} />
            <Route path="/benefit" element={<Benefit />} />
            <Route path="/performance" element={<Performance />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    );
}

export default App;
