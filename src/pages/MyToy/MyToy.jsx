const MyToy = () => {
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
                  <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <div className="mr-2">
                          <img
                            className="w-16 h-16"
                            src="https://img.icons8.com/color/48/000000/php.png"
                          />
                        </div>
                      </div>
                    </td>

                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center justify-center">
                        <span>Star War Darth</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center justify-center">
                        <span>Kylan Dorsey</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <div className="flex items-center justify-center">
                        <span>abd@gmail.com</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <span>Star War</span>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center justify-center">
                        <span>$134</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center justify-center">
                        <span>23</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center justify-center">
                        <span>Kylan Dorsey star was sdf..</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center justify-center">
                        <span>5</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <div className="flex item-center justify-center">
                        <button className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                            />
                          </svg>
                        </button>
                        <button className="w-4 mr-2 transform text-red-500 hover:scale-110">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <div className="mr-2">
                          <img
                            className="w-16 h-16"
                            src="https://img.icons8.com/color/48/000000/php.png"
                          />
                        </div>
                      </div>
                    </td>

                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center justify-center">
                        <span>Star War Darth</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center justify-center">
                        <span>Kylan Dorsey</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <div className="flex items-center justify-center">
                        <span>abd@gmail.com</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <span>Star War</span>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center justify-center">
                        <span>$134</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center justify-center">
                        <span>23</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center justify-center">
                        <span>Kylan Dorsey star was sdf..</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center justify-center">
                        <span>5</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <div className="flex item-center justify-center">
                        <button className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                            />
                          </svg>
                        </button>
                        <button className="w-4 mr-2 transform text-red-500 hover:scale-110">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
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
