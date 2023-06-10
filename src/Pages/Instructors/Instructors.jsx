import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../Shared/SectionTitle/SectionTirle";
import InstructorCard from "./InstructorCard";
import { Parallax } from "react-parallax";
const Instructors = () => {
  const data = useLoaderData();
  //   console.log(data);
  return (
    <div>
      <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage="https://i.ibb.co/fX9x8w7/pexels-micheilecom-visual-stories-9350687.jpg"
        bgImageAlt="the menu"
        strength={-200}
      >
        <div className="hero h-[700px]">
          <div className="hero-overlay bg-opacity-40"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold uppercase Permanent-text">
               Exceptional Team 
              </h1>
              <p className="mb-5 Kalam-text text-xl">
                Discover the expertise and passion that drives our outstanding
                instructors. They are the heart and soul of our institution,
                dedicated to providing exceptional education and shaping the
                future of our students. 
              </p>
            </div>
          </div>
        </div>
      </Parallax>
      <SectionTitle heading="Instructors" subHeading="Meet Our" />
      <div className="grid md:grid-cols-3 gap-6 my-container">
        {data.map((item) => (
          <InstructorCard key={item._id} item={item}></InstructorCard>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
