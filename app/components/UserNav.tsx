"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";
import { userProps } from "../home/layout";
import {
  Clapperboard,
  Folder,
  Home,
  LogOut,
  Mail,
  Tv2,
  UserRoundCheck,
} from "lucide-react";
import Link from "next/link";

const UserNav = ({ user }: { user: userProps }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="relative md:h-8 md:w-8 w-6 h-6 rounded-sm outline-none"
        >
          <Avatar className="md:h-8 md:w-8 w-6 h-6 rounded-sm">
            <AvatarImage src="https://res.cloudinary.com/dqxwj5jsh/image/upload/v1706804745/next14-netflix-user/c22rwdl9udac9nwi85o1.png" />
            <AvatarFallback className="rounded-sm"></AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel>
          <div className="flex flex-col space-y-1">
            <div className="flex items-center gap-x-2">
              <UserRoundCheck className="w-4 h-4" />
              <p className="text-sm font-medium leading-none">{user.user}</p>
            </div>

            <div className="flex items-center gap-x-2">
              <Mail className="w-4 h-4" />
              <p className="text-xs leading-none text-muted-foreground">
                {user.email}
              </p>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuLabel className="md:hidden block">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-x-2">
              <Home className="w-4 h-4" />
              <Link
                href={"/home"}
                className="cursor-pointer text-sm font-medium leading-none"
              >
                Home
              </Link>
            </div>

            <div className="flex items-center gap-x-2">
              <Clapperboard className="w-4 h-4" />
              <Link
                href={"/home/now_playing"}
                className="cursor-pointer text-sm font-medium leading-none"
              >
                Now Playing
              </Link>
            </div>

            <div className="flex items-center gap-x-2">
              <Tv2 className="w-4 h-4" />
              <Link
                href={"/home/upcoming"}
                className="cursor-pointer text-sm font-medium leading-none"
              >
                Upcoming
              </Link>
            </div>

            <div className="flex items-center gap-x-2">
              <Folder className="w-4 h-4" />
              <Link
                href={"/home/user/list"}
                className="cursor-pointer text-sm font-medium leading-none"
              >
                My Lists
              </Link>
            </div>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator className="md:hidden block" />

        <DropdownMenuItem
          className="flex items-center gap-x-2 cursor-pointer bg-[#e50914]"
          onClick={() => signOut()}
        >
          <LogOut className="w-4 h-4" />
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserNav;
