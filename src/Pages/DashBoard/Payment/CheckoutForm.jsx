import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import "./CheckoutForm.css";
const CheckoutForm = ({price}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) return;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: card,
    });

    if (error) {
      console.log(error.message);
      setCardError(error.message);
    } else {
      setCardError("");
      console.log(paymentMethod);
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
        {/* {transactionId && (
        <p className="text-green-500">
          Transaction complete with transactionId: {transactionId}
        </p>
      )} */}
        <button
          className="btn btn-xs btn-outline border-0 border-b-2 hover:bg-secondary-focus  border-red-900  text-black  py-2 px-6 rounded-full"
          type="submit"
          disabled={!stripe}
        >
          Pay
        </button>
      </form>
    </>
  );
};

export default CheckoutForm;
