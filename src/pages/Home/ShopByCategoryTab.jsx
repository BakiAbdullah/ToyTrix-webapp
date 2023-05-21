import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useEffect, useState } from "react";
import ShopByToyCard from "./ShopByToyCard";

const ShopByCategoryTab = () => {
  const [toys, setToys] = useState([]);
  const [activeCategory, setActiveCategory] = useState(["City"]);

  // Load data Dynamically Based on Toys Category by Query Text
  useEffect(() => {
    fetch(`https://toytrix-server.vercel.app/alltoys/${activeCategory}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data.slice(1, 4));
      });
  }, [activeCategory]);

  console.log(toys);

  const handleCategoryTabClick = (categoryName) => {
    setActiveCategory(categoryName);
  };

  return (
    <div className="container flex flex-col items-center justify-center mx-auto lg:px-12">
      <h2 className="font-bold text-5xl mb-5">Shop By Category</h2>
      <div className="bg-pink h-[6px] w-[70px] mb-8"></div>
      <div className="lg:min-w-full text-center mt-12">
        <Tabs>
          <TabList className="grid grid-cols-3 gap-5 w-1/2 mx-auto">
            <Tab>
              <div
                onClick={() => handleCategoryTabClick("City")}
                className="text-white p-4 rounded-full cursor-pointer hover:bg-cyan-600 transition-colors duration-300 bg-cyansky shadow-md flex focus:outline-none items-center justify-center"
              >
                Lego City
              </div>
            </Tab>
            <Tab>
              <div
                onClick={() => handleCategoryTabClick("LEGO Cars")}
                className="text-white p-4 rounded-full cursor-pointer hover:bg-cyan-600 transition-colors duration-300 bg-cyansky shadow-md flex items-center justify-center"
              >
                Lego Cars
              </div>
            </Tab>
            <Tab>
              <div
                onClick={() => handleCategoryTabClick("Star Wars")}
                className="text-white p-4 rounded-full cursor-pointer hover:bg-cyan-600 transition-colors duration-300 bg-cyansky shadow-md flex items-center justify-center"
              >
                Lego Star Wars
              </div>
            </Tab>
          </TabList>

          <TabPanel>
            <div className="lg:w-3/4 mx-auto p-8 mt-6">
              <div className="flex lg:flex-row flex-col items-center lg:justify-center gap-6">
                {toys?.map((toy) => (
                  <ShopByToyCard key={toy._id} toy={toy}></ShopByToyCard>
                ))}
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="lg:w-3/4 mx-auto p-8 mt-6">
              <div className="flex lg:flex-row flex-col items-center lg:justify-center gap-6">
                {toys?.map((toy) => (
                  <ShopByToyCard key={toy._id} toy={toy}></ShopByToyCard>
                ))}
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="lg:w-3/4 mx-auto p-8 mt-6">
              <div className="flex lg:flex-row flex-col items-center lg:justify-center gap-6">
                {toys?.map((toy) => (
                  <ShopByToyCard key={toy._id} toy={toy}></ShopByToyCard>
                ))}
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ShopByCategoryTab;
