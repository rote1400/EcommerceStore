"use server";

import prisma from "@/db/db";
import { notFound } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function deleteUser(id: string) {
  const user = await prisma.user.delete({ where: { id } });

  if (user == null) return notFound();

  revalidatePath("/admin/users");

  return user;
}