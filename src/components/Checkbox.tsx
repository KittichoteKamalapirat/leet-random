import React, { HTMLAttributes } from "react";
import { cn } from "../utils/cn";

interface Props extends HTMLAttributes<HTMLDivElement> {
  checked?: boolean;
  onClick: () => void;
  className?: string;
}
const Checkbox = ({ checked = false, onClick, className, ...rest }: Props) => {
  return (
    <div className={cn("form-control", className)} {...rest}>
      <label className="cursor-pointer label">
        <input
          type="checkbox"
          checked={checked}
          className="checkbox checkbox-accent"
          onChange={onClick}
        />
      </label>
    </div>
  );
};
export default Checkbox;
