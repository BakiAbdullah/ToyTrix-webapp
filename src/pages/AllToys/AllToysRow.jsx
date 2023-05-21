
import { Link } from "react-router-dom";

const AllToysRow = ({ userToy, index }) => {
  const { _id, seller, toyName, subCategory, price, availableQuantity } =
    userToy;
  

  return (
    <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
      <td className="py-3 px-6 text-center">
        <div className="flex text-center">
          <span>{index + 1}</span>
        </div>
      </td>
      <td className="py-3 px-6 text-center">
        <div className="flex text-center">
          <span>{seller}</span>
        </div>
      </td>
      <td className="py-3 px-6 text-center">
        <div className="flex items-center justify-start">
          <span>{toyName}</span>
        </div>
      </td>
      <td className="py-3 px-6 text-center">
        <div className="flex items-center justify-center">
          <span>{subCategory}</span>
        </div>
      </td>
      <td className="py-3 px-6 text-center">
        <span>${price}</span>
      </td>
      <td className="py-3 px-6 text-left">
        <div className="flex items-center justify-center">
          <span>{availableQuantity}</span>
        </div>
      </td>
      <td className="py-3 px-6 text-center">
        <div className="flex item-center justify-center">
          <Link to={`/alltoys/toy/${_id}`}>
            <button
              className="px-5 py-2 rounded transition duration-300 bg-pink hover:bg-gainsboro text-white focus:outline-none"
            >
              View Details
            </button>
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default AllToysRow;
