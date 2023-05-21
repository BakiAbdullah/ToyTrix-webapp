
import { useLoaderData,  } from "react-router-dom";

const ToyDetails = () => {
  const data = useLoaderData()
  console.log(data)

  const {
    imgUrl,
    toyName,
    seller,
    sellerEmail,
    price,
    rating,
    availableQuantity,
    description,
  } = data;
  
  
  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-6 max-w-xs md:max-w-6xl mx-auto border-8 border-gray-200 bg-white">
        <div className="w-full md:w-1/2 bg-white grid place-items-center">
          <img src={imgUrl} alt="tailwind logo" className="rounded-xl" />
        </div>
        <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
          <div className="flex justify-between item-center">
            <p className="text-gray-500 font-medium hidden md:block">
              <strong>Seller</strong> / {seller}
            </p>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <p className="text-gray-600 font-bold text-sm ml-1">
                {rating}
                <span className="text-gray-500 font-normal">(76 reviews)</span>
              </p>
            </div>
            <div className=""></div>
            <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-600 hidden md:block">
              Available Quantity / {availableQuantity}
            </div>
          </div>
          <h3 className="font-black text-gray-800 md:text-3xl text-xl">
            {toyName}
          </h3>
          <p className="md:text-lg text-gray-500 text-base">{description}</p>
          <p className="text-gray-500 text-base">
            <strong>Seller Email:</strong> {sellerEmail}
          </p>
          <p className="text-xl font-black text-gray-800">
            ${price}
            <span className="font-normal text-gray-600 text-base">/piece</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;