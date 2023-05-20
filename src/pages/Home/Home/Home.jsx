import useTitle from "../../../CustomHooks/UseTitleHook";
import Banner from "../Banner";
import ExtraSection from "../ExtraSection";
import FeaturedCollection from "../FeaturedCollection";
import Gallery from "../Gallery";
import ShopByCategoryTab from "../ShopByCategoryTab";


const Home = () => {
  useTitle('Home');
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <ShopByCategoryTab></ShopByCategoryTab>
      <FeaturedCollection></FeaturedCollection>
      <ExtraSection></ExtraSection>
    </div>
  );
};

export default Home;