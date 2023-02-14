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
import { checkAuth } from "../api/users";
import { logout } from "../api/users";

const SideBar = () => {
    const [open, setOpen] = useState(false);
    const { user } = checkAuth();
    const activeStyle =
        "bg-white/20 flex px-2 py-4 space-x-4 rounded-md text-white hover:bg-white/10";
    const inactiveStyle =
        "flex px-2 py-4 space-x-4 rounded-md text-white hover:bg-white/10";
    return (
        <div
            className={`w-40 flex flex-col h-screen p-3 py-8 bg-gray-800 shadow duration-300`}
        >
            <div className="space-y-3">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-white">Dashboard</h2>
                </div>
                <div className="flex-1">
                    <ul className="pt-2 pb-4 space-y-2 text-sm">
                        <li className="rounded-sm">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? activeStyle : inactiveStyle
                                }
                            >
                                <FontAwesomeIcon
                                    icon={faHome}
                                    inverse
                                    className="my-auto"
                                    size="lg"
                                />
                                <span className="text-gray-100">Home</span>
                            </NavLink>
                        </li>
                        <li className="rounded-sm">
                            <NavLink
                                to="/leave"
                                className={({ isActive }) =>
                                    isActive ? activeStyle : inactiveStyle
                                }
                            >
                                <FontAwesomeIcon
                                    icon={faCalendar}
                                    inverse
                                    className="my-auto"
                                    size="lg"
                                />
                                <span className="text-gray-100">
                                    Employee Leave
                                </span>
                            </NavLink>
                        </li>
                        {user.data.leader || user.data.employee ? (
                            <li className="rounded-sm">
                                <NavLink
                                    to="/benefit"
                                    className={({ isActive }) =>
                                        isActive ? activeStyle : inactiveStyle
                                    }
                                >
                                    <FontAwesomeIcon
                                        icon={faReceipt}
                                        inverse
                                        size="lg"
                                        className="my-auto"
                                    />
                                    <span className="text-gray-100">
                                        Profile
                                    </span>
                                </NavLink>
                            </li>
                        ) : null}
                        {user.data.leader ? (
                            <li className="rounded-sm">
                                <NavLink
                                    to="/performance"
                                    className={({ isActive }) =>
                                        isActive ? activeStyle : inactiveStyle
                                    }
                                >
                                    <FontAwesomeIcon
                                        icon={faSignal}
                                        inverse
                                        className="my-auto"
                                        size="lg"
                                    />
                                    <span className="text-gray-100">
                                        Employee Evaluation
                                    </span>
                                </NavLink>
                            </li>
                        ) : null}
                        <li className="rounded-sm">
                            <NavLink
                                onClick={logout}
                                to="/login"
                                className={({ isActive }) =>
                                    isActive ? activeStyle : inactiveStyle
                                }
                            >
                                <FontAwesomeIcon
                                    icon={faArrowRightFromBracket}
                                    inverse
                                    className="my-auto"
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
