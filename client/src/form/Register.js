import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import logo from "../public/simplr_logo.png";
import { v4 as uuid } from "uuid";
import moment from "moment";

function Register() {
  const [data, setData] = useState();

  let now = moment().unix();

  // days between 2 timestamp
  console.log((moment().unix() - 1676167142) / 86400);
  // let dateBetween = moment().unix() - 1676166386;

  // console.log(dateBetween / (1000 * 3600 * 24));

  // console.log(moment().startOf("day"));
  useEffect(() => {
    const dataFetch = async () => {
      let data = await (
        await fetch("http://localhost:8000/users/leader")
      ).json();
      setData(data);
    };
    dataFetch();
  }, []);

  const unique_id = uuid();

  let navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
    password2: "",
    leader: false,
    admin: false,
    employee: false,
    leaderId: "",
    onboardingDate: now,
    daysofservice: 0,
  });

  const [viewPass, setViewPass] = useState(true);
  const [viewPass2, setViewPass2] = useState("password");

  let onChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSelectLeaderHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSelectHandler = (e) => {
    if (e.target.value == "employee") {
      setUser((user.leader = false));
    } else if (e.target.value == "leader") {
      setUser((user.employee = false));
      setUser((user.leaderId = null));
    }
    setUser({ ...user, [e.target.value]: true });
  };

  const roleOption = [
    {
      label: "Leader",
      value: "leader",
    },
    {
      label: "Employee",
      value: "employee",
    },
  ];

  let onSubmitHandler = (e) => {
    e.preventDefault();
    if (user.username.length < 8) {
      console.log("<8 username");
      toast.error("username should be more than 8", {
        position: "top-center",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
      });
    } else if (user.password.length < 8) {
      console.log("less < 8");

      toast.error("password should be more then 8", {
        position: "top-center",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
      });
    } else if (user.password !== user.password2) {
      console.log("pass !=");
      toast.error("password should be match", {
        position: "top-center",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
      });
    } else if (
      user.admin == false &&
      user.employee == false &&
      user.leader == false
    ) {
      toast.error("Please select your role", {
        position: "top-center",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
      });
    } else if (user.employee == true && user.leaderId == null) {
      toast.error("Please assign a leader", {
        position: "top-center",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
      });
    } else {
      setUser({ ...user, id: { unique_id } });
      fetch(`http://127.0.0.1:8000/users/register`, {
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
          if (!data.code) {
            localStorage.setItem("users", JSON.stringify(user));
            navigate("/login");
          }
          e.preventDefault();
        });
    }
  };

  return (
    <div className="relative mt-5 pt-2">
      <form
        onSubmit={onSubmitHandler}
        method="POST"
        className="xl:w-3/12 lg:w-4/12 md:w-6/12 sm:w-10/12 w-11/12 mx-auto m-10 p-10 border border-light rounded-2xl shadow-lg shadow-blue-500/50"
      >
        <div className=" absolute top-14 left-0 w-screen mx-auto mt-10">
          <img src={logo} style={{ height: "30px" }} className="mx-auto z-10" />
        </div>

        <div className="form-control my-3 mt-20">
          <label>Username</label>
          <input
            type="text"
            name="username"
            className="bg-white w-full border border-slate-300 rounded-md py-2 pl-5 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            onChange={onChangeHandler}
            required
          />
        </div>

        <div className="form-control my-3">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="bg-white w-full border border-slate-300 rounded-md py-2 pl-5 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            onChange={onChangeHandler}
            required
          />
        </div>

        <div className="form-control my-3">
          <label>Password</label>

          <div className="flex relative">
            <input
              type={viewPass ? "password" : "text"}
              name="password"
              className="sm:text-sm bg-white w-full border border-slate-300 rounded-md py-2 pl-5 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 "
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

        <div className="form-control my-3">
          <label>Confirm Password</label>
          <div className="relative">
            <input
              type={viewPass2 ? "password" : "text"}
              name="password2"
              className="bg-white w-full border border-slate-300 rounded-md py-2 pl-5 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              onChange={onChangeHandler}
              required
            />
            <button
              className="absolute mr-3 right-0 top-0 bottom-0"
              type="button"
              onClick={() => setViewPass2(!viewPass2)}
            >
              <FontAwesomeIcon icon={viewPass2 ? faEyeSlash : faEye} />
            </button>
          </div>
        </div>

        <div className="sm:flex justify-between form-control my-3 pb-7 block">
          <select
            name="role"
            className="
            px-5
          py-2.5
          bg-white-500
          font-bold
          text-black
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-white-500 hover:shadow-lg
          focus:bg-white-500 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-white-700 active:shadow-lg active:text-black
          transition
          duration-150
          ease-in-out
          flex
          items-center
          whitespace-nowrap"
            onChange={onSelectHandler}
            defaultValue={"DEFAULT"}
          >
            <option value="DEFAULT" disabled hidden>
              Select a role
            </option>
            {roleOption.map((option, i) => (
              <option key={i} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          {user.employee ? (
            <>
              <select
                name="leaderId"
                className="
          px-5
        py-2.5
        bg-white-500
        font-bold
        text-black
        font-medium
        text-xs
        leading-tight
        uppercase
        rounded
        shadow-md
        hover:bg-white-500 hover:shadow-lg
        focus:bg-white-500 focus:shadow-lg focus:outline-none focus:ring-0
        active:bg-white-700 active:shadow-lg active:text-black
        transition
        duration-150
        ease-in-out
        flex
        items-center
        whitespace-nowrap"
                onChange={onSelectLeaderHandler}
                defaultValue={"DEFAULT"}
              >
                {" "}
                <option value="DEFAULT" disabled hidden>
                  Select leader
                </option>
                {data?.map((user, index) => (
                  <option key={index} value={user._id}>
                    {user.username}
                  </option>
                ))}
              </select>
            </>
          ) : null}
        </div>

        <div className="flex justify-center pb-2 pt-1">
          <button className="inline-block px-20 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
            Register
          </button>
        </div>

        <div className="text-center py-5">
          <a
            href="/login"
            className="text-blue-400 text-right hover:text-violet-600 "
          >
            I have an account
          </a>
        </div>
      </form>
    </div>
  );
}

export default Register;
