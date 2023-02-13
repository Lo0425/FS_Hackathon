import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faCalendar,
    faSignal,
    faReceipt,
    faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { logout } from "../api/users";

const SideBar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div
            className={` ${
                open ? "w-40" : "w-60 "
            } flex flex-col h-screen p-3 bg-gray-800 shadow duration-300`}
        >
            <div className="space-y-3">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-white">Dashboard</h2>
                    <button onClick={() => setOpen(!open)}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </button>
                </div>
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center py-4">
                        <button
                            type="submit"
                            className="p-2 focus:outline-none focus:ring"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </button>
                    </span>
                    <input
                        type="search"
                        name="Search"
                        placeholder="Search..."
                        className="w-full py-2 pl-10 text-sm rounded-md focus:outline-none"
                    />
                </div>
                <div className="flex-1">
                    <ul className="pt-2 pb-4 space-y-1 text-sm">
                        <li className="rounded-sm">
                            <NavLink
                                to="/"
                                className="flex items-center p-2 space-x-3 rounded-md"
                            >
                                <FontAwesomeIcon
                                    icon={faHome}
                                    inverse
                                    size="lg"
                                />
                                <span className="text-gray-100">Home</span>
                            </NavLink>
                        </li>
                        <li className="rounded-sm">
                            <NavLink
                                to="/leave"
                                className="flex items-center p-2 space-x-3 rounded-md"
                            >
                                <FontAwesomeIcon
                                    icon={faCalendar}
                                    inverse
                                    size="lg"
                                />
                                <span className="text-gray-100">
                                    Employee Leave
                                </span>
                            </NavLink>
                        </li>
                        <li className="rounded-sm">
                            <NavLink
                                to="/benefits"
                                className="flex items-center p-2 space-x-3 rounded-md"
                            >
                                <FontAwesomeIcon
                                    icon={faReceipt}
                                    inverse
                                    size="lg"
                                />
                                <span className="text-gray-100">
                                    Employee Benefits
                                </span>
                            </NavLink>
                        </li>
                        <li className="rounded-sm">
                            <NavLink
                                to="/performance"
                                className="flex items-center p-2 space-x-3 rounded-md"
                            >
                                <FontAwesomeIcon
                                    icon={faSignal}
                                    inverse
                                    size="md"
                                />
                                <span className="text-gray-100">
                                    Performance Evaluation
                                </span>
                            </NavLink>
                        </li>
                        <li className="rounded-sm">
                            <NavLink
                                onClick={logout}
                                to="/login"
                                className="flex items-center p-2 space-x-3 rounded-md"
                            >
                                <FontAwesomeIcon
                                    icon={faArrowRightFromBracket}
                                    inverse
                                    size="lg"
                                />
                                <span className="text-gray-100">Logout</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
