
import useTitle from "../../CustomHooks/UseTitleHook";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/ContextProvider";
import AllToysRow from "./AllToysRow";

const AllToys = () => {
  useTitle("All Toys");

  const { user } = useContext(AuthContext);
  const [userToys, setUserToys] = useState([]);
  const dataByUserEmail = `http://localhost:3000/alltoys?${user?.email}`;
  useEffect(() => {
    fetch(dataByUserEmail)
      .then((res) => res.json())
      .then((data) => {
        setUserToys(data);
      });
  }, []);
  console.log(userToys);

  return (
    <div>
      <div className="overflow-x-auto">
        <div className="min-w-screen min-h-screen flex items-center justify-center bg-gray-100 overflow-hidden">
          <div className="w-full lg:max-w-7xl mb-12">
            <h1 className="font-bold text-center text-5xl mt-12 mb-12">All Toys</h1>
            {/* input field */}
            <div className="relative">
              <input
                className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-1/3 py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Search Toys"
              />
              <div className="absolute left-0 inset-y-0 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 m-3 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            <div className="bg-white shadow-md rounded my-6">
              <table className="min-w-max w-full table-auto">
                <thead>
                  <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left">SL</th>
                    <th className="py-3 px-6 text-left">Seller Name</th>
                    <th className="py-3 px-6 text-left">Toy Name</th>
                    <th className="py-3 px-6 text-center">Category</th>
                    <th className="py-3 px-6 text-center">Price</th>
                    <th className="py-3 px-6 text-center">Quantity</th>
                    <th className="py-3 px-6 text-center">Details</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                  {userToys.map((userToy, index) => (
                    <AllToysRow
                    key={userToy._id}
                    userToy={userToy}
                    index={index}
                    ></AllToysRow>
                  ))}
                  
                </tbody>
              </table>
            </div>
            <div>
              <p className="text-sm leading-5 text-gray-700">
                Showing
                <span className="font-bold text-gray-600"> 1 </span>
                to
                <span className="font-bold text-gray-600"> 20 </span>
                of
                <span className="font-bold text-gray-600"> </span>
                many results
              </p>
              {/* 1 to 20 of rest results */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllToys;
