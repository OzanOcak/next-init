import Link from "next/link";
import { buttonVariants } from "./ui/button";

export const MobileNav = () => {
  return (
    <nav aria-label="Mobile Navigation" className="p-4">
      <ul className="flex flex-col gap-4">
        <li>
          <Link
            href="/"
            className="font-bold transition-colors hover:text-primary"
          >
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="transition-colors hover:text-primary">
            Profile
          </Link>
        </li>
        <div className="buttons text-xsm flex gap-2">
          <Link
            className={buttonVariants({ variant: "secondary" })}
            href="/login"
          >
            Login
          </Link>
          <Link
            className={buttonVariants({ variant: "secondary" })}
            href="/signup"
          >
            Signup
          </Link>
        </div>
      </ul>
    </nav>
  );
};
