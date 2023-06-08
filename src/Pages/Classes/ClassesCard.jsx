import { FaDollarSign, FaUserCheck, FaUsers } from "react-icons/fa";
export const ClassesCard = ({ item }) => {
  const { name, image, instructor, available_seats, price, enrolled } = item;
  return (
    <div className="card w-96 h-full bg-base-100 shadow-2xl ">
      <figure className="p-4">
        <img src={image} alt={name} className="rounded-xl" />
      </figure>
      <p className="absolute right-0 mr-7 mt-7 rounded px-4 bg-red-900 text-white flex items-center">
        <FaDollarSign className="text-green-600"/> {price}
      </p>
      <div className="card-body -mt-10">
        <h2 className="card-title font-medium text-slate-900 text-center Permanent-text mx-auto">
          {name}
        </h2>
        <p className=" font-semibold text-2xl flex gap-1 ">
          <span className="text-orange-400">Instructor:</span> {instructor}
        </p>
        <div className="  flex gap-3 Kalam-text text-xl text-center ">
          <p className="text-slate-600 flex gap-1">
            <FaUsers />
            Available Seats: {available_seats}
          </p>
          <p className="text-slate-600 flex gap-1">
            <FaUserCheck /> Enrolled: {enrolled}
          </p>
        </div>
        <div className="card-actions mx-auto mt-4">
          <button className="btn btn-outline border-0 border-b-4 border-red-900 text-lg text-slate-800 font-bold py-2 px-6 rounded-full">
            Select{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
