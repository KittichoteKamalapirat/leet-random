import { ProblemSet } from "../lib/store";
import { Difficulty } from "../types/Difficulty";
import { LeetcodeQuestion } from "../types/LeetcodeQuestion";
import { getProblemSet } from "../utils/getProblemSet";
import { getTwoRandomNumsInRange } from "./getTwoRandomNumsInRange";

export const getRandomQuestions = async (
  problemSet: ProblemSet,
  solved: Array<string>
) => {
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
        (question) =>
          question.difficulty === difficulty && !solved.includes(question.slug)
      );

      // no unsolved questions for this level
      if (filteredQuestions.length == 0) return [];
      if (difficulty === "Medium") {
        const [index1, index2] = getTwoRandomNumsInRange(
          filteredQuestions.length
        );
        return [filteredQuestions[index1], filteredQuestions[index2]];
      }
      let randomIndex = Math.floor(Math.random() * filteredQuestions.length);

      return [filteredQuestions[randomIndex]];
    };

    // Step 2 & 3: Get one random question of each difficulty
    const easyQuestions = getRandomQuestionByDifficulty("Easy");
    const mediumQuestions = getRandomQuestionByDifficulty("Medium");

    const hardQuestions = getRandomQuestionByDifficulty("Hard");

    // Step 4: Return the selected questions in an array
    return [...easyQuestions, ...mediumQuestions, ...hardQuestions];
  } catch (error) {
    console.error("Error fetching or processing questions:", error);
    return []; // Return an empty array in case of error
  }
};
