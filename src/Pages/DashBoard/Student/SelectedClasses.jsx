import { Link } from "react-router-dom";

import useSelected from "../../../hooks/useSelected";
import Swal from "sweetalert2";
import { FaTrashAlt } from "react-icons/fa";

const SelectedClasses = () => {
  const [selectCourse, refetch] = useSelected();
  const total = selectCourse.reduce((sum, item) => sum + item.price, 0);

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Do You Want to Cancel Course  ${item.name}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Removed it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/selectCourse/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Cancel!", `${item.name} Removed.`, "success");
            }
          });
      }
    });
  };

  return (
    <div className="w-full">
      <div className="h-screen mt-10">
        <div className="uppercase font-semibold h-16 flex justify-evenly items-center ">
          <h3 className="text-3xl text-center Permanent-text">
            Total Classes: {selectCourse.length}
          </h3>
          <h3 className="text-3xl text-center  Permanent-text">
            Total course price : {total} $
          </h3>
        </div>
        <div className="p-4">
          <table className="table w-full  rounded-lg">
            <thead className="text-center">
              <tr>
                <th className="py-2">#</th>
                <th>CLass</th>
                <th>Course Name</th>
                <th>Price</th>
                <th>Payment</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {selectCourse.map((item, index) => (
                <tr key={item._id}>
                  <td className="py-2">{index + 1}</td>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} alt={item.name} />
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price} $</td>
                  <td>
                    <button>
                      <Link state={item} to="/dashboard/payment">
                        <button className="btn glass text-base-content btn-sm rounded">
                          PAY
                        </button>
                      </Link>
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(item)}
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
    </div>
  );
};

export default SelectedClasses;
