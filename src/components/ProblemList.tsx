import { FiExternalLink } from "react-icons/fi";
import { useCallback, useEffect } from "react";

import useStore from "../lib/store";
import { cn } from "../utils/cn";
import { getAllQuestions } from "../utils/getAllQuestions";

import ProblemSetTabs from "./ProblemSetTabs";
import LevelBadge from "./LevelBadge";

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
              <tr
                key={problem.text}
                className="relative
              "
              >
                <th>{index + 1}</th>
                <td>
                  <a
                    href={problem.href}
                    target="_blank"
                    aria-label={`${problem.text}(opens in new tab))`}
                    className="inline-flex items-baseline font-medium leading-tight text-foreground-primary hover:text-primary focus-visible:text-primary  group/link text-base"
                    rel="noreferrer noopener"
                  >
                    {/* make the entire card a link */}
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                    {problem.text}
                    <FiExternalLink className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                  </a>
                </td>
                <td>
                  <LevelBadge level={problem.difficulty} />
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
