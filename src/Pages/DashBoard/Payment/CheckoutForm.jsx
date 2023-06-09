import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";

const CheckoutForm = ({ price, selectCourse }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useContext(AuthContext);
  const [cardError, setCardError] = useState("");
  const [axiosSecure] = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [axiosSecure, price]);
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    console.log("card", card);
  
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card: card,
    });
  
    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
    } else {
      setCardError("");
    }
  
    setProcessing(true);
  
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.name || "anonymous",
          },
        },
      });
  
    if (confirmError) {
      console.log("[confirmError]", confirmError);
    }
  
    
    setProcessing(false);
    if (paymentIntent?.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      // save payment information to the server
      console.log("[PaymentIntent]", paymentIntent);
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        date: new Date(),
        selectedClassId:selectCourse._id, // Include only the specific item ID
        classId: selectCourse.classId, // Include only the specific item's class ID
        status: "service pending",
        className: selectCourse.name, // Include only the specific item's name
      };
      // axiosSecure.post("/payments", payment).then((res) => {
      //   console.log(res.data);
      //   if (res.data.insertResult) {
      //     // DISPLAY SUCCESS MESSAGE
      //     // navigate("/dashboard/myselectCourse");
      //     Swal.fire({
      //       icon: "success",
      //       title: "Payment Successful",
      //       text: "Your payment has been successfully processed",
      //     });
      //   }
      // });
    
      axiosSecure.post("/payments", payment).then((res) => {
        console.log(res.data);
        if (res.data.insertResult.insertedId) {
          Swal.fire({
            title: "Payment Successful.",
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
        }
      });
    
    }
  };

  return (
    <>
      <form className="w-2/5  mx-auto text-center" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        {cardError && <p className="text-red-500 ml-8 my-3">{cardError}</p>}
        {transactionId && (
          <p className="text-green-500">
            Transaction complete with transactionId: {transactionId}
          </p>
        )}
        <button
          className="btn"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
    </>
  );
};

export default CheckoutForm;
