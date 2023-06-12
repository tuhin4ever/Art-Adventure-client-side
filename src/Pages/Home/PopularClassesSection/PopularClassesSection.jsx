import { useEffect, useState } from "react";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";

const PopularClassesSection = () => {
  const [popularClasses, setPopularClasses] = useState([]);

  useEffect(() => {
    fetch("https://arts-adventure-server.vercel.app/popularClasses")
      .then((res) => res.json())
      .then((data) => setPopularClasses(data));
  }, []);

  // console.log("popular classes", popularClasses)
  return (
    <div className="container mx-auto px-4  ">
      <SectionTitle
        heading=" Our Popular Classes"
        subHeading="Arts Adventure"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {popularClasses.slice(0, 6).map((classItem) => (
          <div
            key={classItem._id}
            className="bg-white rounded-lg shadow-lg overflow-hidden relative"
          >
            <img
              src={classItem.image}
              alt={classItem.name}
              className="w-full h-64 object-cover rounded-t-lg transition duration-300 ease-in-out transform hover:scale-105"
            />
            <div className=" cursor-pointer px-4 mb-5 py-4 absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-center transition duration-300 ease-in-out opacity-0 hover:opacity-100">
              <h3 className="text-lg font-semibold mb-2 text-white Kalam-text">
                {classItem.name}
              </h3>
              <p className="text-white Caveat-text ">
                Price : {classItem.price}
              </p>
              <p className="text-white Caveat-text">
                Available seats : {classItem.available_seats}
              </p>
              <p className="text-white Caveat-text">
                enrolled: {classItem.enrolled}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularClassesSection;
