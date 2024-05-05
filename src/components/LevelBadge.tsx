import React, { HTMLAttributes } from "react";
import { cn } from "../utils/cn";
import { Difficulty } from "../types/Difficulty";

interface Props extends HTMLAttributes<HTMLDivElement> {
  level: Difficulty;
  className?: string;
}
const LevelBadge = ({ level, className, ...rest }: Props) => {
  return (
    <div
      className={cn(
        "badge badge-sm",
        level === "Easy"
          ? "badge-success"
          : level === "Medium"
          ? "badge-warning"
          : "badge-error",
        className
      )}
      {...rest}
    >
      {level}
    </div>
  );
};
export default LevelBadge;
