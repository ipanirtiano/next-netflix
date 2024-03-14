import Image from "next/image";
import React, { ReactNode } from "react";
import Backgound from "../../public/login_background.jpg";
import Logo from "../../public/netflix_logo.svg";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative flex h-screen w-screen flex-col items-center justify-center bg-black/85 md:bg-black/50">
      <Image
        src={Backgound}
        alt="background"
        className="w-screen h-screen flex object-cover -z-10 "
        priority
      />

      <Image
        src={Logo}
        alt="Logo"
        priority
        className="absolute left-4 top-4 object-contain md:left-10 md:top-6 md:w-[100px] w-[80px]"
      />
      {children}
    </div>
  );
};

export default layout;
