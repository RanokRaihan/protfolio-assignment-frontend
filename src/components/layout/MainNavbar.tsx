"use client";
import { useIsMobile } from "@/hooks/use-mobile";
import { LogOut } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { MobileSideNav } from "./MobileSideNav";
import { ModeToggle } from "./ModeToggle";

const MainNavbar = () => {
  const isMobile = useIsMobile();
  const session = useSession();
  const user = session?.data?.user;
  return (
    <nav className="bg-white w-full dark:bg-gray-900 border-b dark:shadow-none fixed top-0 bg-opacity-75 backdrop-blur z-50">
      <div className=" container mx-auto flex justify-between items-center p-4">
        {isMobile && (
          <div>
            <MobileSideNav />
          </div>
        )}
        <Link href="/">
          <Image
            src="/assets/images/logo-main.svg"
            alt="logo"
            width={200}
            height={50}
          />
        </Link>
        {!isMobile && (
          <ul className="flex gap-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/blogs">Blogs</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            {user && (
              <li>
                <Link href="/admin">Admin</Link>
              </li>
            )}
          </ul>
        )}

        <div className="flex gap-4 items-center">
          <ModeToggle />
          {user ? (
            <Button onClick={() => signOut()} className="hidden  md:flex">
              <LogOut />
              Logout
            </Button>
          ) : (
            <Button asChild className="hidden md:block">
              <Link href="/login">Login</Link>
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;
