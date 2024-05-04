import { useCallback, useEffect } from "react";

import useStore from "../lib/store";
import { cn } from "../utils/cn";
import { getAllQuestions } from "../utils/getAllQuestions";
import { getLevelColor } from "../utils/getLevelColor";
import ProblemSetTabs from "./ProblemSetTabs";

const ProblemList = () => {
  const { allQuestions, set } = useStore((state) => state.questions);
  const { problemSet } = useStore((state) => state.setting);

  const getQuestions = useCallback(async () => {
    const randomQuestions = await getAllQuestions(problemSet);
    set({ allQuestions: randomQuestions });
  }, [problemSet]);

  useEffect(() => {
    getQuestions();
  }, [getQuestions, problemSet]);

  return (
    <div className="mt-12 w-full">
      <div className="prose mx-auto">
        <h1 className="text-white text-center">Questions</h1>
      </div>
      <ProblemSetTabs className="mt-8" />
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Difficulty</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {allQuestions?.map((problem, index) => (
              <tr key={problem.text}>
                <th>{index + 1}</th>
                <td>{problem.text}</td>
                <td>
                  <div
                    className={cn(
                      "badge badge-lg",
                      getLevelColor(problem.difficulty)
                    )}
                  >
                    {problem.difficulty}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-12"></div>

      <div className="flex justify-center items-center">
        <button
          onClick={getQuestions}
          className="btn btn-primary mt-12 btn-lg mx-auto"
        >
          Random questions
        </button>
      </div>
    </div>
  );
};
export default ProblemList;
