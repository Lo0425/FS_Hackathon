import { useState, useEffect } from "react";
import { checkAuth } from "../api/users";
import { toast } from "react-toastify";
import PersonalPerformanceChart from "../Charts/PersonalPerformanceChart";
import { Navigate, useNavigate } from "react-router-dom";

const PerformanceContent = () => {
  const { user } = checkAuth();
  const userId = user.data._id;
  const [data, setData] = useState();
  const [performance, setPerformance] = useState({
    employeeId: "",
    employeeName: "",
    leaderId: "",
    qualityOfWork: 1,
    initiative: 1,
    productivity: 1,
    customerFocus: 1,
    performanceRating: 0,
  });

  const dataFetch = async () => {
    let data = await (
      await fetch("http://localhost:8000/users/employee/" + userId)
    ).json();
    setData(data);
  };

  // console.log(data);

  useEffect(() => {
    dataFetch();
  }, []);

  const navigate = useNavigate();

  const onSelectEmployeeHandler = (e) => {
    setPerformance({ ...performance, [e.target.name]: e.target.value });
  };

  const onQOWRated = (e) => {
    setPerformance({ ...performance, [e.target.name]: e.target.value });
  };

  const initiativeRated = (e) => {
    setPerformance({ ...performance, [e.target.name]: e.target.value });
  };

  const productivityRated = (e) => {
    setPerformance({ ...performance, [e.target.name]: e.target.value });
  };

  const customerFocusRated = (e) => {
    setPerformance({ ...performance, [e.target.name]: e.target.value });
  };

  // data = data.filter

  let onSubmitHandler = (e) => {
    e.preventDefault();

    if (performance.employeeName.length < 1) {
      toast.error("Please select a employee", {
        position: "top-center",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
      });
    } else {
      let percentage =
        ((parseInt(performance.productivity) +
          parseInt(performance.customerFocus) +
          parseInt(performance.initiative) +
          parseInt(performance.qualityOfWork)) /
          40) *
        100;

      performance.performanceRating = percentage;
      performance.leaderId = user.data._id;
      performance.performanceReport = true;
      e.preventDefault();
      fetch("http://127.0.0.1:8000/performance/submitperformance", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(performance),
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
        });
    }
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  return (
    <>
      {user.data.leader ? (
        <>
          <h1 className="pt-20 text-4xl font-semibold text-center">
            Performance Review
          </h1>

          <div className="w-full px-10 py-10 bg-white shadow mt-12 border border-light rounded-2xl shadow-lg shadow-blue-500/50">
            <form onSubmit={onSubmitHandler} method="POST">
              <div className="flex justify-center">
                <select
                  name="employeeName"
                  className="
                mb-5
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
                  onChange={onSelectEmployeeHandler}
                  defaultValue={"DEFAULT"}
                >
                  {" "}
                  <option value="DEFAULT" disabled hidden>
                    Select a employee
                  </option>
                  {data
                    ?.filter((user) => !user.performanceReport)
                    .map((user, index) => (
                      <option key={index} value={user.username}>
                        {user.username}
                      </option>
                    ))}
                </select>
              </div>

              <div>
                <h4>Quality Of Work</h4>

                <div className="flex justify-between pt-3">
                  <label className="mr-5">1</label>
                  <input
                    defaultChecked="true"
                    className="mr-4"
                    type="radio"
                    value="1"
                    name="qualityOfWork"
                    onChange={onQOWRated}
                  />
                  <input
                    className="mx-4"
                    type="radio"
                    value="2"
                    name="qualityOfWork"
                    onChange={onQOWRated}
                  />
                  <input
                    className="mx-4"
                    type="radio"
                    value="3"
                    name="qualityOfWork"
                    onChange={onQOWRated}
                  />
                  <input
                    className="mx-4"
                    type="radio"
                    value="4"
                    name="qualityOfWork"
                    onChange={onQOWRated}
                  />
                  <input
                    className="mx-4"
                    type="radio"
                    value="5"
                    name="qualityOfWork"
                    onChange={onQOWRated}
                  />
                  <input
                    className="mx-4"
                    type="radio"
                    value="6"
                    name="qualityOfWork"
                    onChange={onQOWRated}
                  />
                  <input
                    className="mx-4"
                    type="radio"
                    value="7"
                    name="qualityOfWork"
                    onChange={onQOWRated}
                  />
                  <input
                    className="mx-4"
                    type="radio"
                    value="8"
                    name="qualityOfWork"
                    onChange={onQOWRated}
                  />
                  <input
                    className="mx-4"
                    type="radio"
                    value="9"
                    name="qualityOfWork"
                    onChange={onQOWRated}
                  />
                  <input
                    className="mx-4"
                    type="radio"
                    value="10"
                    name="qualityOfWork"
                    onChange={onQOWRated}
                  />
                  <label className="ml-5">10</label>
                </div>
              </div>

              <div>
                <h4>Initiative</h4>

                <div className="flex justify-between pt-3">
                  <label className="mr-5">1</label>
                  <input
                    defaultChecked="true"
                    className="mr-4"
                    type="radio"
                    value="1"
                    name="initiative"
                    onChange={initiativeRated}
                  />
                  <input
                    className="mx-4"
                    type="radio"
                    value="2"
                    name="initiative"
                    onChange={initiativeRated}
                  />
                  <input
                    className="mx-4"
                    type="radio"
                    value="3"
                    name="initiative"
                    onChange={initiativeRated}
                  />
                  <input
                    className="mx-4"
                    type="radio"
                    value="4"
                    name="initiative"
                    onChange={initiativeRated}
                  />
                  <input
                    className="mx-4"
                    type="radio"
                    value="5"
                    name="initiative"
                    onChange={initiativeRated}
                  />
                  <input
                    className="mx-4"
                    type="radio"
                    value="6"
                    name="initiative"
                    onChange={initiativeRated}
                  />
                  <input
                    className="mx-4"
                    type="radio"
                    value="7"
                    name="initiative"
                    onChange={initiativeRated}
                  />
                  <input
                    className="mx-4"
                    type="radio"
                    value="8"
                    name="initiative"
                    onChange={initiativeRated}
                  />
                  <input
                    className="mx-4"
                    type="radio"
                    value="9"
                    name="initiative"
                    onChange={initiativeRated}
                  />
                  <input
                    className="mx-4"
                    type="radio"
                    value="10"
                    name="initiative"
                    onChange={initiativeRated}
                  />
                  <label className="ml-5">10</label>
                </div>
              </div>

              <div>
                <h4>Productivity</h4>

                <div className="flex justify-between pt-3">
                  <label className="mr-5">1</label>
                  <input
                    defaultChecked="true"
                    className="mr-4"
                    type="radio"
                    value="1"
                    onChange={productivityRated}
                    name="productivity"
                  />
                  <input
                    className="mx-4"
                    type="radio"
                    value="2"
                    name="productivity"
                    onChange={productivityRated}
                  />
                  <input
                    className="mx-4"
                    type="radio"
                    value="3"
                    name="productivity"
                    onChange={productivityRated}
                  />
                  <input
                    className="mx-4"
                    type="radio"
                    value="4"
                    name="productivity"
                    onChange={productivityRated}
                  />
                  <input
                    className="mx-4"
                    type="radio"
                    value="5"
                    name="productivity"
                    onChange={productivityRated}
                  />
                  <input
                    className="mx-4"
                    type="radio"
                    value="6"
                    name="productivity"
                    onChange={productivityRated}
                  />
                  <input
                    className="mx-4"
                    type="radio"
                    value="7"
                    name="productivity"
                    onChange={productivityRated}
                  />
                  <input
                    className="mx-4"
                    type="radio"
                    value="8"
                    name="productivity"
                    onChange={productivityRated}
                  />
                  <input
                    className="mx-4"
                    type="radio"
                    value="9"
                    name="productivity"
                    onChange={productivityRated}
                  />
                  <input
                    className="mx-4"
                    type="radio"
                    value="10"
                    name="productivity"
                    onChange={productivityRated}
                  />
                  <label className="ml-5">10</label>
                </div>
              </div>

              <div>
                <h4>Customer Focus</h4>

                <div className="flex justify-between pt-3">
                  <label className="mr-5">1</label>
                  <input
                    defaultChecked="true"
                    className="mr-4"
                    type="radio"
                    value="1"
                    name="customerFocus"
                    onChange={customerFocusRated}
                  />
                  <input
                    className="mx-4"
                    type="radio"
                    value="2"
                    name="customerFocus"
                    onChange={customerFocusRated}
                  />
                  <input
                    className="mx-4"
                    type="radio"
                    value="3"
                    name="customerFocus"
                    onChange={customerFocusRated}
                  />
                  <input
                    className="mx-4"
                    type="radio"
                    value="4"
                    name="customerFocus"
                    onChange={customerFocusRated}
                  />
                  <input
                    className="mx-4"
                    type="radio"
                    value="5"
                    name="customerFocus"
                    onChange={customerFocusRated}
                  />
                  <input
                    className="mx-4"
                    type="radio"
                    value="6"
                    name="customerFocus"
                    onChange={customerFocusRated}
                  />
                  <input
                    className="mx-4"
                    type="radio"
                    value="7"
                    name="customerFocus"
                    onChange={customerFocusRated}
                  />
                  <input
                    className="mx-4"
                    type="radio"
                    value="8"
                    name="customerFocus"
                    onChange={customerFocusRated}
                  />
                  <input
                    className="mx-4"
                    type="radio"
                    value="9"
                    name="customerFocus"
                    onChange={customerFocusRated}
                  />
                  <input
                    className="mx-4"
                    type="radio"
                    value="10"
                    name="customerFocus"
                    onChange={customerFocusRated}
                  />
                  <label className="ml-5">10</label>
                </div>
              </div>

              <div className="pt-10 w-full text-right">
                <button className="inline-block px-10 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </>
      ) : null}
    </>
  );
};

export default PerformanceContent;
