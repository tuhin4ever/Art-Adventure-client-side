import { useEffect, useState } from "react";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";

const PopularInstructor = () => {
  const [instructor, setInstructor] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/popularInstructors")
      .then((res) => res.json())
      .then((data) => {
        setInstructor(data);
      })
      .catch((error) => {
        console.log("Error retrieving instructor:", error);
      });
  }, []);
  console.log("instructor", instructor);
  return (
    <div className="container mx-auto px-4  ">
      <SectionTitle
        heading="Popular Instructors"
        subHeading="Our Popular Instructors"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {instructor.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-lg shadow-lg overflow-hidden relative"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-64 object-cover rounded-t-lg transition duration-300 ease-in-out transform hover:scale-105"
            />
            <div className=" text-white cursor-pointer px-4 mb-5 py-4 absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-center transition duration-300 ease-in-out opacity-0 hover:opacity-100">
              <h3 className="text-lg font-semibold mb-2 ">{item.name}</h3>
              <p>Email : {item.email}</p>
              <p>Student : {item.students}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructor;
