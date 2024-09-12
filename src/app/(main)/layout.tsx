import { validateRequest } from "@/auth";
import React from "react";
import { redirect } from "next/navigation";
import SessionProvider from "./SessionProvider";
import Navbar from "./Navbar";
import MenuBar from "./MenuBar";

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

        <div className="mx-auto flex w-full max-w-7xl grow gap-5 p-5">
          <MenuBar className="sticky top-[5.25rem] hidden h-fit flex-none space-y-3 rounded-2xl bg-card px-3 py-5 shadow-sm sm:block lg:px-5 xl:w-80"></MenuBar>
          {children}
        </div>
        <MenuBar className="sticky bottom-0 flex w-full justify-center border-t bg-card p-3 sm:hidden"></MenuBar>
      </div>
    </SessionProvider>
  );
}
