import Link from "next/link";
import { cn } from "../utils/cn";
import Image from "next/image";

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
            <Image
              src="leetrandom.svg"
              alt="Picture of the author"
              width={40}
              height={40}
            />
            LeetRandom
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
