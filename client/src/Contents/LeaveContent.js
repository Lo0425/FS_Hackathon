import { useState, useEffect } from "react";
import { checkAuth } from "../api/users";
import AnnualLeaveChart from "../Charts/AnnualLeaveChart";
import EmergencyLeaveChart from "../Charts/EmergencyLeaveChart";
import SickLeaveChart from "../Charts/SickLeaveChart";

const LeaveContent = () => {
    const { user } = checkAuth();
    const [request, setRequest] = useState({
        email: user.email,
        username: user.username,
        tier1: user.employee,
        tier2: user.leader,
        reason: "",
        leaveType: "",
        startDate: "",
        totalLeaveTaken: 0,
        status: "pending",
    });
    const [pending, setPending] = useState([]);
    useEffect(() => {
        fetch("http://127.0.0.1:8000/request/")
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setPending(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);
    // if (pending) {
    //   console.log(pending);
    // }
    let onChangeHandler = (e) => {
        setRequest({ ...request, [e.target.name]: e.target.value });
    };
    let onSubmitHandler = (e) => {
        console.log("fuk u");
        e.preventDefault();
        setRequest({ ...request, [e.target.name]: e.target.value });
        fetch("http://127.0.0.1:8000/request/sendRequest", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(request),
        }).then((res) => res.json());
    };
    let onSubmitHandlerAccept = (e) => {
        e.preventDefault();
        console.log(e.target.name);

        fetch(`http://127.0.0.1:8000/request/acceptRequest/${e.target.name}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
        });
    };
    let onSubmitHandlerDeny = (e) => {
        e.preventDefault();
        console.log(e.target.name);

        fetch(`http://127.0.0.1:8000/request/acceptRequest/${e.target.name}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
        });
    };
    return (
        <>
            {user.data.employee ? (
                <div class="container mx-auto px-4 sm:px-8">
                    <div class="py-8">
                        <div>
                            <h2 class="text-2xl font-semibold leading-tight">
                                Employee Leave
                            </h2>
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                            <div className="w-full px-4 bg-white rounded-lg shadow-lg">
                                <AnnualLeaveChart />
                            </div>
                            <div className="w-full px-4 bg-white rounded-lg shadow-lg">
                                <EmergencyLeaveChart />
                            </div>
                            <div className="w-full px-4 bg-white rounded-lg shadow-lg">
                                <SickLeaveChart />
                            </div>
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
                                                <p class="text-gray-900 whitespace-no-wrap">
                                                    1
                                                </p>
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap">
                                                    1
                                                </p>
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                    <span
                                                        aria-hidden
                                                        class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                                    ></span>
                                                    <span class="relative">
                                                        10
                                                    </span>
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
                                                            data-bs-target="#annualLeaveModal"
                                                            onClick={() =>
                                                                setRequest(
                                                                    "",
                                                                    "",
                                                                    "",
                                                                    "annualLeave",
                                                                    "",
                                                                    0,
                                                                    "pending"
                                                                )
                                                            }
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
                                                <p class="text-gray-900 whitespace-no-wrap">
                                                    1
                                                </p>
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap">
                                                    1
                                                </p>
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                    <span
                                                        aria-hidden
                                                        class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                                    ></span>
                                                    <span class="relative">
                                                        10
                                                    </span>
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
                                                            type="button"
                                                            class=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap cursor-pointer"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#emergencyLeaveModal"
                                                            onClick={() =>
                                                                setRequest(
                                                                    "",
                                                                    "",
                                                                    "",
                                                                    "emergencyLeave",
                                                                    "",
                                                                    0,
                                                                    "pending"
                                                                )
                                                            }
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
                                                <p class="text-gray-900 whitespace-no-wrap">
                                                    1
                                                </p>
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap">
                                                    1
                                                </p>
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                    <span
                                                        aria-hidden
                                                        class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                                    ></span>
                                                    <span class="relative">
                                                        10
                                                    </span>
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
                                                            type="button"
                                                            class=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap cursor-pointer"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#sickLeaveModal"
                                                            onClick={() =>
                                                                setRequest(
                                                                    "",
                                                                    "",
                                                                    "",
                                                                    "sickLeave",
                                                                    "",
                                                                    0,
                                                                    "pending"
                                                                )
                                                            }
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
            ) : null}

            {user.data.leader ? (
                <div class="container mx-auto px-4 sm:px-8">
                    <div class="py-8">
                        <div>
                            <h2 class="text-2xl font-semibold leading-tight">
                                Employee Leave
                            </h2>
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
                                                <p class="text-gray-900 whitespace-no-wrap">
                                                    1
                                                </p>
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap">
                                                    1
                                                </p>
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                    <span
                                                        aria-hidden
                                                        class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                                    ></span>
                                                    <span class="relative">
                                                        10
                                                    </span>
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
                                                            data-bs-target="#annualLeaveModal"
                                                            onClick={() =>
                                                                setRequest(
                                                                    "",
                                                                    "",
                                                                    "",
                                                                    "annualLeave",
                                                                    "",
                                                                    0,
                                                                    "pending"
                                                                )
                                                            }
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
                                                <p class="text-gray-900 whitespace-no-wrap">
                                                    1
                                                </p>
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap">
                                                    1
                                                </p>
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                    <span
                                                        aria-hidden
                                                        class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                                    ></span>
                                                    <span class="relative">
                                                        10
                                                    </span>
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
                                                            type="button"
                                                            class=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap cursor-pointer"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#emergencyLeaveModal"
                                                            onClick={() =>
                                                                setRequest(
                                                                    "",
                                                                    "",
                                                                    "",
                                                                    "emergencyLeave",
                                                                    "",
                                                                    0,
                                                                    "pending"
                                                                )
                                                            }
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
                                                <p class="text-gray-900 whitespace-no-wrap">
                                                    1
                                                </p>
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap">
                                                    1
                                                </p>
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                    <span
                                                        aria-hidden
                                                        class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                                    ></span>
                                                    <span class="relative">
                                                        10
                                                    </span>
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
                                                            type="button"
                                                            class=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap cursor-pointer"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#sickLeaveModal"
                                                            onClick={() =>
                                                                setRequest(
                                                                    "",
                                                                    "",
                                                                    "",
                                                                    "sickLeave",
                                                                    "",
                                                                    0,
                                                                    "pending"
                                                                )
                                                            }
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
                    {pending.request ? (
                        <div class="py-8">
                            <div>
                                <h2 class="text-2xl font-semibold leading-tight">
                                    Leave Approval
                                </h2>
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
                                            {pending.request.map((req, i) => {
                                                if (
                                                    req.status == "pending" &&
                                                    req.tier1
                                                ) {
                                                    return (
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
                                                                            {
                                                                                req.email
                                                                            }
                                                                        </p>
                                                                        <p class="text-gray-600 whitespace-no-wrap">
                                                                            000004
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                                <div class="flex">
                                                                    <div class="ml-3">
                                                                        <p class="text-gray-900 whitespace-no-wrap">
                                                                            {
                                                                                req.leaveType
                                                                            }
                                                                        </p>
                                                                        <p class="text-gray-600 whitespace-no-wrap">
                                                                            Code:
                                                                            1SIM-ANL
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                                <p class="text-gray-900 whitespace-no-wrap">
                                                                    {
                                                                        req.startDate
                                                                    }
                                                                </p>
                                                            </td>
                                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                                <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                                    <span
                                                                        aria-hidden
                                                                        class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                                                    ></span>
                                                                    <span class="relative">
                                                                        {
                                                                            req.status
                                                                        }
                                                                    </span>
                                                                </span>
                                                            </td>
                                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                                <p class="text-gray-900 whitespace-no-wrap">
                                                                    {
                                                                        req.totalLeaveTaken
                                                                    }
                                                                </p>
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
                                                                        <form
                                                                            onSubmit={
                                                                                onSubmitHandlerAccept
                                                                            }
                                                                            method="PUT"
                                                                            name={
                                                                                req._id
                                                                            }
                                                                        >
                                                                            {/* <input
                                        id="hiddenInput"
                                        type="hidden"
                                        name="id"
                                      /> */}
                                                                            <button
                                                                                type="submit"
                                                                                class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                                                            >
                                                                                Approve
                                                                            </button>
                                                                        </form>
                                                                    </li>
                                                                    <li class="">
                                                                        <form
                                                                            onSubmit={
                                                                                onSubmitHandlerDeny
                                                                            }
                                                                            method="PUT"
                                                                            name={
                                                                                req._id
                                                                            }
                                                                        >
                                                                            {/* <input
                                        id="hiddenInput"
                                        type="hidden"
                                        name="id"
                                      /> */}
                                                                            <button
                                                                                type="submit"
                                                                                class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                                                            >
                                                                                Approve
                                                                            </button>
                                                                        </form>
                                                                    </li>
                                                                </ul>
                                                            </td>
                                                        </tr>
                                                    );
                                                }
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    ) : null}
                </div>
            ) : null}
            {user.data.admin ? (
                <div class="container mx-auto px-4 sm:px-8">
                    {pending.request ? (
                        <div class="py-8">
                            <div>
                                <h2 class="text-2xl font-semibold leading-tight">
                                    Employee Leave
                                </h2>
                            </div>
                            <div>
                                <h2 class="text-2xl font-semibold leading-tight">
                                    Leave Approval
                                </h2>
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
                                            {pending.request.map((req, i) => {
                                                if (
                                                    req.status == "pending" &&
                                                    req.tier2
                                                ) {
                                                    return (
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
                                                                            {
                                                                                req.email
                                                                            }
                                                                        </p>
                                                                        <p class="text-gray-600 whitespace-no-wrap">
                                                                            000004
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                                <div class="flex">
                                                                    <div class="ml-3">
                                                                        <p class="text-gray-900 whitespace-no-wrap">
                                                                            {
                                                                                req.leaveType
                                                                            }
                                                                        </p>
                                                                        <p class="text-gray-600 whitespace-no-wrap">
                                                                            Code:
                                                                            1SIM-ANL
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                                <p class="text-gray-900 whitespace-no-wrap">
                                                                    {
                                                                        req.startDate
                                                                    }
                                                                </p>
                                                            </td>
                                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                                <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                                    <span
                                                                        aria-hidden
                                                                        class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                                                    ></span>
                                                                    <span class="relative">
                                                                        {
                                                                            req.status
                                                                        }
                                                                    </span>
                                                                </span>
                                                            </td>
                                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                                <p class="text-gray-900 whitespace-no-wrap">
                                                                    {
                                                                        req.totalLeaveTaken
                                                                    }
                                                                </p>
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
                                                                        <form
                                                                            onSubmit={
                                                                                onSubmitHandlerAccept
                                                                            }
                                                                            method="PUT"
                                                                            name={
                                                                                req._id
                                                                            }
                                                                        >
                                                                            {/* <input
                                        id="hiddenInput"
                                        type="hidden"
                                        name="id"
                                      /> */}
                                                                            <button
                                                                                type="submit"
                                                                                class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                                                            >
                                                                                Approve
                                                                            </button>
                                                                        </form>
                                                                    </li>
                                                                    <li class="">
                                                                        <form
                                                                            onSubmit={
                                                                                onSubmitHandlerDeny
                                                                            }
                                                                            method="PUT"
                                                                            name={
                                                                                req._id
                                                                            }
                                                                        >
                                                                            {/* <input
                                        id="hiddenInput"
                                        type="hidden"
                                        name="id"
                                      /> */}
                                                                            <button
                                                                                type="submit"
                                                                                class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                                                            >
                                                                                Approve
                                                                            </button>
                                                                        </form>
                                                                    </li>
                                                                </ul>
                                                            </td>
                                                        </tr>
                                                    );
                                                }
                                            })}
                                            {pending.request.map((req, i) => {
                                                if (req.status != "pending") {
                                                    return (
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
                                                                            {
                                                                                req.email
                                                                            }
                                                                        </p>
                                                                        <p class="text-gray-600 whitespace-no-wrap">
                                                                            000004
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                                <div class="flex">
                                                                    <div class="ml-3">
                                                                        <p class="text-gray-900 whitespace-no-wrap">
                                                                            {
                                                                                req.leaveType
                                                                            }
                                                                        </p>
                                                                        <p class="text-gray-600 whitespace-no-wrap">
                                                                            Code:
                                                                            1SIM-ANL
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                                <p class="text-gray-900 whitespace-no-wrap">
                                                                    {
                                                                        req.startDate
                                                                    }
                                                                </p>
                                                            </td>
                                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                                <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                                    <span
                                                                        aria-hidden
                                                                        class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                                                    ></span>
                                                                    <span class="relative">
                                                                        {
                                                                            req.status
                                                                        }
                                                                    </span>
                                                                </span>
                                                            </td>
                                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                                <p class="text-gray-900 whitespace-no-wrap">
                                                                    {
                                                                        req.totalLeaveTaken
                                                                    }
                                                                </p>
                                                            </td>
                                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right"></td>
                                                        </tr>
                                                    );
                                                }
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    ) : null}
                </div>
            ) : null}

            {/* annual leave */}

            <div
                class="modal fade fixed top-0  hidden outline-none overflow-x-hidden overflow-y-auto"
                id="annualLeaveModal"
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
                                Annual Leave
                            </h5>
                        </div>
                        <form onSubmit={onSubmitHandler} method="POST">
                            <div class="modal-body relative p-4">
                                <label
                                    for="exampleFormControlInpu3"
                                    class="form-label inline-block mb-2 text-gray-700"
                                >
                                    Email
                                </label>
                                <input
                                    onChange={onChangeHandler}
                                    type="email"
                                    name="email"
                                    class="
                        form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                      "
                                    id="exampleFormControlInput3"
                                />
                                <label
                                    for="exampleFormControlInpu3"
                                    class="form-label inline-block mb-2 text-gray-700"
                                >
                                    Reason
                                </label>
                                <input
                                    onChange={onChangeHandler}
                                    type="text"
                                    name="reason"
                                    class="
                        form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                      "
                                    id="exampleFormControlInput3"
                                />
                                <label
                                    for="exampleFormControlInpu3"
                                    class="form-label inline-block mb-2 text-gray-700"
                                >
                                    Start Date
                                </label>
                                <input
                                    onChange={onChangeHandler}
                                    type="text"
                                    name="startDate"
                                    class="
                        form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                      "
                                    id="exampleFormControlInput3"
                                    placeholder="00/00/0000"
                                />
                                <label
                                    for="exampleFormControlInpu3"
                                    class="form-label inline-block mb-2 text-gray-700"
                                >
                                    Total Days Requested
                                </label>
                                <input
                                    onChange={onChangeHandler}
                                    type="number"
                                    name="totalLeaveTaken"
                                    class="
                        form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                      "
                                    max={5}
                                    min={1}
                                    id="exampleFormControlInput3"
                                />
                            </div>
                            <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                                <button
                                    class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                                <button
                                    type="submit"
                                    data-bs-dismiss="modal"
                                    class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                                >
                                    Send Request
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* emergency leave */}

            <div
                class="modal fade fixed top-0  hidden outline-none overflow-x-hidden overflow-y-auto"
                id="emergencyLeaveModal"
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
                                Emergency Leave
                            </h5>
                        </div>
                        <form onSubmit={onSubmitHandler} method="POST">
                            <div class="modal-body relative p-4">
                                <label
                                    for="exampleFormControlInpu3"
                                    class="form-label inline-block mb-2 text-gray-700"
                                >
                                    Email
                                </label>
                                <input
                                    onChange={onChangeHandler}
                                    type="email"
                                    name="email"
                                    class="
                        form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                      "
                                    id="exampleFormControlInput3"
                                />
                                <label
                                    for="exampleFormControlInpu3"
                                    class="form-label inline-block mb-2 text-gray-700"
                                >
                                    Reason
                                </label>
                                <input
                                    onChange={onChangeHandler}
                                    type="text"
                                    name="reason"
                                    class="
                        form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                      "
                                    id="exampleFormControlInput3"
                                />
                                <label
                                    for="exampleFormControlInpu3"
                                    class="form-label inline-block mb-2 text-gray-700"
                                >
                                    Start Date
                                </label>
                                <input
                                    onChange={onChangeHandler}
                                    type="text"
                                    name="startDate"
                                    class="
                        form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                      "
                                    id="exampleFormControlInput3"
                                    placeholder="00/00/0000"
                                />
                                <label
                                    for="exampleFormControlInpu3"
                                    class="form-label inline-block mb-2 text-gray-700"
                                >
                                    Total Days Requested
                                </label>
                                <input
                                    onChange={onChangeHandler}
                                    type="number"
                                    name="totalLeaveTaken"
                                    class="
                        form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                      "
                                    max={5}
                                    min={1}
                                    id="exampleFormControlInput3"
                                />
                            </div>
                            <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                                <button
                                    class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                                <button
                                    type="submit"
                                    data-bs-dismiss="modal"
                                    class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                                >
                                    Send Request
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* sick leave */}
            <div
                class="modal fade fixed top-0  hidden outline-none overflow-x-hidden overflow-y-auto"
                id="sickLeaveModal"
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
                                Sick Leave
                            </h5>
                        </div>
                        <form onSubmit={onSubmitHandler} method="POST">
                            <div class="modal-body relative p-4">
                                <label
                                    for="exampleFormControlInpu3"
                                    class="form-label inline-block mb-2 text-gray-700"
                                >
                                    Email
                                </label>
                                <input
                                    onChange={onChangeHandler}
                                    type="email"
                                    name="email"
                                    class="
                        form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                      "
                                    id="exampleFormControlInput3"
                                />
                                <label
                                    for="exampleFormControlInpu3"
                                    class="form-label inline-block mb-2 text-gray-700"
                                >
                                    Reason
                                </label>
                                <input
                                    onChange={onChangeHandler}
                                    type="text"
                                    name="reason"
                                    class="
                        form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                      "
                                    id="exampleFormControlInput3"
                                />
                                <label
                                    for="exampleFormControlInpu3"
                                    class="form-label inline-block mb-2 text-gray-700"
                                >
                                    Start Date
                                </label>
                                <input
                                    onChange={onChangeHandler}
                                    type="text"
                                    name="startDate"
                                    class="
                        form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                      "
                                    id="exampleFormControlInput3"
                                    placeholder="00/00/0000"
                                />
                                <label
                                    for="exampleFormControlInpu3"
                                    class="form-label inline-block mb-2 text-gray-700"
                                >
                                    Total Days Requested
                                </label>
                                <input
                                    onChange={onChangeHandler}
                                    type="number"
                                    name="totalLeaveTaken"
                                    class="
                        form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                      "
                                    max={5}
                                    min={1}
                                    id="exampleFormControlInput3"
                                />
                            </div>
                            <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                                <button
                                    class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                                <button
                                    type="submit"
                                    data-bs-dismiss="modal"
                                    class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                                >
                                    Send Request
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LeaveContent;
