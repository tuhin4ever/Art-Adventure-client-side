import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const MyClasses = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const {
    data: classes,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["classes"],
    enabled: !loading && !!user,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/instructorClasses?email=${user.email}`
      );
      return res.data;
    },
  });

  const handleDelete = (classItem) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Do You Want to Cancel Course  ${classItem.name}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Removed it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/instructorClasses/${classItem._id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("access-token")}`,
          },
          
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Cancel!", `${classItem.name} Removed.`, "success");
            }
          });
      }
    });
  };

  // console.log(classes);
  if (isLoading) {
    <div className="flex justify-center items-center">
      <span className="loading loading-bars loading-lg"></span>
    </div>;
  }

  return (
    <div className="h-screen w-full">
      <SectionTitle subHeading="My Classes" heading="Manage Classes" />
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-center">
            <tr>
              <th>#</th>
              <th>Class Name</th>
              <th>Price</th>
              <th>Available Seats</th>
              <th>Enrolled</th>
              <th>Status</th>
              <th>Feedback</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {classes?.map((classItem, index) => (
              <tr key={classItem._id}>
                <td>{index + 1}</td>
                <td>{classItem.name}</td>
                <td>{classItem.price}</td>
                <td>{classItem.available_seats}</td>
                <td>{classItem.enrolled}</td>
                <td>{classItem.status}</td>
                <td>{classItem.feedback}</td>
                <td>
                  <button
                    onClick={() => handleDelete(classItem)}
                    className="text-base-content"
                  >
                    <FaTrashAlt className="text-xl" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClasses;
