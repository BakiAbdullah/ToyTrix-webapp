
const MyToyTable = ({ singleToy }) => {

  const {
    imgUrl,
    toyName,
    seller,
    sellerEmail,
    price,
    rating,
    subCategory,
    availableQuantity,
    description,
  } = singleToy;
  return (
    <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
      <td className="py-3 px-6 text-left">
        <div className="flex items-center">
          <div className="mr-2">
            <img className="w-16 h-16" src={imgUrl} />
          </div>
        </div>
      </td>

      <td className="py-3 px-6 text-left">
        <div className="flex items-center justify-center">
          <span>{toyName}</span>
        </div>
      </td>
      <td className="py-3 px-6 text-left">
        <div className="flex items-center justify-center">
          <span>{seller}</span>
        </div>
      </td>
      <td className="py-3 px-6 text-center">
        <div className="flex items-center justify-center">
          <span>{sellerEmail}</span>
        </div>
      </td>
      <td className="py-3 px-6 text-center">
        <span>{subCategory}</span>
      </td>
      <td className="py-3 px-6 text-left">
        <div className="flex items-center justify-center">
          <span>${price}</span>
        </div>
      </td>
      <td className="py-3 px-6 text-left">
        <div className="flex items-center justify-center">
          <span>{availableQuantity}/Piece</span>
        </div>
      </td>
      <td className="py-3 px-6 text-left">
        <div className="flex items-center justify-center">
          <span>{description.slice(0, 20)}</span>
        </div>
      </td>
      <td className="py-3 px-6 text-left">
        <div className="flex items-center justify-center">
          <span>{rating}</span>
        </div>
      </td>
      <td className="py-3 px-6 text-center">
        <div className="flex item-center justify-center">
          <button className="w-5 mr-2 transform hover:text-seagreen hover:scale-110">
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
          <button className="w-5 mr-2 transform text-red-500 hover:scale-110">
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
  );
};

export default MyToyTable;