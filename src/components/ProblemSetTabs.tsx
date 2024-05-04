import React, { HTMLAttributes } from "react";
import useStore from "../lib/store";
import { cn } from "../utils/cn";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const ProblemSetTabs = ({ className, ...rest }: Props) => {
  const { problemSet, set } = useStore((state) => state.setting);
  return (
    <div role="tablist" className={cn("tabs tabs-boxed", className)} {...rest}>
      <div
        role="tab"
        className={cn("tab", problemSet === "blind75" && "tab-active")}
        onClick={() => set({ problemSet: "blind75" })}
      >
        Blind 75
      </div>
      <div
        role="tab"
        className={cn("tab", problemSet === "neet150" && "tab-active")}
        onClick={() => set({ problemSet: "neet150" })}
      >
        Net 150
      </div>
      {/* <a role="tab" className="tab">
        All
      </a> */}
    </div>
  );
};
export default ProblemSetTabs;
