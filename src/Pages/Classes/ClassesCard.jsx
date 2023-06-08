import { useContext } from "react";
import { FaDollarSign, FaUserCheck, FaUsers } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useSelected from "../../hooks/useSelected";
import useAdmin from "../../hooks/useAdmin";

export const ClassesCard = ({ item }) => {
  const [,refetch] = useSelected();
  const { _id, name, image, instructor, available_seats, price, enrolled } = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  // const [isAdmin]= useAdmin()
  const handleAddSelect = () => {
    if (user && user.email) {
      if (available_seats === 0 || user.role === "admin" || user.role === "instructor") {
        return;
      }

      const cartItem = { classId: _id, name, image, price, email: user.email };
      fetch("http://localhost:5000/selectCourse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              icon: "success",
              title: "Class added to cart successfully",
              showConfirmButton: false,
              timer: 2000,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please Sign in to enroll",
        text: "You need to be logged in to enroll in classes.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sign in Now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/signIn", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className={`card w-96 h-full bg-base-100 shadow-2xl ${available_seats === 0 ? 'bg-red-500' : ''}`}>
      <figure className="p-4">
        <img src={image} alt={name} className="rounded-xl" />
      </figure>
      <p className="absolute right-0 mr-7 mt-7 rounded px-4 bg-red-900 text-white flex items-center">
        <FaDollarSign className="text-green-600" /> {price}
      </p>
      <div className="card-body -mt-10">
        <h2 className="card-title font-medium text-slate-900 text-center Permanent-text mx-auto">
          {name}
        </h2>
        <p className="font-semibold text-2xl flex gap-1">
          <span className="text-orange-400">Instructor:</span> {instructor}
        </p>
        <div className="flex gap-3 Kalam-text text-xl text-center">
          <p className="text-slate-600 flex gap-1">
            <FaUsers />
            Available Seats: {available_seats}
          </p>
          <p className="text-slate-600 flex gap-1">
            <FaUserCheck /> Enrolled: {enrolled}
          </p>
        </div>
        <div className="card-actions mx-auto mt-4">
          <button
            onClick={() => handleAddSelect(item)}
            // disabled={available_seats === 0 || isAdmin }
            className={`btn btn-outline border-0 border-b-4 border-red-900 text-lg text-slate-800 font-bold py-2 px-6 rounded-full ${available_seats === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};
