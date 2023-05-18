import logo from '/logo.png';
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/ContextProvider";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
  const { user } = useContext(AuthContext);

  const navMenu = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/about">All Toys</Link>
      </li>
      <li>
        <Link to="/about">My Toys</Link>
      </li>
      <li>
        <Link to="/about">Add A Toy</Link>
      </li>
      <li>
        <Link to="/about">Blog</Link>
      </li>
      {user?.email ? (
        <>
          <li>
            <Link to="/bookings">My Bookings</Link>
          </li>
          <li>
            <button>Logout</button>
          </li>
        </>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );

  return (
    <>
      <div className="navbar shadow-md lg:px-10 lg:py-3">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navMenu}
            </ul>
          </div>
          <label
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            <img
              className="w-[80px] h-[80px] avatar rounded-xl"
              src={logo}
              alt=""
            />
          </label>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navMenu}</ul>
        </div>
        <div className="navbar-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={logo} />
            </div>
          </label>
        </div>
      </div>
      <div className='h-[5px] bg-gainsboro'></div>
    </>
  );
};

export default Navbar;
