import { validateRequest } from "@/auth";
import React from "react";
import { redirect } from "next/navigation";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = await validateRequest();
  if (user) redirect("/");
  return <>{children}</>;
}
