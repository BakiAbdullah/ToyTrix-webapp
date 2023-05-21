import { useContext, useEffect, useState } from "react";
import useTitle from "../../CustomHooks/UseTitleHook";
import { AuthContext } from "../../provider/ContextProvider";
import MyToyTable from "./MyToyTable";

const MyToy = () => {
  const { user } = useContext(AuthContext);
  const [myToyInfo, SetMyToyInfo] = useState([]);
  const url = `http://localhost:3000/mytoy?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        SetMyToyInfo(data);
      });
  }, [url]);

  // Dynamic Title Hook
  useTitle("MyToy");

  return (
    <div>
      <div className="overflow-x-auto">
        <div className="min-w-screen min-h-screen flex items-center justify-center bg-gray-100 overflow-hidden">
          <div className="w-full lg:max-w-max">
            <h1 className="font-bold text-center text-5xl mb-12">My Toys </h1>
            <div className="bg-white shadow-md rounded my-6">
              <table className="min-w-max w-full table-auto">
                <thead>
                  <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left">Toy Photo</th>
                    <th className="py-3 px-6 text-left">Toy Name</th>
                    <th className="py-3 px-6 text-left">Seller Name</th>
                    <th className="py-3 px-6 text-left">Seller email</th>
                    <th className="py-3 px-6 text-center">Category</th>
                    <th className="py-3 px-6 text-center">Price</th>
                    <th className="py-3 px-6 text-center">Quantity</th>
                    <th className="py-3 px-6 text-center">Description</th>
                    <th className="py-3 px-6 text-center">Rating</th>
                    <th className="py-3 px-6 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                  {myToyInfo.map((singleToy) => (
                    <MyToyTable
                      key={singleToy._id}
                      singleToy={singleToy}
                    ></MyToyTable>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyToy;
