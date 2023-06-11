import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";
import PopularClassesSection from "../PopularClassesSection/PopularClassesSection";
import PopularInstructor from "../PopularInstructor/PopularInstructor";

const Home = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <Banner></Banner>
      <PopularClassesSection></PopularClassesSection>
      <Featured></Featured>
      <PopularInstructor></PopularInstructor>
    </div>
  );
};

export default Home;
