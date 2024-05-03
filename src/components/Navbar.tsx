import { cn } from "../utils/cn";

const Navbar = () => {
  return (
    <div
      className={cn(
        "fixed z-50 top-0 left-0 w-screen px-4 py-2",
        "bg-background",
        "flex justify-between",
        "border-b-[1px] border-foreground/10"
      )}
    >
      <div className="navbar">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">LeetRandom</a>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
