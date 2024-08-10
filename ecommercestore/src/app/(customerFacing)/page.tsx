import prisma from "@/db/db";

function getNewestProducts() {
  return prisma.product.findMany({
    where: { isAvailableForPurchase: true },
    orderBy: { orders: { _count: "desc" } },
    take: 6,
  });
}

export default function Home() {
  return <h1>Hi</h1>;
}
