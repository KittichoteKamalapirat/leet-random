import { useCallback, useEffect } from "react";

import useStore from "../lib/store";
import { getRandomQuestions } from "../utils/getRandomQuestions";
import QuestionCard from "./QuestionCard";

const SuggestedProblems = () => {
  const { questions, set } = useStore((state) => state.questions);
  const { problemSet } = useStore((state) => state.setting);

  const randomizeQuestions = useCallback(async () => {
    const randomQuestions = await getRandomQuestions(problemSet);
    set({ questions: randomQuestions });
  }, []);

  useEffect(() => {
    randomizeQuestions();
  }, [randomizeQuestions, problemSet]);

  return (
    <div className="mt-12 w-full">
      <div className="prose">
        <h1 className="text-white text-center dark:text-rose-500">
          Did you solve these questions?
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-12">
        {questions?.map((problem) => (
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
