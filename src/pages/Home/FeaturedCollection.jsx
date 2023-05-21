import car from "/car.jpg";
import war1 from "/war1.jpg";
import city22 from "/city22.jpg";
import legoArc from "/legoArc.jpg";
const FeaturedCollection = () => {
  return (
    <>
      <div className="relative flex flex-col items-center mt-24 justify-center text-center">
        <h2 className="font-bold text-5xl mb-5">Featured Products</h2>
        <div className="bg-pink h-[6px] w-[70px] mb-8"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-4 px-12">
        <div
          data-aos="zoom-in-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="600"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          className="flex flex-col justify-center items-center max-w-md mx-auto my-8"
        >
          <div className="bg-gray-300 h-64 w-full  shadow-md bg-cover bg-center">
            <img className="h-64 w-96" src={war1} alt="" />
          </div>
          <div className="w-56 md:w-64 bg-white -mt-10 shadow-lg  overflow-hidden">
            <div className="py-2 text-center font-bold uppercase tracking-wide text-gray-800">
              Nike Revolt
            </div>
            <div className="flex items-center justify-between py-2 px-3 bg-gray-400">
              <h1 className="text-gray-800 font-bold ">$129</h1>
              <button className=" bg-gray-800 text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700">
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="600"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          className="flex flex-col justify-center items-center max-w-md mx-auto my-8"
        >
          <div className="bg-gray-300 h-64 w-full  shadow-md bg-cover bg-center">
            <img className="h-64 w-96" src={city22} alt="" />
          </div>
          <div className="w-56 md:w-64 bg-white -mt-10 shadow-lg  overflow-hidden">
            <div className="py-2 text-center font-bold uppercase tracking-wide text-gray-800">
              Nike Revolt
            </div>
            <div className="flex items-center justify-between py-2 px-3 bg-gray-400">
              <h1 className="text-gray-800 font-bold ">$129</h1>
              <button className=" bg-gray-800 text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700">
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="600"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          className="flex flex-col justify-center items-center max-w-md mx-auto my-8"
        >
          <div className="bg-gray-300 h-64 w-full  shadow-md bg-cover bg-center">
            <img className="h-64 w-96" src={legoArc} alt="" />
          </div>
          <div className="w-56 md:w-64 bg-white -mt-10 shadow-lg  overflow-hidden">
            <div className="py-2 text-center font-bold uppercase tracking-wide text-gray-800">
              Nike Revolt
            </div>
            <div className="flex items-center justify-between py-2 px-3 bg-gray-400">
              <h1 className="text-gray-800 font-bold ">$129</h1>
              <button className=" bg-gray-800 text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700">
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="600"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          className="flex flex-col justify-center items-center max-w-md mx-auto my-8"
        >
          <div className="bg-gray-300 h-54 w-auto shadow-md bg-cover bg-center">
            <img className="h-64 w-96" src={car} alt="" />
          </div>
          <div className="w-56 md:w-64 bg-white -mt-10 shadow-lg  overflow-hidden">
            <div className="py-2 text-center font-bold uppercase tracking-wide text-gray-800">
              Nike Revolt
            </div>
            <div className="flex items-center justify-between py-2 px-3 bg-gray-400">
              <h1 className="text-gray-800 font-bold ">$129</h1>
              <button className=" bg-gray-800 text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedCollection;
