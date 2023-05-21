import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyToyUpdateForm = () => {
  const toyFormData = useLoaderData();
  const { _id } = toyFormData;

  const handleUpdateToy = (e) => {
    e.preventDefault();
    const form = e.target;
    const price = form.price.value;
    const availableQuantity = form.availableQuantity.value;
    const description = form.description.value;

    const toyUpdateInfo = {
      price,
      availableQuantity,
      description,
    };
    console.log(toyUpdateInfo);

    // TODO: Update Toy

    const url = `https://toytrix-server.vercel.app/mytoy/${_id}`;
    fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toyUpdateInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.updatedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Toy Updated Successfully",
          });
        }
      });
  };

  return (
    <div className="flex mt-32 justify-center items-center  bg-white">
      <div
        data-aos="zoom-in-right"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        className="container mx-auto"
      >
        <form
          onSubmit={handleUpdateToy}
          className="w-2/3 mx-auto p-8 my-4 md:px-12 rounded-2xl shadow-2xl"
        >
          <div className="flex">
            <h1 className="font-bold uppercase text-5xl">Update Your Toy</h1>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
            <input
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              name="price"
              placeholder="Toy Price"
            />
            <input
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              name="availableQuantity"
              placeholder="Toy Quantity"
            />
          </div>
          <div className="my-4">
            <textarea
              placeholder="Toy Description"
              name="description"
              className="w-full h-32 resize-none bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>
          <div className="my-2 w-1/2 lg:w-1/4">
            <button
              className="uppercase text-sm font-bold tracking-wide bg-pink text-white p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline"
            >
              Update Toy
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyToyUpdateForm;
