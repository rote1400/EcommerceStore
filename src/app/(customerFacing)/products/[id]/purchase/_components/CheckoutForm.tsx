"use client";

import { formatCurrency } from "@/lib/formatters";
import {
  Elements,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Image from "next/image";

type CheckoutFormProps = {
  product: {
    name: string;
    imagePath: string;
    priceInCents: number;
    description: string;
  };
  clientSecret: string;
};

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string
);

export function CheckoutForm({ product, clientSecret }: CheckoutFormProps) {
  return (
    <div className="max-w-5xl w-full mx-auto space-y-8">
      <div className="flex gap-4 items-center">
        <div className="flex-shrink-0 w-1/3 aspect-video relative">
          <Image
            className="object-cover"
            src={product.imagePath}
            fill
            alt={product.name}
          />
        </div>
        <div className="text-lg">
          {formatCurrency(product.priceInCents / 100)}
        </div>
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <div className="line-clamp-3 text-muted-foreground">
          {product.description}
        </div>
      </div>
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
    </div>
  );
}

function Form() {
  const stripe = useStripe();
  const elements = useElements();

  return <PaymentElement />;
}
