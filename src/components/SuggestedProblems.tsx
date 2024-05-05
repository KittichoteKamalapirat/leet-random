import Link from "next/link";
import useStore from "../lib/store";
import { randomizeQuestions } from "../services/randomizeQuestions";
import QuestionCard from "./QuestionCard";

const SuggestedProblems = () => {
  const { randomQuestions, isLoading } = useStore((state) => state.questions);
  const { problemSet } = useStore((state) => state.setting);

  return (
    <div className="mt-12 w-full">
      <div className="prose  mx-auto">
        <h1 className="text-white text-center">
          Did you solve these questions?
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mt-12">
        {randomQuestions?.map((problem) => (
          <QuestionCard
            key={problem.text}
            className="px-4 py-2"
            problem={problem}
          />
        ))}
      </div>

      <div className="flex flex-col justify-center gap-2 items-center">
        <button
          onClick={() => randomizeQuestions(problemSet)}
          className="btn btn-primary mt-12 btn-lg mx-auto"
        >
          {isLoading && <span className="loading loading-spinner" />}
          Random questions
        </button>

        <Link href="/list" className="btn btn-ghost btn-md mx-auto">
          See full list
        </Link>
      </div>
    </div>
  );
};
export default SuggestedProblems;
