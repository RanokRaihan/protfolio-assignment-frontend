import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LogOut, Menu } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export function MobileSideNav() {
  const session = useSession();
  const user = session?.data?.user;
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
          <SheetDescription className="sr-only">
            this is a mobile side navigation
          </SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col gap-4">
          <ul className="flex flex-col pl-4 mt-4 gap-4">
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
          </ul>
          <div className="flex gap-4 items-center pl-4 justify-start">
            {user ? (
              <Button onClick={() => signOut()}>
                <LogOut />
                Logout
              </Button>
            ) : (
              <Button asChild>
                <Link href="/login">Login</Link>
              </Button>
            )}
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
