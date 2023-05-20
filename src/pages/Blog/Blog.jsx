import { Link } from "react-router-dom";


const Blog = () => {
    return (
      <div>
        <section className="text-gray-600 bg-gray-50  body-font  overflow-hidden">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-12">
              <div className="p-12 md:w-1/2 flex flex-col items-start">
                <span className="inline-block py-1 px-2 rounded bg-green-200 text-seagreen text-opacity-75 text-xs font-medium tracking-widest">
                  CATEGORY / Backend
                </span>
                <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-800 mt-4 mb-4">
                  What is express js? What is Nest JS ?
                </h2>
                <p className="leading-relaxed mb-8">
                  Live-edge letterpress cliche, salvia fanny pack humblebrag
                  narwhal portland. VHS man braid palo santo hoodie brunch trust
                  fund. Bitters hashtag waistcoat fashion axe chia unicorn.
                  Plaid fixie chambray 90s, slow-carb etsy tumeric. Cray pug you
                  probably have not heard of them hexagon kickstarter craft beer
                  pork chic.
                </p>
                <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-800 border-opacity-75 mt-auto w-full">
                  <Link className="text-seagreen inline-flex items-center">
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                  <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-seagreen">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    1.2K
                  </span>
                  <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                    6
                  </span>
                </div>
                <Link className="inline-flex items-center">
                  <img
                    alt="blog"
                    src="https://www.chrisjmendez.com/content/images/2018/12/ExpressJS.jpg"
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-500">
                      Holden Caulfield
                    </span>
                    <span className="text-gray-500 text-xs tracking-widest mt-0.5">
                      UI DEVELOPER
                    </span>
                  </span>
                </Link>
              </div>

              <div className="p-12 md:w-1/2 flex flex-col items-start">
                <span className="inline-block py-1 px-2 rounded bg-green-200 text-seagreen text-opacity-75 text-xs font-medium tracking-widest">
                  CATEGORY / Database
                </span>
                <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-800 mt-4 mb-4">
                  Compare SQL and NoSQL databases?
                </h2>
                <p className="leading-relaxed mb-8">
                  Live-edge letterpress cliche, salvia fanny pack humblebrag
                  narwhal portland. VHS man braid palo santo hoodie brunch trust
                  fund. Bitters hashtag waistcoat fashion axe chia unicorn.
                  Plaid fixie chambray 90s, slow-carb etsy tumeric. Cray pug you
                  probably have not heard of them hexagon kickstarter craft beer
                  pork chic.
                </p>
                <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-800 border-opacity-75 mt-auto w-full">
                  <Link className="text-seagreen inline-flex items-center">
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                  <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-seagreen">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    1.2K
                  </span>
                  <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                    6
                  </span>
                </div>
                <Link className="inline-flex items-center">
                  <img
                    alt="blog"
                    src="https://trainings.nicolasfazio.ch/wp-content/uploads/2020/04/d234566e9d.png"
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-500">
                      Holden Caulfield
                    </span>
                    <span className="text-gray-500 text-xs tracking-widest mt-0.5">
                      UI DEVELOPER
                    </span>
                  </span>
                </Link>
              </div>

              <div className="p-12 md:w-1/2 flex flex-col items-start">
                <span className="inline-block py-1 px-2 rounded bg-green-200 text-seagreen text-opacity-75 text-xs font-medium tracking-widest">
                  CATEGORY / Security
                </span>
                <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-800 mt-4 mb-4">
                  What is an access token and refresh token? How do they work
                  and where should we store them on the client-side?
                </h2>
                <p className="leading-relaxed mb-8">
                  Live-edge letterpress cliche, salvia fanny pack humblebrag
                  narwhal portland. VHS man braid palo santo hoodie brunch trust
                  fund. Bitters hashtag waistcoat fashion axe chia unicorn.
                  Plaid fixie chambray 90s, slow-carb etsy tumeric. Cray pug you
                  probably have not heard of them hexagon kickstarter craft beer
                  pork chic.
                </p>
                <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-800 border-opacity-75 mt-auto w-full">
                  <Link className="text-seagreen inline-flex items-center">
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                  <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-seagreen">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    1.2K
                  </span>
                  <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                    6
                  </span>
                </div>
                <Link className="inline-flex items-center">
                  <img
                    alt="blog"
                    src="https://miro.medium.com/v2/resize:fit:0/1*qMC7g40mcQmeI3r-hMjY8Q.png"
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-500">
                      Holden Caulfield
                    </span>
                    <span className="text-gray-500 text-xs tracking-widest mt-0.5">
                      UI DEVELOPER
                    </span>
                  </span>
                </Link>
              </div>

              <div className="p-12 md:w-1/2 flex flex-col items-start">
                <span className="inline-block py-1 px-2 rounded bg-green-200 text-seagreen text-opacity-75 text-xs font-medium tracking-widest">
                  CATEGORY / database
                </span>
                <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-800 mt-4 mb-4">
                  What is MongoDB aggregate and how does it work?
                </h2>
                <p className="leading-relaxed mb-8">
                  Live-edge letterpress cliche, salvia fanny pack humblebrag
                  narwhal portland. VHS man braid palo santo hoodie brunch trust
                  fund. Bitters hashtag waistcoat fashion axe chia unicorn.
                  Plaid fixie chambray 90s, slow-carb etsy tumeric. Cray pug you
                  probably have not heard of them hexagon kickstarter craft beer
                  pork chic.
                </p>
                <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-800 border-opacity-75 mt-auto w-full">
                  <Link className="text-seagreen inline-flex items-center">
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                  <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-seagreen">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    1.2K
                  </span>
                  <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                    6
                  </span>
                </div>
                <Link className="inline-flex items-center">
                  <img
                    alt="blog"
                    src="https://www.tutorialsteacher.com/Content/images/home/mongodb.svg"
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-500">
                      Holden Caulfield
                    </span>
                    <span className="text-gray-500 text-xs tracking-widest mt-0.5">
                      UI DEVELOPER
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};

export default Blog;