import { Column, Img, Row, Section, Text } from "@react-email/components";
import { formatCurrency } from "@/lib/formatters";
import { format } from "path"

type OrderInformationProps = {
  order: { id: string; createdAt: Date; pricePaidInCents: number };
  product: {imagePath: string};
  downloadVerificationId: string;
};

const dateFormatter = new Intl.DateTimeFormat("en", {dateStyle: "medium"})

export function OrderInformation({
  order,
  product,
  downloadVerificationId,
}: OrderInformationProps) {
  return (
    <>
      <Section>
        <Row>
          <Column>
            <Text className="mb-0 text-gray-500 whitespace-nowrap text-nowrap mr-4">
              Order ID
            </Text>
            <Text className="mt-0 mr-4">{order.id}</Text>
          </Column>
          <Column>
            <Text className="mb-0 text-gray-500 whitespace-nowrap text-nowrap mr-4">
              Purchased On
            </Text>
            <Text className="mt-0 mr-4">
              {dateFormatter.format(order.createdAt)}
            </Text>
          </Column>
          <Column>
            <Text className="mb-0 text-gray-500 whitespace-nowrap text-nowrap mr-4">
              Price Paid
            </Text>
            <Text className="mt-0 mr-4">
              {formatCurrency(order.pricePaidInCents / 100)}
            </Text>
          </Column>
        </Row>
      </Section>
      <Section className="border border-solid border-gray-500 rounded-lg p-4 md:p-6 my-4">
        <Img src={`${process.env.NEXT_PUBLIC_SERVER_URL}${product.imagePath}`} />
      </Section>
    </>
  );
}
