import { validateRequest } from "@/auth";
import React from "react";
import { redirect } from "next/navigation";
import SessionProvider from "./SessionProvider";
import Navbar from "./Navbar";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await validateRequest();
  if (!session.user) redirect("/login");
  return (
    <SessionProvider value={session}>
      <div className="flex min-h-screen flex-col">
        <Navbar></Navbar>
        <div className="mx-auto max-w-7xl p-5">{children}</div>
      </div>
    </SessionProvider>
  );
}
