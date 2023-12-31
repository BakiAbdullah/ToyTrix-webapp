import { useEffect } from 'react';
import starwar1 from '/starwar1.jpg'
import starwar2 from '/starwar2.jpg'
import car3 from '/car3.jpg'
import city5 from '/city5.jpg'
import AOS from "aos";
import "aos/dist/aos.css";

const Gallery = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div className=" animated fadeIn faster flex justify-center items-center outline-none focus:outline-none bg-no-repeat bg-center bg-cover">
        <div className="relative my-28 flex flex-col items-center justify-center ">
          <h2 className="font-bold text-5xl mb-5">Products Gallery</h2>
          <div className='bg-pink h-[6px] w-[70px] mb-8'></div>
          <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:px-10 gap-5">
            {/* 1st Card */}
            <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="800"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-anchor-placement="top-bottom"
              data-aos-once="false"
              className="max-w-md w-full shadow-lg rounded-xl p-6"
            >
              <div className="flex flex-col ">
                <div className="">
                  <div className="relative h-62 w-full mb-3">
                    <div className="absolute flex flex-col top-0 right-0 p-3">
                      <button className="transition ease-in duration-300 bg-gray-800  hover:text-purple-500 shadow hover:shadow-md text-gray-500 rounded-full w-8 h-8 text-center p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </button>
                    </div>
                    <img
                      src={starwar1}
                      alt="Just a flower"
                      className=" w-full   object-fill  rounded-2xl"
                    />
                  </div>
                  <div className="flex-auto justify-evenly">
                    <div className="flex flex-wrap ">
                      <div className="w-full text-sm flex items-center text-gray-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-pink mr-1"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-gray-400 whitespace-nowrap mr-3">
                          4.60
                        </span>
                      </div>
                      <div className="flex items-center w-full justify-between min-w-0 ">
                        <h2 className="text-xl font-semibold mr-auto cursor-pointer text-gray-600 truncate">
                          Star war toy lego
                        </h2>
                        <div className="flex items-center bg-darkseagreen text-white text-xs px-2 py-1 ml-3 rounded-lg">
                          INSTOCK
                        </div>
                      </div>
                    </div>
                    <div className="text-xl text-white font-semibold mt-1">
                      $240.00
                    </div>

                    <div className="flex-1 inline-flex items-center mb-3">
                      <span className="text-sailorblue whitespace-nowrap mr-3">
                        Price:
                      </span>
                      <div className="cursor-pointer font-bold text-gray-700 ">
                        $106
                      </div>
                    </div>

                    <div className="flex space-x-2 text-sm font-medium justify-between mt-5">
                      <button className="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-pink px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-pink ">
                        <span>View Details</span>
                      </button>
                      <button className="transition ease-in duration-300 bg-pink text-white  hover:shadow-lg  rounded-full w-9 h-9 text-center p-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className=""
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2nd Card */}
            <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-anchor-placement="top-bottom"
              data-aos-once="false"
              className="max-w-md w-full shadow-lg rounded-xl p-6"
            >
              <div className="flex flex-col ">
                <div className="">
                  <div className="relative h-62 w-full mb-3">
                    <div className="absolute flex flex-col top-0 right-0 p-3">
                      <button className="transition ease-in duration-300 bg-gray-800  hover:text-purple-500 shadow hover:shadow-md text-gray-500 rounded-full w-8 h-8 text-center p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </button>
                    </div>
                    <img
                      src={starwar2}
                      alt="Just a flower"
                      className=" w-full   object-fill  rounded-2xl"
                    />
                  </div>
                  <div className="flex-auto justify-evenly">
                    <div className="flex flex-wrap ">
                      <div className="w-full text-sm flex items-center text-gray-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-pink mr-1"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-gray-400 whitespace-nowrap mr-3">
                          4.60
                        </span>
                      </div>
                      <div className="flex items-center w-full justify-between min-w-0 ">
                        <h2 className="text-xl font-semibold mr-auto cursor-pointer text-gray-600 truncate">
                          Star war toy lego
                        </h2>
                        <div className="flex items-center bg-darkseagreen text-white text-xs px-2 py-1 ml-3 rounded-lg">
                          INSTOCK
                        </div>
                      </div>
                    </div>
                    <div className="text-xl text-white font-semibold mt-1">
                      $240.00
                    </div>

                    <div className="flex-1 inline-flex items-center mb-3">
                      <span className="text-sailorblue whitespace-nowrap mr-3">
                        Price:
                      </span>
                      <div className="cursor-pointer font-bold text-gray-700 ">
                        $106
                      </div>
                    </div>

                    <div className="flex space-x-2 text-sm font-medium justify-between mt-5">
                      <button className="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-pink px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-pink ">
                        <span>View Details</span>
                      </button>
                      <button className="transition ease-in duration-300 bg-pink text-white  hover:shadow-lg  rounded-full w-9 h-9 text-center p-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className=""
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3rd Card */}
            <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-anchor-placement="top-bottom"
              data-aos-once="false"
              className="max-w-md w-full shadow-lg rounded-xl p-6"
            >
              <div className="flex flex-col ">
                <div className="">
                  <div className="relative h-62 w-full mb-3">
                    <div className="absolute flex flex-col top-0 right-0 p-3">
                      <button className="transition ease-in duration-300 bg-gray-800  hover:text-purple-500 shadow hover:shadow-md text-gray-500 rounded-full w-8 h-8 text-center p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </button>
                    </div>
                    <img
                      src={car3}
                      alt="Just a flower"
                      className=" w-full   object-fill  rounded-2xl"
                    />
                  </div>
                  <div className="flex-auto justify-evenly">
                    <div className="flex flex-wrap ">
                      <div className="w-full text-sm flex items-center text-gray-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-pink mr-1"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-gray-400 whitespace-nowrap mr-3">
                          4.60
                        </span>
                      </div>
                      <div className="flex items-center w-full justify-between min-w-0 ">
                        <h2 className="text-xl font-semibold mr-auto cursor-pointer text-gray-600 truncate">
                          Car toy lego
                        </h2>
                        <div className="flex items-center bg-darkseagreen text-white text-xs px-2 py-1 ml-3 rounded-lg">
                          INSTOCK
                        </div>
                      </div>
                    </div>
                    <div className="text-xl text-white font-semibold mt-1">
                      $240.00
                    </div>

                    <div className="flex-1 inline-flex items-center mb-3">
                      <span className="text-sailorblue whitespace-nowrap mr-3">
                        Price:
                      </span>
                      <div className="cursor-pointer font-bold text-gray-700 ">
                        $106
                      </div>
                    </div>

                    <div className="flex space-x-2 text-sm font-medium justify-between mt-5">
                      <button className="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-pink px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-pink ">
                        <span>View Details</span>
                      </button>
                      <button className="transition ease-in duration-300 bg-pink text-white  hover:shadow-lg  rounded-full w-9 h-9 text-center p-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className=""
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4th Card */}
            <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1400"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-anchor-placement="top-bottom"
              data-aos-once="false"
              className="max-w-md w-full shadow-lg rounded-xl p-6"
            >
              <div className="flex flex-col ">
                <div className="">
                  <div className="relative h-62 w-full mb-3">
                    <div className="absolute flex flex-col top-0 right-0 p-3">
                      <button className="transition ease-in duration-300 bg-gray-800  hover:text-purple-500 shadow hover:shadow-md text-gray-500 rounded-full w-8 h-8 text-center p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </button>
                    </div>
                    <img
                      src={city5}
                      alt="Just a flower"
                      className=" w-full   object-fill  rounded-2xl"
                    />
                  </div>
                  <div className="flex-auto justify-evenly">
                    <div className="flex flex-wrap ">
                      <div className="w-full text-sm flex items-center text-gray-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-pink mr-1"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-gray-400 whitespace-nowrap mr-3">
                          4.60
                        </span>
                      </div>
                      <div className="flex items-center w-full justify-between min-w-0 ">
                        <h2 className="text-xl font-semibold mr-auto cursor-pointer text-gray-600 truncate">
                          City Toy lego
                        </h2>
                        <div className="flex items-center bg-darkseagreen text-white text-xs px-2 py-1 ml-3 rounded-lg">
                          INSTOCK
                        </div>
                      </div>
                    </div>
                    <div className="text-xl text-white font-semibold mt-1">
                      $240.00
                    </div>

                    <div className="flex-1 inline-flex items-center mb-3">
                      <span className="text-sailorblue whitespace-nowrap mr-3">
                        Price:
                      </span>
                      <div className="cursor-pointer font-bold text-gray-700 ">
                        $106
                      </div>
                    </div>

                    <div className="flex space-x-2 text-sm font-medium justify-between mt-5">
                      <button className="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-pink px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-pink ">
                        <span>View Details</span>
                      </button>
                      <button className="transition ease-in duration-300 bg-pink text-white  hover:shadow-lg  rounded-full w-9 h-9 text-center p-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className=""
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;