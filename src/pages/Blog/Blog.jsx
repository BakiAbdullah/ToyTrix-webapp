import { Link } from "react-router-dom";
import useTitle from "../../CustomHooks/UseTitleHook";

const Blog = () => {
  useTitle("Blog");
  return (
    <div>
      <section className="text-gray-600 bg-gray-50  body-font  overflow-hidden">
        <div className="container px-12 py-24 mx-auto">
          <div className="flex flex-wrap -m-12">
            <div
              data-aos="zoom-in-right"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              className="p-12 md:w-1/2 flex flex-col items-start"
            >
              <span className="inline-block py-1 px-2 rounded bg-green-200 text-seagreen text-opacity-75 text-xs font-medium tracking-widest">
                CATEGORY / Backend
              </span>
              <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-800 mt-4 mb-4">
                What is express js? What is Nest JS ?
              </h2>
              <p className="leading-relaxed mb-8">
                <strong>Express Js:</strong> Express is a fast and lightweight
                open-source application development framework based on Node.js.
                It is an excellent choice for creating small to medium-sized web
                applications and APIs, due to its simple and easy-to-learn
                approach. Express.js stands out for its impressive performance,
                with a middleware architecture enabling efficient communication
                between the server and client. <br />
                <strong> Nest Js:</strong> NestJS and Express.js are both
                Node.js based frameworks.It is a progressive Node.js framework
                for building efficient and scalable server-side applications. It
                is built with TypeScript and takes advantage of modern
                JavaScript features, design patterns, and architectural
                concepts. NestJS is heavily inspired by Angular, borrowing many
                of its concepts and features, such as decorators, dependency
                injection, and modular structure.
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

            <div
              data-aos="zoom-in-left"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              className="p-12 md:w-1/2 flex flex-col items-start"
            >
              <span className="inline-block py-1 px-2 rounded bg-green-200 text-seagreen text-opacity-75 text-xs font-medium tracking-widest">
                CATEGORY / Database
              </span>
              <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-800 mt-4 mb-4">
                Compare SQL and NoSQL databases?
              </h2>
              <p className="leading-relaxed mb-8">
                <strong>SQL Database:</strong> Structured Query Language (SQL)
                is a programming language that allows both technical and
                non-technically-minded users to query, manipulate, and change
                data in a relational database. Organized into columns and rows
                within a table, SQL databases use a relational model that work
                best with well-defined structured data, such as names and
                quantities, in which relations exist between different entities.
                Within a SQL database, tables are linked through foreign keys
                that form relations between different tables and fields, such as
                customers and orders or employees and departments. <br />
                <strong>NoSQL Database:</strong> NoSQL databases are
                non-relational databases that store data in a manner other than
                the tabular relations used within SQL databases. While SQL
                databases are best used for structured data, NoSQL databases are
                suitable for structured, semi-structured, and unstructured data.
                As a result, NoSQL databases do not follow a rigid schema but
                instead have more flexible structures to accommodate their
                data-types. Furthermore, instead of using SQL to query the
                database, NoSQL databases use varying query languages (some do
                not even have a query language).
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
                    UX DEVELOPER
                  </span>
                </span>
              </Link>
            </div>

            <div
              data-aos="zoom-in-right"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              className="p-12 md:w-1/2 flex flex-col items-start"
            >
              <span className="inline-block py-1 px-2 rounded bg-green-200 text-seagreen text-opacity-75 text-xs font-medium tracking-widest">
                CATEGORY / Security
              </span>
              <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-800 mt-4 mb-4">
                What is an access token and refresh token? How do they work and
                where should we store them on the client-side?
              </h2>
              <p className="leading-relaxed mb-8">
                <strong>Access token:</strong> When a user logins in, the
                authorization server issues an access token, which is an
                artifact that client applications can use to make secure calls
                to an API server. When a client application needs to access
                protected resources on a server on behalf of a user, the access
                token lets the client signal to the server that it has received
                authorization by the user to perform certain tasks or access
                certain resources. <br />
                <strong>Refresh token:</strong> Access tokens may be valid for a
                short amount of time. Once they expire, client applications can
                use a refresh token to refresh the access token. That is, a
                refresh token is a credential artifact that lets a client
                application get new access tokens without having to ask the user
                to log in again.{" "}
                <em>
                  We can store JWT Tokens in client sides Local or Session
                  Strorage also the best we can is to store then in http only
                  Cookies.
                </em>
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

            <div
              data-aos="zoom-in-left"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              className="p-12 md:w-1/2 flex flex-col items-start"
            >
              <span className="inline-block py-1 px-2 rounded bg-green-200 text-seagreen text-opacity-75 text-xs font-medium tracking-widest">
                CATEGORY / database
              </span>
              <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-800 mt-4 mb-4">
                What is MongoDB aggregate and how does it work?
              </h2>
              <p className="leading-relaxed mb-8">
                When MongoDB users want to gather metrics from a MongoDB
                database, aggregation of MongoDB is the best tool for this. In
                MongoDB, aggregation can be defined as the operation that is
                used for processing various types of data in the collection,
                which returns a calculated result. The concept of aggregation
                mainly clusters out your data from multiple different documents
                which are then used and operates in lots of ways (on these
                clustered data) to return a combined result which can bring new
                information to the existing database. You can relate aggregation
                to that of the count(*) along with the group by used in SQL
                since both are equivalent in terms of the working.
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
