import { Link } from "react-router-dom";

import useSelected from "../../hooks/useSelected";

const MyClasses = () => {
  const [selectCourse] = useSelected()
  const total = selectCourse.reduce((sum, item) => sum + item.price, 0);
  return (
    <div className="w-full">
      <div className="h-screen bg-gray-100">
        <div className="uppercase font-semibold h-16 flex justify-evenly items-center bg-gray-200">
          <h3 className="text-3xl">Total items: {selectCourse.length}</h3>
          <h3 className="text-3xl">Total Price: ${total}</h3>
          <Link to="/dashboard/payment">
            <button className="btn-warning btn-sm">PAY</button>
          </Link>
        </div>
        <div className="p-4">
          <table className="table w-full bg-white rounded-lg">
            <thead>
              <tr>
                <th className="py-2">No.</th>
                <th>Food</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
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
                  <td>${item.price}</td>
                  <td>
                    <button
                     
                      className="btn btn-ghost bg-red-600 text-white"
                    >
                      x
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

export default MyClasses;
