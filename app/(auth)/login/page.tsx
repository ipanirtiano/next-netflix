import SiginGithub from "@/app/components/SigninGithub";
import SigninGoogle from "@/app/components/SigninGoogle";
import { authOptions } from "@/app/utils/authOptions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  // get server session
  const session = await getServerSession(authOptions);
  // validate the session
  if (session) {
    return redirect("/home");
  }

  return (
    <div className="absolute rounded md:bg-black/70 py-6 px-[30px] md:mt-0 md:max-w-sm md:px-10">
      <form action="">
        <h1 className="md:text-2xl text-xl font-semibold text-white">Log in</h1>
        <div className="space-y-4 mt-5">
          <Input
            type="email"
            name="email"
            placeholder="Email"
            className="bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block"
          />
          <Input
            type="password"
            name="password"
            placeholder="********"
            className="bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block"
          />

          <Button
            type="submit"
            variant="destructive"
            className="w-full bg-[#e50914]"
          >
            Log in
          </Button>
        </div>
      </form>

      <div className="text-gray-500 text-sm mt-2 flex items-center justify-between">
        <p>New to Netflix (?)</p>
        <Link
          className="text-white hover:underline inline-block"
          href="/sign-up"
        >
          Sign up now
        </Link>
      </div>

      <div className="flex flex-col space-y-3 w-full justify-center items-center gap-x-3 mt-6">
        <SiginGithub />
        <SigninGoogle />
      </div>
    </div>
  );
};

export default page;
