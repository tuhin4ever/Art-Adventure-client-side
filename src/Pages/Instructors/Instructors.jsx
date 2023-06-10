import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../Shared/SectionTitle/SectionTirle";
import InstructorCard from "./InstructorCard";
const Instructors = () => {
  const data = useLoaderData();
  //   console.log(data);
  return (
    <div className="mt-20">
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
