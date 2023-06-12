import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import InstructorCard from "./InstructorCard";
import Contact from "./Contact/Contact";
import { Helmet } from "react-helmet-async";

const Instructors = () => {
  const [isLoading, setIsLoading] = useState(true);
  const data = useLoaderData();

  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (data) {
      setIsLoading(false);
    }
  }, [data]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="border-t-4 border-red-800 rounded-full animate-spin w-12 h-12"></div>
      </div>
    );
  }

  return (
    <div className="mt-20">
      <Helmet>
        <title>Arts Adventure | Instructor</title>
      </Helmet>
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
