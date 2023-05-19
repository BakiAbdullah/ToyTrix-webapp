import { Link } from "react-router-dom";
import "../ErrorPage/ErrorPage.css";

const ErrorPage = () => {
  return (
    <div>
      <div>
        <div className="flex errorBg items-center justify-center min-h-screen bg-seagreen  bg-fixed bg-cover bg-bottom error-bg">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 offset-sm-2 text-gray-50 text-center -mt-52">
                <div className="relative ">
                  <h1 className="relative text-9xl tracking-tighter-less text-shadow font-sans font-bold">
                    <span>4</span>
                    <span>0</span>
                    <span>4</span>
                  </h1>
                  <span className="absolute text-xl top-0  -ml-8 -mt-2  text-gray-300 font-semibold">
                    Oops!
                  </span>
                </div>
                <h5 className="text-gray-300 text-xl font-semibold -mr-10 -mt-1">
                  Page not found
                </h5>
                <p className="text-gray-100 text-2xl mt-2 mb-10">
                  we are sorry, but the page you requested was not found
                </p>
                <button className="btn rounded-full mr-5 border-none">
                  <Link to="/">Go to Home </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
