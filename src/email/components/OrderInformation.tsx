import { Column, Row, Section, Text } from "@react-email/components";

type OrderInformationProps = {
  order: { id: string };
  product: {};
  downloadVerificationId: string;
};

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
            <Text>Order ID</Text>
            <Text>{order.id}</Text>
          </Column>
        </Row>
      </Section>
    </>
  );
}
