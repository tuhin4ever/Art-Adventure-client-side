import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Shared/SectionTitle/SectionTirle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import useSelected from "../../../hooks/useSelected";
// TODO: provide stripe publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
  const [selectCourse] = useSelected()
  const total = selectCourse.reduce((total, course) => total + course.price, 0)
  const price = parseFloat(total).toFixed(2)
  return (
    <div className="w-full h-screen">
      <SectionTitle
        heading="Payment"
        subHeading="please process"
      ></SectionTitle>
      <h2 className="text-3xl text-center">taka taka tumi uira uira asho </h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm price={price} ></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
