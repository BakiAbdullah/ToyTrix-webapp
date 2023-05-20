import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

const AddToy = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const toyCategories = [
    "Lego City",
    "Star War",
    "Lego Architecture",
    "Lego Cars",
  ];

  const handleAddToy = (e) => {
    e.preventDefault();
    const form = e.target;
    const sellerName = form.full_name.value;
    const email = form.email.value;
    const toyName = form.toy_name.value;
    const toyCategory = form.toyCategory.value;
    const toyPrice = parseInt(form.price.value);
    const toyDescription = form.description.value;
    const toyImage = form.photoURL.value;
    const toyRating = parseInt(form.rating.value);
    const toyQuantity = parseInt(form.quantity.value);

    const toyInfo = {
      sellerName,
      email,
      toyName,
      toyCategory,
      toyPrice,
      toyDescription,
      toyImage,
      toyRating,
      toyQuantity,
    };
    console.log(toyInfo);
  };

  const [selectedCategory, setselectedCategory] = useState(toyCategories[0]);

  const handleSelectedValue = (event) => {
    console.log(event.target.value);
    setselectedCategory(event.target.value);
  };

  return (
    <div>
      <div className="min-h-screen p-6 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <div
              data-aos="zoom-in"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="700"
              data-aos-easing="easeIn"
              data-aos-mirror="true"
              data-aos-once="false"
              className="text-center my-8"
            >
              <span className="font-bold text-5xl mb-5">Add a Toy</span>
            </div>

            <div
              data-aos="zoom-in"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="700"
              data-aos-easing="linear"
              data-aos-mirror="true"
              data-aos-once="false"
              className="bg-lightblue rounded shadow-xl p-4 px-4 md:p-8 mb-6"
            >
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div className="text-gray-700">
                  <p className="font-medium text-lg">To add your Toy item</p>
                  <p>Please fill out all the fields.</p>
                </div>

                <div className="lg:col-span-2">
                  <form
                    onSubmit={handleAddToy}
                    className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-4"
                  >
                    <div className="md:col-span-5">
                      <label className="text-white" htmlFor="full_name">
                        Seller Name
                      </label>
                      <input
                        type="text"
                        name="full_name"
                        id="full_name"
                        className="h-10 focus:outline-none border mt-1 rounded px-4 w-full bg-gray-50"
                      />
                    </div>

                    <div className="md:col-span-5">
                      <label className="text-white" htmlFor="email">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        className="h-10 focus:outline-none border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="email@domain.com"
                      />
                    </div>

                    <div className="md:col-span-3">
                      <label className="text-white" htmlFor="address">
                        Toy Name
                      </label>
                      <input
                        type="text"
                        name="toy_name"
                        id="toy_name"
                        className="h-10 focus:outline-none border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder=""
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="text-white" htmlFor="category">
                        Toy Category
                      </label>
                      <div>
                        <select
                          id="category"
                          name="toyCategory"
                          className="block w-full px-2 mt-1 h-10 focus:outline-none text-gray-700 bg-white border border-gray-300 rounded dark:bg-gray-800 dark:text-gray-300 focus:outline-none"
                          value={selectedCategory}
                          onChange={handleSelectedValue}
                        >
                          {toyCategories.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="md:col-span-5">
                      <label className="text-white" htmlFor="email">
                        Photo Url
                      </label>
                      <input
                        type="url"
                        name="photoURL"
                        id="photoURL"
                        required
                        className="h-10 focus:outline-none border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="photo url"
                      />
                    </div>

                    <div className="md:col-span-5">
                      <label className="text-white" htmlFor="address">
                        Rating
                      </label>
                      <input
                        type="number"
                        name="rating"
                        id="rating"
                        className="h-10 focus:outline-none border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder=""
                      />
                    </div>

                    <div className="md:col-span-3">
                      <label className="text-white" htmlFor="address">
                        Quantity Available
                      </label>
                      <input
                        type="number"
                        name="quantity"
                        id="quantity"
                        className="h-10 focus:outline-none border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder=""
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="text-white" htmlFor="address">
                        Price
                      </label>
                      <input
                        type="number"
                        name="price"
                        id="price"
                        className="h-10 focus:outline-none border mt-1 text-gray-600 rounded px-4 w-full bg-gray-50"
                        placeholder=""
                      />
                    </div>

                    <div className="md:col-span-5">
                      <label
                        className="text-white dark:text-gray-200"
                        htmlFor="passwordConfirmation"
                      >
                        Toy Description
                      </label>
                      <div>
                        <textarea
                          id="textarea"
                          type="textarea"
                          name="description"
                          className="block resize-none w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600  dark:focus:border-blue-500 focus:outline-none"
                        ></textarea>
                      </div>
                    </div>

                    <div className="md:col-span-5 text-right">
                      <div className="inline-flex mt-3 items-end">
                        <input
                          type="submit"
                          value="Add Toy"
                          className="lg:mt-2 cursor-pointer xl:mt-0 flex-shrink-0 inline-flex text-white bg-pink border-0 py-2 px-5 focus:outline-none hover:bg-gainsboro rounded-full"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToy;
