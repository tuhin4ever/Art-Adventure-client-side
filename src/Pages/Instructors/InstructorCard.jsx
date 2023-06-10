

const InstructorCard = ({ item }) => {
  const { name, image, email, students } = item;
  return (
    <div className="w-full">
    <div className="rounded-lg overflow-hidden shadow-lg bg-white">
      <div className="p-4">
        <div className="flex flex-col items-center">
          <div className="relative w-40 h-40 mb-4">
            <img
              src={image}
              alt="Instructor"
              className="object-cover w-full h-full border-2 border-primary rounded-lg transition duration-300 transform hover:scale-105"
            />
          </div>
          <h2 className="text-2xl font-bold mb-2">{name}</h2>
          <p className="text-gray-600 mb-2">{email}</p>
          <p className="text-gray-600">Students: {students}</p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default InstructorCard;
