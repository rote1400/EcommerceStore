"use client";

import {
  Elements,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

type CheckoutFormProps = {
  product: {};
  clientSecret: string;
};

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string
);

export function CheckoutForm({ product, clientSecret }: CheckoutFormProps) {
  return (
    <Elements
      stripe={stripePromise}
      options={{
        clientSecret,
        appearance: {
          theme: "flat",
          variables: {
            colorPrimary: "#0570de",
            colorBackground: "#f6f9fc",
            colorText: "#30313d",
            colorDanger: "#df1b41",
          },
          rules: {
            ".Label": {
              color: "#6b7c93",
            },
            ".Input": {
              border: "1px solid #ccd0d2",
              boxShadow: "none",
            },
            ".Tab": {
              border: "none",
            },
            ".Tab:hover": {
              backgroundColor: "#f8f9fa",
            },
            ".Tab--selected": {
              borderColor: "#0570de",
            },
            ".PaymentMethod": {
              boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
            },
          },
        },
      }}
    >
      <Form />
    </Elements>
  );
}

function Form() {
  const stripe = useStripe();
  const elements = useElements();

  return <PaymentElement />;
}
