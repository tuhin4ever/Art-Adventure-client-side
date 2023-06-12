import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";
import PopularClassesSection from "../PopularClassesSection/PopularClassesSection";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import AboutUs from "../About/AboutUs";

const Home = () => {
  window.scrollTo(0, 0);
  
  return (
    <div>
      <Helmet>
        <title>Arts Adventure | Home</title>
      </Helmet>
      <Banner></Banner>
      <PopularClassesSection></PopularClassesSection>
      <Featured></Featured>
      <PopularInstructor></PopularInstructor>
      <AboutUs></AboutUs>
    </div>
  );
};

export default Home;
