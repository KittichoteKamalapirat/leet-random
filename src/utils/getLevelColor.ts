import { Difficulty } from "../types/Difficulty";

export const getLevelColor = (level: Difficulty) => {
  switch (level) {
    case "Easy":
      return "badge-success";
    case "Medium":
      return "badge-warning";
    case "Hard":
    default:
      return "badge-error";
  }
};
