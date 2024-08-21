import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Tailwind,
} from "@react-email/components";
import { OrderInformation } from "./components/OrderInformation";

type PurchaseReceiptEmailProps = {
  product: {
    name: string;
  };
};

PurchaseReceiptEmail.PreviewProps = {
  product: { name: "Product name" },
} satisfies PurchaseReceiptEmailProps;

export default function PurchaseReceiptEmail({
  product,
}: PurchaseReceiptEmailProps) {
  return (
    <Html>
      <Preview>Download {product.name} and view receipt</Preview>
      <Tailwind>
        <Head />
        <Body className="font-sant bg-white">
          <Container className="max-w-xl">
            <Heading>Purchase Receipt</Heading>
            <OrderInformation />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
