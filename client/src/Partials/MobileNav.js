import { useRef } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import logo from "../public/simplr_logo.png";

const MobileNav = () => {
    const navItemRef = useRef(null);
    const navRef = useRef(null);

    const navigate = useNavigate();

    const logoutHandler = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    const onClickHandler = (e) => {
        e.currentTarget.firstElementChild.classList.toggle("hidden");
        e.currentTarget.firstElementChild.nextElementSibling.classList.toggle(
            "hidden"
        );
        navRef.current.classList.toggle("h-screen");
        navItemRef.current.classList.toggle("hidden");
        navItemRef.current.classList.toggle("flex");
    };

    return (
        <div
            ref={navRef}
            className="sticky top-0 z-10 flex flex-col w-screen px-6 py-4 bg-white shadow-sm overflow-y-clip shadow-zinc-300 md:hidden"
        >
            <div className="flex justify-between">
                <div className="flex items-end space-x-2">
                    <img src={logo} alt="" className="w-full" />
                </div>

                <button onClick={onClickHandler}>
                    <FontAwesomeIcon
                        icon={faBars}
                        className="text-3xl text-zinc-600"
                    />
                    <FontAwesomeIcon
                        icon={faXmark}
                        className="hidden text-3xl text-zinc-600"
                    />
                </button>
            </div>

            {/* navlinks */}
            <div
                ref={navItemRef}
                className="flex-col items-center justify-center hidden h-full space-y-10 text-2xl uppercase text-zinc-700"
            >
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "text-blue-500" : "hover:text-blue-500"
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/leave"
                    className={({ isActive }) =>
                        isActive ? "text-blue-500" : "hover:text-blue-500"
                    }
                >
                    Employee Leave
                </NavLink>
                <NavLink
                    to="/benefit"
                    className={({ isActive }) =>
                        isActive ? "text-blue-500" : "hover:text-blue-500"
                    }
                >
                    Employee Benefit
                </NavLink>
                <NavLink
                    to="/performance"
                    className={({ isActive }) =>
                        isActive ? "text-blue-500" : "hover:text-blue-500"
                    }
                >
                    Employee Evaluation
                </NavLink>
                <p onClick={logoutHandler}>Logout</p>
            </div>
            {/* end of navlinks */}
        </div>
    );
};

export default MobileNav;
