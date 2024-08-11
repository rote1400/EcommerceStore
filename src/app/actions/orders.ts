"use server";

import prisma from "@/db/db";

export async function userOrderExists(email: string, productId: string) {
  const order = await prisma.order.findFirst({
    where: { user: { email }, productId },
    select: { id: true },
  });

  return order != null;
}
