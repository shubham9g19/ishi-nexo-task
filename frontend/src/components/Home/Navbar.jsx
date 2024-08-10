import React from "react";
import { PiLinktreeLogoBold } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
function Navbar({ remove_header }) {
  const { token, setToken } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    setToken(null);
    navigate("/login");
  };
  return (
    <nav className="fixed left-[5.5rem] top-12 h-[5.5rem] bg-white shadow-lg rounded-full z-50 w-[calc(100%-10rem)] mx-auto">
      <div className="flex justify-between space-x-9 px-3">
        <div className="flex items-center h-16">
          <div className="flex items-center">
            <div>
              <Link to="/">
                <PiLinktreeLogoBold
                  style={{ fontSize: "40px" }}
                  className="mt-4"
                />
              </Link>
            </div>
          </div>
          {remove_header ? null : (
            <div className="flex items-center mt-6 ml-4 text-[1.12rem] font-sans font-semibold">
              <a
                href="/"
                className="text-[rgb(103,107,95)] px-3 py-2 rounded-lg hover:bg-[rgb(239,240,236)] hover:bg-opacity-90"
              >
                Templates
              </a>
              <a
                href="/"
                className="text-[rgb(103,107,95)] px-3 py-2 rounded-lg hover:bg-[rgb(239,240,236)]"
              >
                Marketplace
              </a>
              <a
                href="/"
                className="text-[rgb(103,107,95)] px-3 py-2 rounded-lg hover:bg-[rgb(239,240,236)]"
              >
                Discover
              </a>
              <a
                href="/"
                className="text-[rgb(103,107,95)] px-3 py-2 rounded-lg hover:bg-[rgb(239,240,236)]"
              >
                Pricing
              </a>
              <a
                href="/"
                className="text-[rgb(103,107,95)] px-3 py-2 rounded-lg hover:bg-[rgb(239,240,236)]"
              >
                Learn
              </a>
              <a
                href="/"
                className="text-[rgb(103,107,95)] inline-flex px-3 py-2 rounded-lg hover:bg-[rgb(239,240,236)]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-5 mt-1 mx-1"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
                    clipRule="evenodd"
                  />
                </svg>
                Search
              </a>
            </div>
          )}
        </div>
        <div className="inline-flex items-center ml-20 text-base font-semibold ">
          {token ? (
            <>
              {remove_header ? null : (
                <Link to="/profile">
                  <button className="border rounded-md bg-[rgb(239,240,236)] w-24 h-16 mx-2 mt-3 ">
                    Profile
                  </button>
                </Link>
              )}
              <button
                onClick={handleLogout}
                className="text-[1.15rem] text-white border rounded-full bg-[rgb(30,35,48)] w-40 h-16 mt-3"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="border rounded-md bg-[rgb(239,240,236)] w-24 h-16 mx-2 mt-3 ">
                  Log in
                </button>
              </Link>
              <Link to="/signup">
                <button className="text-[1.15rem] text-white border rounded-full bg-[rgb(30,35,48)] w-40 h-16 mt-3">
                  Sign up free
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
