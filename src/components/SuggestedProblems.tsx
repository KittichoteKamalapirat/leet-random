import { useEffect, useState } from "react";

import {
  LeetcodeQuestion,
  getRandomQuestions,
} from "../utils/getRandomQuestions";
import QuestionCard from "./QuestionCard";

const SuggestedProblems = () => {
  const [randomQuestions, setRandomQuestions] = useState<LeetcodeQuestion[]>(
    []
  );

  const randomizeQuestions = async () => {
    const questions = await getRandomQuestions();

    setRandomQuestions(questions);
  };

  useEffect(() => {
    randomizeQuestions();
  }, []);

  return (
    <div className="mt-12 w-full">
      <div className="prose">
        <h1 className="text-white text-center dark:text-rose-500">
          Did you solve these questions?
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-12">
        {randomQuestions?.map((problem) => (
          <QuestionCard
            key={problem.text}
            className="bg-background-secondary px-4 py-2 my-2"
            title={problem.text}
            difficulty={problem.difficulty}
            href={problem.href}
          />
        ))}
      </div>

      <div className="flex justify-center items-center">
        <button
          onClick={randomizeQuestions}
          className="btn btn-primary mt-12 btn-lg mx-auto"
        >
          Random questions
        </button>
      </div>
    </div>
  );
};
export default SuggestedProblems;
