import { getServerSession } from "next-auth";
import { authOptions } from "./utils/authOptions";
import { redirect } from "next/navigation";

export default async function Home() {
  // get server session
  const session = await getServerSession(authOptions);
  // validate session
  if (!session) {
    // if not have a session redirect to login page
    return redirect("/login");
  } else {
    // redirect to home page if already have a session server
    return redirect("/home");
  }
}
