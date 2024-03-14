import React, { ReactNode } from "react";
import Navbar from "../components/Navbar";
import { getServerSession } from "next-auth";
import { authOptions } from "../utils/authOptions";
import { redirect } from "next/navigation";

export type userProps = {
  user: string | null | undefined;
  email: string | null | undefined;
};

const Layout = async ({ children }: { children: ReactNode }) => {
  const session = await getServerSession(authOptions);

  const sessionUser: userProps = {
    user: session?.user?.name,
    email: session?.user?.email,
  };

  if (!session) {
    return redirect("/login");
  }

  return (
    <>
      <Navbar user={sessionUser} />
      <main className="w-full max-w-7xl mx-auto sm:px-6 lg:px-8">
        {children}
      </main>
    </>
  );
};

export default Layout;
