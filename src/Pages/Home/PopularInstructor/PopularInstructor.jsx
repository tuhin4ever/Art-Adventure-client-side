import { useEffect, useState } from "react";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";

const PopularInstructor = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/popularInstructors")
      .then((res) => res.json())
      .then((data) => {
        setInstructors(data);
      })
      .catch((error) => {
        console.log("Error retrieving instructors:", error);
      });
  }, []);

  // console.log("instructors", instructors);

  return (
    <div className="container mx-auto px-4">
      <SectionTitle heading="Popular Instructors" subHeading="Our Popular Instructors" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {instructors.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 opacity-full"
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover rounded-t-lg opacity-full"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50">
                <h3 className="text-lg font-semibold mb-2 text-white">{item.name}</h3>
                <p className="text-white">Email: {item.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructor;
