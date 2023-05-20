import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/ContextProvider";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import useTitle from "../../CustomHooks/UseTitleHook";

const Login = () => {
  useTitle('Login');
  const { signInUser, googleSignIn, githubSignIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const userLocation = useLocation();
  const navigate = useNavigate();

  const from = userLocation.state?.from?.pathname || "/";

  // Login System
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    setError("");

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    // Sign in with email and password
    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "Welcome " + user.email,
        });
        navigate(from, { replace: true });
        form.reset();
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: `${err.message}`,
        });
      });
  };

  // Google Sign in with popup
  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
         Swal.fire({
           icon: "success",
           title: "Login Successful",
           text: "Welcome " + user?.email,
         });
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // GitHub Sign in with popup
  const handleGithubSignIn = (e) => {
    e.preventDefault();
    githubSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
         Swal.fire({
           icon: "success",
           title: "Login Successful",
           text: "Welcome " + `${user?.email ? (user?.email) : ''}`,
         });
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <div className="mx-auto container flex items-center" id="nav">
        <div className="w-full pt-2 p-4">
          {/* Google Signup */}
          <div className="my-5">
            <h1 className="text-2xl text-center text-seagreen hover:text-seagreen transition duration-500 p-4">
              <i className="fas fa-sign-in-alt fa-fw fa-lg"></i>
              Sign in with
            </h1>
            <div className="flex items-center justify-center space-x-4 mt-3">
              <button
                onClick={handleGithubSignIn}
                className="flex items-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 text-indigo-500 border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  className="w-6 h-6 mr-3"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                  ></path>
                </svg>
                Github
              </button>
              <button
                onClick={handleGoogleSignIn}
                className="flex items-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 text-indigo-500 border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mr-3"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#fbc02d"
                    d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                  />
                  <path
                    fill="#e53935"
                    d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
                  />
                  <path
                    fill="#4caf50"
                    d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
                  />
                  <path
                    fill="#1565c0"
                    d="M43.611 20.083 43.595 20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
                  />
                </svg>
                Google
              </button>
            </div>
          </div>
          <div className="mx-auto md:p-6 md:w-1/2">
            <div className="flex flex-wrap justify-between">
              <h1 className="text-2xl text-seagreen hover:text-seagreen transition duration-500 p-4">
                <i className="fas fa-sign-in-alt fa-fw fa-lg"></i>
                Login
              </h1>
              <div
                href="#home"
                className="mt-8 text-seagreen hover:text-orange-600 transition duration-500"
              >
                <svg
                  className=" w-6 h-6 inline-block align-bottom"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
                <Link to="/"> Back to Home</Link>
                <i className="fas fa-chevron-circle-left fa-fw"></i>
              </div>
            </div>

            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <form onSubmit={handleSignIn}>
                <div className="mb-8">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    <span className="text-seagreen">&nbsp;*</span>
                    email
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="block pr-10 shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-seagreen transition duration-500 ease-in-out"
                      placeholder="your@email"
                    />
                  </div>
                </div>

                <div className="mb-8">
                  <label
                    htmlFor="password"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    <span className="text-seagreen">&nbsp;*</span>
                    Password
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                      </svg>
                    </div>
                    <input
                      name="password"
                      id="password"
                      type="password"
                      className="block pr-10 shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-seagreen transition duration-500 ease-in-out"
                    />
                  </div>
                  <p className="mt-4 italic text-gray-500 font-light text-xs">
                    <span className="font-bold text-red-600">{error}</span>
                  </p>
                </div>

                <div className="mb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <label
                        className="block text-gray-500 font-bold"
                        htmlFor="remember"
                      >
                        <input
                          className="ml-2 leading-tight"
                          type="checkbox"
                          id="remember"
                          name="remember"
                        />
                        <span className="text-sm">remember me</span>
                      </label>
                    </div>
                    <div>
                      <a
                        className="font-bold text-sm text-seagreen hover:text-orange-800"
                        href="#password-request"
                      >
                        Forgot password
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mb-4 text-center">
                  <button
                    className="transition block w-full duration-500 bg-seagreen hover:bg-darkseagreen text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
                <hr />
                <div className="mt-8">
                  <p className="text-sm">
                    Do not have an account?{" "}
                    <Link
                      to="/signup"
                      className="font-bold p-2 text-sm text-seagreen hover:text-orange-800"
                      href="#register"
                    >
                      Sign up
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
