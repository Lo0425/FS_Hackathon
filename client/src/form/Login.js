import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import logo from "../public/simplr_logo.png";

function Login({ setAuth }) {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [viewPass, setViewPass] = useState(true);

  const onChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    setIsLoading(true);
    e.preventDefault();
    fetch(`http://127.0.0.1:8000/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        let type = data.status == 400 ? toast.error : toast.success;
        type(data.msg, {
          position: "top-center",
          autoClose: 3500,
          hideProgressBar: false,
          closeOnClick: true,
        });
        setIsLoading(false);
        if (data.status != 400) {
          localStorage.setItem("token", data.token);
          setAuth(true);
          navigate("/");
          setIsLoading(false);
        }
      });
  };

  return (
    <>
      {isLoading ? (
        <>
          <div className="loader book">
            <figure className="page"></figure>
            <figure className="page"></figure>
            <figure className="page"></figure>
          </div>
          <h1 className="text-slate-700 text-center" id="loader-text">
            Loading ...
          </h1>
        </>
      ) : (
        <div className="relative mt-24 pt-5 ">
          <form
            className="lg:w-3/12 md:w-6/12 sm:w-10/12 w-11/12 mx-auto m-10 p-10 border border-light rounded-2xl shadow-lg shadow-blue-500/50"
            onSubmit={onSubmitHandler}
            method="POST"
          >
            <div className="absolute top-20 left-0 w-screen mx-auto mt-2">
              <img
                src={logo}
                style={{ height: "30px" }}
                className="mx-auto z-10"
              />
            </div>
            <div className="form-control my-3 pt-5 mt-5">
              <label>Email</label>
              <input
                type="email"
                name="email"
                className="bg-white w-full border border-slate-300 rounded-md py-2 pl-5 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                onChange={onChangeHandler}
                required
                id="email"
              />
            </div>
            <div className="form-control my-3">
              <label>Password</label>
              <div className="relative">
                <input
                  type={viewPass ? "password" : "text"}
                  name="password"
                  className="bg-white w-full border border-slate-300 rounded-md py-2 pl-5 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                  onChange={onChangeHandler}
                  required
                />
                <button
                  className="absolute mr-3 right-0 top-0 bottom-0"
                  type="button"
                  onClick={() => setViewPass(!viewPass)}
                >
                  <FontAwesomeIcon icon={viewPass ? faEyeSlash : faEye} />
                </button>
              </div>
            </div>
            <div className="flex justify-center py-5">
              <button className="px-20 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                Login
              </button>
            </div>
            <div className="text-center py-5">
              <a
                href="/register"
                className="text-blue-400 hover:text-violet-600 "
              >
                Register an account
              </a>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default Login;
