import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

import { useLocation } from "react-router-dom";
// TODO: provide stripe publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
  const { state } = useLocation();
  console.log(state);
  let price = 0;
  if (state) {
    price = parseFloat(state.price).toFixed(2);
  }

  return (
    <div className="w-full h-screen mt-10">
      <SectionTitle
        heading="Payment"
        subHeading="please process"
      ></SectionTitle>
      <Elements stripe={stripePromise}>
        {state && (
          <CheckoutForm price={price} selectCourse={state}></CheckoutForm>
        )}
      </Elements>
    </div>
  );
};

export default Payment;
