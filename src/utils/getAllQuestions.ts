import { ProblemSet } from "../lib/store";
import { Difficulty } from "../types/Difficulty";
import { getProblemSet } from "./getProblemSet";

export interface LeetcodeQuestion {
  category: string;
  href: string;
  text: string;
  difficulty: Difficulty;
  isPremium: boolean;
}

export const getAllQuestions = async (problemSet: ProblemSet) => {
  try {
    // Step 1: Read the JSON file from the public folder
    const response = await fetch(getProblemSet(problemSet));
    if (!response.ok) {
      throw new Error("Failed to fetch the questions");
    }
    const questions: LeetcodeQuestion[] = await response.json();

    return questions;
  } catch (error) {
    console.error("Error fetching or processing questions:", error);
    return []; // Return an empty array in case of error
  }
};
