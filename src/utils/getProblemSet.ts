import { ProblemSet } from "../lib/store";

export const getProblemSet = (problemSet: ProblemSet) => {
  switch (problemSet) {
    case "neet150":
      return "/leetcode-problems/neetcode150-add.json";
    case "blind75":
    default:
      return "/leetcode-problems/blind75.json";
  }
};
