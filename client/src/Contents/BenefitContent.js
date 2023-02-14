import { useState, useEffect } from "react";
import { checkAuth } from "../api/users";
import { useNavigate } from "react-router-dom";

const BenefitContent = () => {
  let navigate = useNavigate();
  const { user } = checkAuth();
  const [update, setUpdate] = useState({
    fullname: "",
    bankNo: "",
    bankName: "",
    incomeTax: "",
    socso: "",
    address: "",
    contactNo: 0,
  });
  if (user) {
    console.log(user);
  }
  let onChangeHandler = (e) => {
    setUpdate({ ...update, [e.target.name]: e.target.value });
  };
  let onSubmitHandler = (e) => {
    e.preventDefault();

    fetch(`http://127.0.0.1:8000/users/updateProfile/${user.data._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(update),
    })
      .then((res) => res.json())
      .then(navigate("/"));
  };
  return (
    <>
      {user ? (
        <div>
          <br />
          <br />
          <br />
          <br />

          <div class="max-w-screen-md mx-auto p-5">
            <form
              class="w-full"
              name={user._id}
              onSubmit={onSubmitHandler}
              method="PUT"
            >
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    Fullname
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    name="fullname"
                    onChange={onChangeHandler}
                    type="text"
                    placeholder="Fullname"
                  />
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-last-name"
                  >
                    Contact No
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    onChange={onChangeHandler}
                    name="contactNo"
                    type="number"
                    placeholder="ContactNo"
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    Bank No
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="number"
                    name="bankNo"
                    onChange={onChangeHandler}
                    placeholder="Bank No"
                  />
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-last-name"
                  >
                    Bank Name
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    name="bankName"
                    onChange={onChangeHandler}
                    type="text"
                    placeholder="Bank Name"
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    Income Tax
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    onChange={onChangeHandler}
                    type="text"
                    name="incomeTax"
                    placeholder="Income Tax"
                  />
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-last-name"
                  >
                    Socso
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    name="socso"
                    onChange={onChangeHandler}
                    placeholder="Socso"
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-password"
                  >
                    Address
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-email"
                    onChange={onChangeHandler}
                    type="text"
                    name="address"
                    placeholder=""
                  />
                </div>
              </div>

              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="flex justify-between w-full px-3">
                  <button
                    class="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                    type="submit"
                  >
                    Update Profile
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default BenefitContent;
