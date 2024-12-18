"use client";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import LoadingBar from "react-top-loading-bar";
import { MobileNav } from "./mobile-nav";
import { ModeToggle } from "./mode-toggle";
import { buttonVariants } from "./ui/button";

export const NavBar = () => {
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  // This runs whenever page changes to some other page
  useEffect(() => {
    setProgress(30);

    setTimeout(() => {
      setProgress(70);
    }, 100);

    setTimeout(() => {
      setProgress(100);
    }, 800);
  }, [pathname]);

  // This runs whenever page loads
  useEffect(() => {
    setTimeout(() => {
      setProgress(0);
    }, 900);
  }, []);

  return (
    <nav className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-background/50 px-8 backdrop-blur">
      <LoadingBar
        color="#6028ff"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="text-lg font-bold md:text-xl">
        <Link href={"/"}>
          NEXT<span className="text-red-500">INIT</span>{" "}
        </Link>
      </div>
      <ul className="mr-2 hidden w-full items-center justify-end space-x-4 sm:flex">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about"}>Profile</Link>
        </li>

        <li className="buttons space-x-2 px-4">
          <Link
            href={"/login"}
            className={buttonVariants({ variant: "outline" })}
          >
            Login
          </Link>
          <Link
            href={"/login"}
            className={buttonVariants({ variant: "outline" })}
          >
            Sign Up
          </Link>
        </li>
      </ul>
      <div className="mr-36 sm:mr-0">
        <ModeToggle />
      </div>

      <div className="flex items-center justify-center sm:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent>
            <SheetTitle>
              <VisuallyHidden>Mobile Navigation</VisuallyHidden>
            </SheetTitle>
            <MobileNav />
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

// pnpm install - react-top-loading-bar

// pnpm install @radix-ui/react-visually-hidden for dialog error about accesibility needs to wrapped by SheetTitle
