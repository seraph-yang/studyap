import Link from "next/link";
import Image from "next/image";
import React from "react";

import UserAccountNav from "./UserAccountNav";
import { ThemeToggle } from "./ThemeToggle";
import { getAuthSession } from "@/lib/nextauth";
import SignInButton from "./SignInButton";

const Navbar = async () => {
  const session = await getAuthSession();
  return (
    <div className="fixed inset-x-0 top-0 bg-white z-[10] h-fit border-b border-zinc-300  py-2 ">
      <div className="flex items-center justify-between h-full gap-2 px-8 mx-auto max-w-7xl">
      <Image src='/studyap.png' alt='logo' width={50} height={50} />
        <Link href={"/"} className="flex items-center gap-2">
          <p className="text-xl font-bold">
             StudyAP
          </p>
        </Link>
        <div className="flex items-center">
          {session?.user ? (
            <UserAccountNav user={session.user} />
          ) : (
            <SignInButton text={"Sign In"} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
