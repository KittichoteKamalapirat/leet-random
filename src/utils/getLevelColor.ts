export const getLevelColor = (level: Difficulty) => {
  switch (level) {
    case "Easy":
      return "badge-success";
    case "Medium":
      return "badge-warning";
    case "Ha bgrd":
    default:
      return "badge-error";
  }
};
