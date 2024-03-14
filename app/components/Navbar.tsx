"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "../../public/netflix_logo.svg";
import { usePathname } from "next/navigation";
import { Bell, Search } from "lucide-react";
import UserNav from "./UserNav";
import { userProps } from "../home/layout";

interface linkProps {
  name: string;
  href: string;
}

const links: linkProps[] = [
  { name: "Home", href: "/home" },
  { name: "Now Playing", href: "/home/now_playing" },
  { name: "Upcoming", href: "/home/upcoming" },

  { name: "Popular", href: "/home/top_rated" },
  { name: "My List", href: "/home/user/list" },
];

const Navbar = ({ user }: { user: userProps }) => {
  // init path name
  const pathName = usePathname();
  // state is scrolled screen
  const [isScrolled, setIscrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIscrolled(true);
      } else {
        setIscrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        isScrolled && "bg-black/70 backdrop-blur-lg"
      } fixed top-0 z-[100] w-full max-w-7xl mx-auto items-center justify-between px-5 sm:px-6 md:py-4 py-4 lg:px-8 flex`}
    >
      <div className="flex items-center">
        <Link href="/home" className="md:w-[100px] w-[80px]">
          <Image src={Logo} alt="logo netflix" priority />
        </Link>

        <ul className="lg:flex gap-x-4 ml-14 hidden">
          {links.map((link, idx) => (
            <div key={idx}>
              {pathName === link.href ? (
                <li>
                  <Link
                    href={link.href}
                    className="text-white underline text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ) : (
                <li>
                  <Link
                    className="text-gray-300 font-normal text-sm"
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                </li>
              )}
            </div>
          ))}
        </ul>
      </div>

      <div className="flex items-center md:gap-x-8 gap-x-4">
        <Search className="w-5 h-5 text-gray-300 cursor-pointer" />
        <Bell className="h-5 w-5 text-gray-300 cursor-pointer" />
        <UserNav user={user} />
      </div>
    </div>
  );
};

export default Navbar;
