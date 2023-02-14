import React, { useState, useEffect } from "react";

function Profile() {
  const [request, setRequest] = useState({
    email: "",
    username: "",
    reason: "",
    leaveType: "",
    startDate: "",
    totalLeaveTaken: 0,
    status: "pending",
  });
  let onChangeHandler = (e) => {
    setRequest({ ...request, [e.target.name]: e.target.value });
  };

  const onSelectHandler = (e) => {
    setRequest({ ...request, [e.target.value]: true });
  };
  return (
    <>
      <div class="container mx-auto px-4 sm:px-8">
        <div class="py-8">
          <div>
            <h2 class="text-2xl font-semibold leading-tight">Employee Leave</h2>
          </div>
          <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div class="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
              <table class="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Leave Type
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Total Entitlement
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Pending Approval
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Available Balance
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div class="flex">
                        <div class="ml-3">
                          <p class="text-gray-900 whitespace-no-wrap">
                            Annual Leave
                          </p>
                          <p class="text-gray-600 whitespace-no-wrap">
                            Code: 1SIM-ANL
                          </p>
                        </div>
                      </div>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">1</p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">1</p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span
                          aria-hidden
                          class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                        ></span>
                        <span class="relative">10</span>
                      </span>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right dropdown">
                      <button
                        type="button"
                        class="inline-block text-gray-500 hover:text-gray-700 "
                      >
                        <svg
                          class="inline-block h-6 w-6 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
                        </svg>
                      </button>
                      <ul class="dropdown-menu hidden absolute text-gray-700 pt-1">
                        <li class="">
                          <a
                            class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                            href="#"
                          >
                            Check Request
                          </a>
                        </li>
                        <li class="">
                          <a
                            type="button"
                            class=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap cursor-pointer"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModalCenter"
                            onClick={setRequest(
                              (request.leaveType = "annualLeave")
                            )}
                          >
                            Request Leave
                          </a>
                        </li>
                      </ul>
                      <div
                        class="modal fade fixed top-0 left-0 hidden outline-none overflow-x-hidden overflow-y-auto"
                        id="exampleModalCenter"
                        tabindex="-1"
                        aria-labelledby="exampleModalCenterTitle"
                        aria-modal="true"
                        role="dialog"
                      >
                        <div class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
                          <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                            <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                              <h5
                                class="text-xl font-medium leading-normal text-gray-800"
                                id="exampleModalScrollableLabel"
                              >
                                Annual Leave Request
                              </h5>
                            </div>
                            <form method="POST">
                              <div class="modal-body relative text-left p-2">
                                <p>Reason</p>
                                <input
                                  type="text"
                                  name="reason"
                                  class="border-solid border-2 rounded border-slate-500 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500"
                                  required
                                />
                                <p>Email</p>
                                <input
                                  type="email"
                                  name="email"
                                  class="border-solid border-2 rounded border-slate-500 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500"
                                  required
                                />
                                <p>StartDate</p>
                                <input
                                  type="text"
                                  name="startDate"
                                  class="border-solid border-2 rounded border-slate-500 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500"
                                  required
                                />
                              </div>
                              <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                                <button
                                  type="button"
                                  class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                                  data-bs-dismiss="modal"
                                >
                                  Cancel
                                </button>
                                <button
                                  type="button"
                                  class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                                >
                                  Send Request
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div class="flex">
                        <div class="ml-3">
                          <p class="text-gray-900 whitespace-no-wrap">
                            Emergency Leave
                          </p>
                          <p class="text-gray-600 whitespace-no-wrap">
                            Code: SIM-EML
                          </p>
                        </div>
                      </div>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">1</p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">1</p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span
                          aria-hidden
                          class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                        ></span>
                        <span class="relative">10</span>
                      </span>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right dropdown">
                      <button
                        type="button"
                        class="inline-block text-gray-500 hover:text-gray-700 "
                      >
                        <svg
                          class="inline-block h-6 w-6 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
                        </svg>
                      </button>
                      <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
                        <li class="">
                          <a
                            class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                            href="#"
                          >
                            Check Request
                          </a>
                        </li>
                        <li class="">
                          <a
                            class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                            href="#"
                          >
                            Request Leave
                          </a>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div class="flex">
                        <div class="ml-3">
                          <p class="text-gray-900 whitespace-no-wrap">
                            Sick Leave
                          </p>
                          <p class="text-gray-600 whitespace-no-wrap">
                            Code: SIM-SIL
                          </p>
                        </div>
                      </div>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">1</p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">1</p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span
                          aria-hidden
                          class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                        ></span>
                        <span class="relative">10</span>
                      </span>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right dropdown">
                      <button
                        type="button"
                        class="inline-block text-gray-500 hover:text-gray-700 "
                      >
                        <svg
                          class="inline-block h-6 w-6 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
                        </svg>
                      </button>
                      <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
                        <li class="">
                          <a
                            class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                            href="#"
                          >
                            Check Request
                          </a>
                        </li>
                        <li class="">
                          <a
                            class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                            href="#"
                          >
                            Request Leave
                          </a>
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div
          class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
          id="exampleModalCenteredScrollable"
          tabindex="-1"
          aria-labelledby="exampleModalCenteredScrollable"
          aria-modal="true"
          role="dialog"
        >
          <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable relative w-auto pointer-events-none">
            <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
              <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                <h5
                  class="text-xl font-medium leading-normal text-gray-800"
                  id="exampleModalCenteredScrollableLabel"
                >
                  Modal title
                </h5>
                <button
                  type="button"
                  class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body relative p-4">
                <p>
                  This is some placeholder content to show a vertically centered
                  modal. We've added some extra copy here to show how vertically
                  centering the modal works when combined with scrollable
                  modals. We also use some repeated line breaks to quickly
                  extend the height of the content, thereby triggering the
                  scrolling. When content becomes longer than the predefined
                  max-height of modal, content will be cropped and scrollable
                  within the modal.
                </p>
                <p>Just like that.</p>
              </div>
              <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                <button
                  type="button"
                  class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* HR table */}

      <div class="container mx-auto px-4 sm:px-8">
        <div class="py-8">
          <div>
            <h2 class="text-2xl font-semibold leading-tight">Leave Approval</h2>
          </div>
          <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div class="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
              <table class="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Worker
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Leave Type
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Start Date
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      status
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Total Leave Taken
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div class="flex">
                        <div class="flex-shrink-0 w-10 h-10">
                          <img
                            class="w-full h-full rounded-full"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                            alt=""
                          />
                        </div>
                        <div class="ml-3">
                          <p class="text-gray-900 whitespace-no-wrap">
                            Molly Sanders
                          </p>
                          <p class="text-gray-600 whitespace-no-wrap">000004</p>
                        </div>
                      </div>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div class="flex">
                        <div class="ml-3">
                          <p class="text-gray-900 whitespace-no-wrap">
                            Annual Leave
                          </p>
                          <p class="text-gray-600 whitespace-no-wrap">
                            Code: 1SIM-ANL
                          </p>
                        </div>
                      </div>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">
                        Sept 14, 2019
                      </p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span
                          aria-hidden
                          class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                        ></span>
                        <span class="relative">Approved</span>
                      </span>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">10</p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right dropdown">
                      <button
                        type="button"
                        class="inline-block text-gray-500 hover:text-gray-700 "
                      >
                        <svg
                          class="inline-block h-6 w-6 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
                        </svg>
                      </button>
                      <ul class="dropdown-menu hidden absolute text-gray-700 pt-1">
                        <li class="">
                          <a
                            class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                            href="#"
                          >
                            Check Request
                          </a>
                        </li>
                        <li class="">
                          <a
                            class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                            href="#"
                          >
                            Request Leave
                          </a>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div class="flex">
                        <div class="flex-shrink-0 w-10 h-10">
                          <img
                            class="w-full h-full rounded-full"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                            alt=""
                          />
                        </div>
                        <div class="ml-3">
                          <p class="text-gray-900 whitespace-no-wrap">
                            Molly Sanders
                          </p>
                          <p class="text-gray-600 whitespace-no-wrap">000004</p>
                        </div>
                      </div>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div class="flex">
                        <div class="ml-3">
                          <p class="text-gray-900 whitespace-no-wrap">
                            Emergency Leave
                          </p>
                          <p class="text-gray-600 whitespace-no-wrap">
                            Code: SIM-EML
                          </p>
                        </div>
                      </div>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">
                        Sept 14, 2019
                      </p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span
                          aria-hidden
                          class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                        ></span>
                        <span class="relative">Approved</span>
                      </span>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">10</p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right dropdown">
                      <button
                        type="button"
                        class="inline-block text-gray-500 hover:text-gray-700 "
                      >
                        <svg
                          class="inline-block h-6 w-6 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
                        </svg>
                      </button>
                      <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
                        <li class="">
                          <a
                            class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                            href="#"
                          >
                            Check Request
                          </a>
                        </li>
                        <li class="">
                          <a
                            class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                            href="#"
                          >
                            Request Leave
                          </a>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div class="flex">
                        <div class="flex-shrink-0 w-10 h-10">
                          <img
                            class="w-full h-full rounded-full"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                            alt=""
                          />
                        </div>
                        <div class="ml-3">
                          <p class="text-gray-900 whitespace-no-wrap">
                            Molly Sanders
                          </p>
                          <p class="text-gray-600 whitespace-no-wrap">000004</p>
                        </div>
                      </div>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div class="flex">
                        <div class="ml-3">
                          <p class="text-gray-900 whitespace-no-wrap">
                            Sick Leave
                          </p>
                          <p class="text-gray-600 whitespace-no-wrap">
                            Code: SIM-SIL
                          </p>
                        </div>
                      </div>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">
                        Sept 14, 2019
                      </p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span
                          aria-hidden
                          class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                        ></span>
                        <span class="relative">Approved</span>
                      </span>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">10</p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right dropdown">
                      <button
                        type="button"
                        class="inline-block text-gray-500 hover:text-gray-700 "
                      >
                        <svg
                          class="inline-block h-6 w-6 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
                        </svg>
                      </button>
                      <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
                        <li class="">
                          <a
                            class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                            href="#"
                          >
                            approve
                          </a>
                        </li>
                        <li class="">
                          <a
                            class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                            href="#"
                          >
                            reject
                          </a>
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Leader Page */}

      <div class="container mx-auto px-4 sm:px-8">
        <div class="py-8">
          <div>
            <h2 class="text-2xl font-semibold leading-tight">Leave Approval</h2>
          </div>
          <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div class="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
              <table class="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Worker
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Leave Type
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Start Date
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      status
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Total Leave Taken
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div class="flex">
                        <div class="flex-shrink-0 w-10 h-10">
                          <img
                            class="w-full h-full rounded-full"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                            alt=""
                          />
                        </div>
                        <div class="ml-3">
                          <p class="text-gray-900 whitespace-no-wrap">
                            Molly Sanders
                          </p>
                          <p class="text-gray-600 whitespace-no-wrap">000004</p>
                        </div>
                      </div>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div class="flex">
                        <div class="ml-3">
                          <p class="text-gray-900 whitespace-no-wrap">
                            Annual Leave
                          </p>
                          <p class="text-gray-600 whitespace-no-wrap">
                            Code: 1SIM-ANL
                          </p>
                        </div>
                      </div>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">
                        Sept 14, 2019
                      </p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span
                          aria-hidden
                          class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                        ></span>
                        <span class="relative">Approved</span>
                      </span>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">10</p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right dropdown">
                      <button
                        type="button"
                        class="inline-block text-gray-500 hover:text-gray-700 "
                      >
                        <svg
                          class="inline-block h-6 w-6 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
                        </svg>
                      </button>
                      <ul class="dropdown-menu hidden absolute text-gray-700 pt-1">
                        <li class="">
                          <a
                            class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                            href="#"
                          >
                            Check Request
                          </a>
                        </li>
                        <li class="">
                          <a
                            class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                            href="#"
                          >
                            Request Leave
                          </a>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div class="flex">
                        <div class="flex-shrink-0 w-10 h-10">
                          <img
                            class="w-full h-full rounded-full"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                            alt=""
                          />
                        </div>
                        <div class="ml-3">
                          <p class="text-gray-900 whitespace-no-wrap">
                            Molly Sanders
                          </p>
                          <p class="text-gray-600 whitespace-no-wrap">000004</p>
                        </div>
                      </div>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div class="flex">
                        <div class="ml-3">
                          <p class="text-gray-900 whitespace-no-wrap">
                            Emergency Leave
                          </p>
                          <p class="text-gray-600 whitespace-no-wrap">
                            Code: SIM-EML
                          </p>
                        </div>
                      </div>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">
                        Sept 14, 2019
                      </p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span
                          aria-hidden
                          class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                        ></span>
                        <span class="relative">Approved</span>
                      </span>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">10</p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right dropdown">
                      <button
                        type="button"
                        class="inline-block text-gray-500 hover:text-gray-700 "
                      >
                        <svg
                          class="inline-block h-6 w-6 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
                        </svg>
                      </button>
                      <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
                        <li class="">
                          <a
                            class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                            href="#"
                          >
                            Check Request
                          </a>
                        </li>
                        <li class="">
                          <a
                            class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                            href="#"
                          >
                            Request Leave
                          </a>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div class="flex">
                        <div class="flex-shrink-0 w-10 h-10">
                          <img
                            class="w-full h-full rounded-full"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                            alt=""
                          />
                        </div>
                        <div class="ml-3">
                          <p class="text-gray-900 whitespace-no-wrap">
                            Molly Sanders
                          </p>
                          <p class="text-gray-600 whitespace-no-wrap">000004</p>
                        </div>
                      </div>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div class="flex">
                        <div class="ml-3">
                          <p class="text-gray-900 whitespace-no-wrap">
                            Sick Leave
                          </p>
                          <p class="text-gray-600 whitespace-no-wrap">
                            Code: SIM-SIL
                          </p>
                        </div>
                      </div>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">
                        Sept 14, 2019
                      </p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span
                          aria-hidden
                          class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                        ></span>
                        <span class="relative">Approved</span>
                      </span>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">10</p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right dropdown">
                      <button
                        type="button"
                        class="inline-block text-gray-500 hover:text-gray-700 "
                      >
                        <svg
                          class="inline-block h-6 w-6 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
                        </svg>
                      </button>
                      <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
                        <li class="">
                          <a
                            class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                            href="#"
                          >
                            approve
                          </a>
                        </li>
                        <li class="">
                          <a
                            class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                            href="#"
                          >
                            reject
                          </a>
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div class="container mx-auto px-4 sm:px-8">
        <div class="py-8">
          <div>
            <h2 class="text-2xl font-semibold leading-tight">Employee Leave</h2>
          </div>
          <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div class="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
              <table class="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Leave Type
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Total Entitlement
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Pending Approval
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Available Balance
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div class="flex">
                        <div class="ml-3">
                          <p class="text-gray-900 whitespace-no-wrap">
                            Annual Leave
                          </p>
                          <p class="text-gray-600 whitespace-no-wrap">
                            Code: 1SIM-ANL
                          </p>
                        </div>
                      </div>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">1</p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">1</p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span
                          aria-hidden
                          class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                        ></span>
                        <span class="relative">10</span>
                      </span>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right dropdown">
                      <button
                        type="button"
                        class="inline-block text-gray-500 hover:text-gray-700 "
                      >
                        <svg
                          class="inline-block h-6 w-6 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
                        </svg>
                      </button>
                      <ul class="dropdown-menu hidden absolute text-gray-700 pt-1">
                        <li class="">
                          <a
                            class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                            href="#"
                          >
                            Check Request
                          </a>
                        </li>
                        <li class="">
                          <a
                            class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                            href="#"
                          >
                            Request Leave
                          </a>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div class="flex">
                        <div class="ml-3">
                          <p class="text-gray-900 whitespace-no-wrap">
                            Emergency Leave
                          </p>
                          <p class="text-gray-600 whitespace-no-wrap">
                            Code: SIM-EML
                          </p>
                        </div>
                      </div>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">1</p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">1</p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span
                          aria-hidden
                          class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                        ></span>
                        <span class="relative">10</span>
                      </span>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right dropdown">
                      <button
                        type="button"
                        class="inline-block text-gray-500 hover:text-gray-700 "
                      >
                        <svg
                          class="inline-block h-6 w-6 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
                        </svg>
                      </button>
                      <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
                        <li class="">
                          <a
                            class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                            href="#"
                          >
                            Check Request
                          </a>
                        </li>
                        <li class="">
                          <a
                            class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                            href="#"
                          >
                            Request Leave
                          </a>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div class="flex">
                        <div class="ml-3">
                          <p class="text-gray-900 whitespace-no-wrap">
                            Sick Leave
                          </p>
                          <p class="text-gray-600 whitespace-no-wrap">
                            Code: SIM-SIL
                          </p>
                        </div>
                      </div>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">1</p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">1</p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span
                          aria-hidden
                          class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                        ></span>
                        <span class="relative">10</span>
                      </span>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right dropdown">
                      <button
                        type="button"
                        class="inline-block text-gray-500 hover:text-gray-700 "
                      >
                        <svg
                          class="inline-block h-6 w-6 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
                        </svg>
                      </button>
                      <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
                        <li class="">
                          <a
                            class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                            href="#"
                          >
                            Check Request
                          </a>
                        </li>
                        <li class="">
                          <a
                            class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                            href="#"
                          >
                            Request Leave
                          </a>
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* HR table */}
    </>
  );
}

export default Profile;
