import Tilt from "react-parallax-tilt";
const InstructorCard = ({ item }) => {
  const { name, image, email , students} = item;
  return (
    <div className="transition duration-300 transform hover:scale-105  rounded-lg overflow-hidden shadow-md">
      <div className="p-3">
        <div className="flex flex-col items-center cursor-pointer">
          <div className="relative w-40 h-40 mb-4 cursor-move">
            <Tilt>
              <img
                src={image}
                alt="Instructor"
                className="object-cover w-full h-full border-2 border-secondary-focus rounded-lg"
              />
            </Tilt>
          </div>
          <h2 className="text-2xl font-bold mb-2 Kalam-text">{name}</h2>
          {students && (
            <p className="text-base-content mb-2 Permanent-text text-xl">
              {students} Student{students > 1 ? "s" : ""}
            </p>
          )}
          <p className="text-base-content mb-2 Caveat-text text-3xl">{email}</p>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
