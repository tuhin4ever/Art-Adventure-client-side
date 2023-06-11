import { useState, useEffect } from "react";
import useAuth from "../../../hooks/useAuth";

const EnrolledClasses = () => {
  const { user } = useAuth();
  const [enrolledClasses, setEnrolledClasses] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/paidClasses?email=${user.email}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setEnrolledClasses(data);
      })
      .catch((error) => {
        console.log("Error retrieving enrolled classes:", error);
      });
  }, [user.email]);

  console.log("enrolled classes", enrolledClasses);
  return (
    <div>
      <h3>Enrolled Classes</h3>

      <>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th></th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="/tailwind-css-component-profile-2@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and Leannon
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td>Purple</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    </div>
  );
};

export default EnrolledClasses;
