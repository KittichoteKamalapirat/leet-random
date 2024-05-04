import Link from "next/link";
import { cn } from "../utils/cn";

const Navbar = () => {
  return (
    <div
      className={cn(
        "fixed z-50 top-0 left-0 w-screen",
        "border-b-[1px] border-foreground/10",
        "bg-background-primary"
      )}
    >
      <div className="navbar">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-xl">
            LeetRandom
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
