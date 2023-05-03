import React, { useContext } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../ContextProvider/AuthContextProvider";
import Login from "../../../pages/LoginRegister/Login/Login";

const MyNavbar = () => {
  const { user } = useContext(AuthContext);

  const { handleManualLogout } = useContext(AuthContext);
  const location = useLocation();
  const fromPath = location.state?.from?.pathname || "/";

  const navigate = useNavigate();

  const handleLogout = () => {
    handleManualLogout()
      .then((result) => {
        navigate(fromPath);
      })
      .catch((err) => {});
  };
  return (
    <div className="">
      <div className="navbar bg-[#fffaf0] max-w-[1520px] mx-auto shadow-md">
        <div className="navbar-start ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-yellow-500" : ""
                }
              >
                <li>
                  <a>Home</a>
                </li>
              </NavLink>
              <NavLink
                to="/blog"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-yellow-500" : ""
                }
              >
                <li>
                  <a>Blog</a>
                </li>
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-yellow-500" : ""
                }
              >
                <li>
                  <a>About us</a>
                </li>
              </NavLink>
            </ul>
          </div>
          <Link to="/">
            <a className=" normal-case lg:text-xl text-sm cursor-pointer">
              Cooking Light
            </a>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-yellow-500" : ""
              }
            >
              <li>
                <a>Home</a>
              </li>
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-yellow-500" : ""
              }
            >
              <li>
                <a>Blog</a>
              </li>
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-yellow-500" : ""
              }
            >
              <li>
                <a>About us</a>
              </li>
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <div className="tooltip tooltip-left" data-tip={user.displayName}>
              <label
                
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} />
                </div>
              </label>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <Link to="/profile">
                  <li>
                    <a className="justify-between">Profile</a>
                  </li>
                </Link>

                <li onClick={handleLogout}>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <div className="dropdown dropdown-end">
              <Link to="/login">
                <a class="custom-btn transition duration-700 hover:bg-green-400 cursor-pointer bg-yellow-400 px-5 py-2 rounded-sm">
                  Login
                </a>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyNavbar;
