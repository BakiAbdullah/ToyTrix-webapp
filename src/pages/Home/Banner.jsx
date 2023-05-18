import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import banner from '/banner.jpg'
import banner2 from '/banner2.jpg'
import banner5 from '/banner5.jpg'
import playing2 from '/playing2.jpg'

const Banner = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="carousel w-full max-h-screen">
        <div id="slide1" className="carousel-item relative w-full ">
          <img src={banner} className="w-full object-cover" />
          <div className="absolute flex justify-center  items-center gap-5 left-0 h-full w-full top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div
              data-aos="zoom-in"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              className="text-white space-y-7 text-center w-1/2"
            >
              <h2 className="lg:text-7xl font-extrabold">
                Unlock the Magic of Play with Toytrix!{" "}
              </h2>
              <p className="lg:text-6xl ">
                Big Sale <span className="font-bold text-pink">40% Off</span>{" "}
              </p>
              <div>
                <button
                  data-aos="zoom-in"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="false"
                  className="btn rounded-full bg-pink mr-5 hover:bg-gainsboro border-none"
                >
                  Show Now
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="text-3xl text-gainsboro">
              ❮
            </a>
            <a href="#slide2" className="text-3xl text-gainsboro">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={banner2} className="w-full object-cover" />
          <div className="absolute flex justify-center  items-center gap-5 left-0 h-full w-full top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div
              data-aos="zoom-in"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              className="text-white space-y-7 text-center w-1/2"
            >
              <h2 className="lg:text-7xl leading-loose font-bold">
                Unlock the Magic of Play with{" "}
                <span className="text-pink">Toytrix!</span>
              </h2>
              <p className="lg:text-6xl ">Big Sale 40% Off </p>
              <div>
                <button
                  data-aos="fase-up"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="false"
                  className="btn rounded-full bg-pink mr-5 hover:bg-gainsboro border-none"
                >
                  Show Now
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="text-3xl text-gainsboro">
              ❮
            </a>
            <a href="#slide3" className="text-3xl text-gainsboro">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={banner5} className="w-full object-cover" />
          <div className="absolute flex justify-center  items-center gap-5 left-0 h-full w-full top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              className="text-white space-y-7 text-center w-1/2"
            >
              <h2 className="lg:text-7xl font-bold">
                Unlock the Magic of Play with{" "}
                <span className="text-pink">Toytrix!</span>
              </h2>
              <p className="lg:text-6xl ">Big Sale 40% Off </p>
              <div>
                <button
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="false"
                  className="btn rounded-full bg-pink mr-5 hover:bg-gainsboro border-none"
                >
                  Show Now
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="text-3xl text-gainsboro">
              ❮
            </a>
            <a href="#slide4" className="text-3xl text-gainsboro">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={playing2} className="w-full object-cover" />
          <div className="absolute flex justify-center  items-center gap-5 left-0 h-full w-full top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              className="text-white space-y-7 text-center w-1/2"
            >
              <h2 className="lg:text-7xl font-bold">
                Unlock the Magic of Play with{" "}
                <span className="text-pink">Toytrix!</span>
              </h2>
              <p className="lg:text-6xl ">Big Sale 40% Off </p>
              <div>
                <button
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="false"
                  className="btn rounded-full bg-pink mr-5 hover:bg-gainsboro border-none"
                >
                  Show Now
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="text-3xl text-gainsboro">
              ❮
            </a>
            <a href="#slide4" className="text-3xl text-gainsboro">
              ❯
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
