import { ProblemSet } from "../lib/store";
import { Difficulty } from "../types/Difficulty";
import { LeetcodeQuestion } from "../types/LeetcodeQuestion";
import { getProblemSet } from "./getProblemSet";

export const getRandomQuestions = async (problemSet: ProblemSet) => {
  try {
    // Step 1: Read the JSON file from the public folder
    const response = await fetch(getProblemSet(problemSet));
    if (!response.ok) {
      throw new Error("Failed to fetch the questions");
    }
    const questions: LeetcodeQuestion[] = await response.json();

    // Helper function to get a random question by difficulty
    const getRandomQuestionByDifficulty = (difficulty: Difficulty) => {
      const filteredQuestions = questions.filter(
        (question) => question.difficulty === difficulty
      );
      const randomIndex = Math.floor(Math.random() * filteredQuestions.length);
      return filteredQuestions[randomIndex];
    };

    // Step 2 & 3: Get one random question of each difficulty
    const easyQuestion = getRandomQuestionByDifficulty("Easy");
    const mediumQuestion1 = getRandomQuestionByDifficulty("Medium");
    const mediumQuestion2 = getRandomQuestionByDifficulty("Medium");
    const hardQuestion = getRandomQuestionByDifficulty("Hard");

    // Step 4: Return the selected questions in an array
    return [easyQuestion, mediumQuestion1, mediumQuestion2, hardQuestion];
  } catch (error) {
    console.error("Error fetching or processing questions:", error);
    return []; // Return an empty array in case of error
  }
};
