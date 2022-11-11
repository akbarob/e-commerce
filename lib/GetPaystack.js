import { PaystackButton } from "react-paystack";

let Paystack;

import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

const getPayStack = () => {
  if (!Paystack) {
    Paystack = process.env.NEXT_PAYSTACK_PUBLIC_KEY;
  }
  return Paystack;
};

export default getPayStack;
