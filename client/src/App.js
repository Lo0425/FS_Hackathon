import React, { useState } from "react";
import { Navigate, Routes, Route, useNavigate } from "react-router-dom";
import Main from "./Dashboard/Main";
import Login from "./form/Login";
import Register from "./form/Register";
import Leave from "./Dashboard/Leave";
import Benefit from "./Dashboard/Benefit";
import Performance from "./Dashboard/Performance";
import Profile from "./form/Profile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    const [auth, setAuth] = useState(false);

    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <Routes>
                {auth ? (
                    <>
                        <Route path="/" element={<Main />} />
                        <Route path="/leave" element={<Leave />} />
                        <Route path="/benefit" element={<Benefit />} />
                        <Route path="/performance" element={<Performance />} />
                    </>
                ) : (
                    <Route path="/" element={<Navigate to="/login" />} />
                )}
                <Route path="/login" element={<Login setAuth={setAuth} />} />
                <Route path="/register" element={<Register />} />
                {/* <Route path="/profile" element={<Profile />} /> */}
            </Routes>
        </>
    );
}

export default App;
