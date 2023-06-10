import { FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { FcMakeDecision } from "react-icons/fc";
const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const response = await axiosSecure.get(`/users`);
    return response.data;
  });

  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            title: "Success!",
            text: `${user.name} is an Admin Now!`,
            icon: "success",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });
  };

  const handleMakeInstructor = (user) => {
    fetch(`http://localhost:5000/users/instructor/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            title: "Success!",
            text: `${user.name} is an Instructor Now!`,
            icon: "success",
            showConfirmButton: false,
            timer: 2000, //
          });
        }
      });
  };

  const handleDelete = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Do you want to delete ${user.name}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/users/${user._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", `${user.name} deleted.`, "success");
            }
          });
      }
    });
  };

  return (
    <div className="w-full flex justify-center">
      <div className="h-screen w-full max-w-3xl">
        <h3 className="text-3xl font-semibold text-center">
          Number of Users : {users.length}
        </h3>
        <div className="overflow-x-auto">
          <table className="table  w-full  rounded-lg">
            <thead>
              <tr className="text-center">
                <th className="py-2">#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr className="text-center" key={user._id}>
                  <th className="py-2">{index + 1}</th>
                  <td >{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.role === "admin" ? (
                      "admin"
                    ) : user.role === "instructor" ? (
                      "instructor"
                    ) : (
                      <div className="dropdown dropdown-right">
                        <label
                          tabIndex={0}
                          className="btn btn-outline border btn-sm border-red-900  text-base-content  py-2 px-6 rounded-full"
                        >
                          <p className="flex">
                            <FcMakeDecision></FcMakeDecision>
                            Make
                          </p>
                        </label>
                        <ul
                          tabIndex={0}
                          className="dropdown-content menu p-2 shadow bg-base-300 rounded-box w-52"
                        >
                          <li>
                            <button onClick={() => handleMakeAdmin(user)}>
                              Admin
                            </button>
                          </li>
                          <li>
                            <button onClick={() => handleMakeInstructor(user)}>
                              instructor
                            </button>
                          </li>
                        </ul>
                      </div>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(user)}
                      className="btn btn-ghost bg-red-600 text-white"
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
