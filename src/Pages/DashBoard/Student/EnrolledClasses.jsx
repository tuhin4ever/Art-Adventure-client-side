import { useState, useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";

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
    <div className="h-screen w-full text-center mt-10">
      <SectionTitle subHeading="Enrolled Classes" />
      <div className="overflow-x-auto ">
        <table className="table w-full">
          <thead className="text-center">
            <tr>
              <th>No.</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {enrolledClasses.map((item, index) => (
              <tr key={item._id}>
                <td className="py-2">{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={item.classImage} alt={item.classImage} />
                    </div>
                  </div>
                </td>
                <td>{item.className}</td>
                <td>{item.price} $</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnrolledClasses;
