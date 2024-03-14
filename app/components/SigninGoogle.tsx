"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import GoogleIcon from "../../public/google.svg";
import Image from "next/image";
import { signIn } from "next-auth/react";

const SigninGoogle = () => {
  return (
    <Button
      onClick={() => signIn("google")}
      type="submit"
      className="w-full flex items-center gap-x-3 bg-white"
    >
      <Image src={GoogleIcon} alt="google icon" className="w-6 h-6" />
      <p> Sign in with Google</p>
    </Button>
  );
};

export default SigninGoogle;
