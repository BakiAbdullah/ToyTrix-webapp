import logo from "/logo.png";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/ContextProvider";
import AOS from "aos";
import "aos/dist/aos.css";
import {  FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const { user, signOutAUser } = useContext(AuthContext);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  // Logout user
  const logOutUser = () => {
    signOutAUser().catch((err) => console.log(err.message));
  };

  const navMenu = (
    <>
      <li>
        <Link className="link" to="/">
          Home
        </Link>
      </li>

      <li>
        <Link className="link" to="/alltoys">
          All Toys
        </Link>
      </li>
      <li>
        <Link className="link" to="/blog">
          Blog
        </Link>
      </li>
      {user ? (
        <>
          <li>
            <Link className="link" to="/mytoy">
              My Toy
            </Link>
          </li>

          <li>
            <Link className="link" to="/addtoy">
              Add A Toy
            </Link>
          </li>
          <li>
            <button className="link" onClick={logOutUser}>
              Logout
            </button>
          </li>
        </>
      ) : (
        ""
      )}
    </>
  );

  return (
    <>
      <div className="navbar shadow-lg lg:px-10 lg:py-3">
        <div className="navbar-start">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded w-52"
            >
              {navMenu}
            </ul>
          </div>
          <label
            data-aos="fadeIn"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            <img
              className="w-[80px] h-[80px] avatar rounded-t-full"
              src={logo}
              alt=""
            />
          </label>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navMenu}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div
                title={user?.displayName}
                className="w-10 tooltip rounded-full"
              >
                {user?.photoURL ? <img src={user?.photoURL} /> : <FaUserCircle className="text-4xl text-gray-600"></FaUserCircle>}
              </div>
            </label>
          ) : (
            <Link
              className="btn border-none rounded-full px-6 bg-pink hover:bg-rose-300"
              to="/login"
            >
              Login
            </Link>
          )}
        </div>
      </div>
      <div className="h-[5px] bg-gainsboro"></div>
    </>
  );
};

export default Navbar;
