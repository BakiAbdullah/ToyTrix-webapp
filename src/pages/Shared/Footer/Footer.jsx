import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import logo from '/logo.png'

const Footer = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first">
            <div
              className="lg:w-1/4 md:w-1/2 w-full px-4"
            >
              <h2 className="title-font text-xl font-bold text-gray-900 tracking-widest mb-3">
                Information
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <p className="text-gray-600 hover:text-gray-800">
                    Privacy Policy
                  </p>
                </li>
                <li>
                  <p className="text-gray-600 hover:text-gray-800">
                    Terms & Condition
                  </p>
                </li>
                <li>
                  <p className="text-gray-600 hover:text-gray-800">
                    Faq & Help
                  </p>
                </li>
                <li>
                  <p className="text-gray-600 hover:text-gray-800">
                    Refund & Return
                  </p>
                </li>
              </nav>
            </div>
            <div
              className="lg:w-1/4 md:w-1/2 w-full px-4"
            >
              <h2 className="title-font text-xl font-bold text-gray-900 tracking-widest mb-3">
                Quick Links
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <p className="text-gray-600 hover:text-gray-800">support</p>
                </li>
                <li>
                  <p className="text-gray-600 hover:text-gray-800">Helpline</p>
                </li>
                <li>
                  <p className="text-gray-600 hover:text-gray-800">About us</p>
                </li>
                <li>
                  <p className="text-gray-600 hover:text-gray-800">Wishlist</p>
                </li>
              </nav>
            </div>
            <div
              className="lg:w-1/4 md:w-1/2 w-full px-4"
            >
              <h2 className="title-font text-xl font-bold text-gray-900 tracking-widest mb-3">
                Contact Us
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <p className="text-gray-600 hover:text-gray-800">
                    Address: 70 Kenmare St #80, <br /> New York, NY 10012, USA
                  </p>
                </li>
                <li>
                  <p className="text-gray-600 hover:text-gray-800">
                    Phone: +1 212-226-7030
                  </p>
                </li>
                <li>
                  <p className="text-gray-600 hover:text-gray-800">
                    email: demo@gmail.com
                  </p>
                </li>
              </nav>
            </div>
            <div
              className="lg:w-1/4 md:w-1/2 w-full px-4"
            >
              <h2 className="title-font text-xl font-bold text-gray-900 tracking-widest mb-3">
                Signup for newsletter
              </h2>
              <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                <div className="relative w-50 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                  <label
                    htmlFor="footer-field"
                    className="leading-7 rounded-full text-sm text-gray-600"
                  ></label>
                  <input
                    type="text"
                    id="footer-field"
                    name="footer-field"
                    className="w-full bg-gainsboro bg-opacity-50 rounded-full border border-pink focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-pink border-0 py-2 px-3 focus:outline-none hover:bg-gainsboro rounded-full">
                  Subscribe
                </button>
              </div>
              <p className="text-gray-500 text-sm mt-2 md:text-left text-center">
                Bitters chicharrones fanny pack
                <br className="lg:block hidden" /> waistcoat green juice
              </p>
            </div>
          </div>
        </div>
        <div className="bg-lightblue">
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <div className="flex items-center justify-center">
              <p className="flex title-font font-medium items-center md:justify-start justify-center">
                <img
                  className="rounded-full h-[50px] w-[50px]"
                  src={logo}
                  alt=""
                />
                <span className="ml-3 text-2xl font-bold text-white">
                  ToyTrix
                </span>
              </p>
            </div>
            <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
              © 2020 Toytrix —
              <p
                href="https://twitter.com/knyttneve"
                rel="noopener noreferrer"
                className="text-gray-600 ml-1"
                target="_blank"
              >
                @playtoy
              </p>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <p className="text-white">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </p>
              <p className="ml-3 text-white">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </p>
              <p className="ml-3 text-white">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </p>
              <p className="ml-3 text-white">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </p>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;