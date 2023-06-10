import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../Shared/SectionTitle/SectionTirle";
import InstructorCard from "./InstructorCard";
import Contact from "./Contact/Contact";
const Instructors = () => {
  const data = useLoaderData();
    // console.log(data);
    // scroll to top
    window.scrollTo(0, 0);

  return (
    <div className="mt-20">
      <SectionTitle heading="Instructors" subHeading="Meet Our" />
      <div className="grid md:grid-cols-3 gap-6 my-container">
        {data.map((item) => (
          <InstructorCard key={item._id} item={item}></InstructorCard>
        ))}
      </div>
      <Contact></Contact>
    </div>
  );
};

export default Instructors;
