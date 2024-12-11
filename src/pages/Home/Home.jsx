import Accordian from "../../components/home/Accordian";
import Banner from "../../components/home/Banner";
import FeatureProducts from "../../components/home/FeatureProducts";
import Reviews from "../../components/home/Reviews";

function Home() {
  return (
    <div>
      <Banner />
      <FeatureProducts />
      <Reviews />
      <Accordian />
    </div>
  );
}

export default Home;
