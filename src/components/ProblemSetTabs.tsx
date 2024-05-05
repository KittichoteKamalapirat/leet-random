import { HTMLAttributes, useEffect } from "react";
import useStore, { ProblemSet } from "../lib/store";
import { cn } from "../utils/cn";
import { SessionStorage } from "../enums/SessionStorage";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const ProblemSetTabs = ({ className, ...rest }: Props) => {
  const { problemSet, set } = useStore((state) => state.setting);

  const handleProblemSet = (deck: ProblemSet) => {
    set({ problemSet: deck });
    sessionStorage.setItem(SessionStorage.ProblemSet, deck);
  };

  return (
    <div
      role="tablist"
      className={cn("tabs tabs-boxed tabs-lg", className)}
      {...rest}
    >
      <div
        role="tab"
        className={cn(
          "tab bg-base-100",
          problemSet === "blind75" && "tab-active"
        )}
        onClick={() => handleProblemSet("blind75")}
      >
        🅱️ Blind 75
      </div>
      <div
        role="tab"
        className={cn(
          "tab bg-base-100",
          problemSet === "neet150" && "tab-active"
        )}
        onClick={() => handleProblemSet("neet150")}
      >
        🚀 Neet 150
      </div>
      {/* <a role="tab" className="tab">
        All
      </a> */}
    </div>
  );
};
export default ProblemSetTabs;
