
import { useState, useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";


const PaymentHistory = () => {
  const { user } = useAuth();
  const [paymentHistory, setPaymentHistory] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/paymentHistory?email=${user.email}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPaymentHistory(data);
      })
      .catch((error) => {
        console.log("Error retrieving payment history:", error);
      });
  }, [user.email]);

    console.log("payment history", paymentHistory);
  return (
    <div className="h-screen w-full text-center mt-10">
      <SectionTitle subHeading="Payment History" />
      <div className="overflow-x-auto ">
        <table className="table w-full">
          <thead className="text-center">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Transaction ID</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {paymentHistory.map((item, index) => (
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
                <td className="text-green-500">{item.transactionId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;