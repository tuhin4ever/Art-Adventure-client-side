import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";
import PopularClassesSection from "../PopularClassesSection/PopularClassesSection";

const Home = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <Banner></Banner>
      <PopularClassesSection></PopularClassesSection>
      <Featured></Featured>
    </div>
  );
};

export default Home;
