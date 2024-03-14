"use client";
import React from "react";
import { GithubIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

const SigninGithub = () => {
  return (
    <Button
      onClick={() => signIn("github")}
      type="submit"
      variant="outline"
      className="w-full flex items-center gap-x-3 bg-black"
    >
      <GithubIcon className="w-5 h-5" />
      <p> Sign in with Github</p>
    </Button>
  );
};

export default SigninGithub;
