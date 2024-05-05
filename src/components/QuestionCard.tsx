import { useRef, useState } from "react";
import { FaCode, FaYoutube } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { LocalStorage } from "../enums/LocalStorage";
import useStore from "../lib/store";
import { getSolution } from "../services/getSolution";
import { LeetcodeQuestion } from "../types/LeetcodeQuestion";
import { cn } from "../utils/cn";
import Checkbox from "./Checkbox";
import CodeModal from "./CodeModal";
import LevelBadge from "./LevelBadge";

interface Props {
  problem: LeetcodeQuestion;
  className?: string;
}

const QuestionCard = ({ problem, className }: Props) => {
  const { text, href, difficulty, neetLink, slug } = problem;
  const {
    set: setQuestions,
    completedQuestions,
    randomQuestions,
  } = useStore((state) => state.questions);

  const [solution, setSolution] = useState<string>("");
  const modalRef = useRef<HTMLDialogElement>(null);

  const isCompleted = completedQuestions.includes(slug);
  const handleGetSolution = async (slug: string) => {
    // document.getElementById("solution").showModal();
    modalRef.current?.showModal();
    const content = await getSolution(slug);
    setSolution(content);
  };

  const handleMarkUnDone = async (slug: string) => {
    if (!completedQuestions.includes(slug)) return;

    const index = completedQuestions.findIndex((s) => s === slug);

    completedQuestions.splice(index, 1);

    setQuestions({ completedQuestions });
    localStorage.setItem(
      LocalStorage.CompletedQuestions,
      JSON.stringify(completedQuestions)
    );
  };

  const handleMarkDone = async (slug: string) => {
    completedQuestions.push(slug);
    setQuestions({ completedQuestions });
    localStorage.setItem(
      LocalStorage.CompletedQuestions,
      JSON.stringify(completedQuestions)
    );
  };
  return (
    <div
      className={cn(
        "card card-compact w-96 bg-base-100 shadow-xl",
        isCompleted && "ring-accent ring-2 bg-accent/20",
        className
      )}
    >
      <div className="card-body relative">
        <h2 className="card-title">
          <a
            href={href}
            target="_blank"
            aria-label={`${text}(opens in new tab))`}
            className="inline-flex items-baseline font-medium leading-tight text-foreground-primary hover:text-primary focus-visible:text-primary  group/link text-base"
            rel="noreferrer noopener"
          >
            {/* make the entire card a link */}
            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
            {text}
            <FiExternalLink className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
          </a>
        </h2>
        <LevelBadge level={difficulty} />

        {/* Bottom control */}
        <div className="flex justify-between">
          {/* left */}
          <div className="flex gap-2 items-center">
            <a
              href={neetLink}
              target="_blank"
              aria-label={`${text}(opens in new tab))`}
              className="z-0 inline-flex items-baseline font-medium leading-tight focus-visible:text-primary text-base cursor-pointer"
              rel="noreferrer noopener"
            >
              <FaYoutube className="hover:text-rose-500 inline-block h-6 w-6 shrink-0 transition-transform motion-reduce:transition-none ml-1 translate-y-px" />
            </a>
            {/* Solution */}

            <button onClick={() => handleGetSolution(slug)}>
              <FaCode className="hover:text-teal-400 inline-block h-6 w-6 shrink-0 transition-transform motion-reduce:transition-none ml-1 translate-y-px" />
            </button>

            <a
              href={href}
              target="_blank"
              aria-label={`${text}(opens in new tab))`}
              className="z-40 inline-flex items-baseline font-medium leading-tight focus-visible:text-primary text-base"
              rel="noreferrer noopener"
            >
              <SiLeetcode className="hover:text-amber-400 inline-block h-6 w-6 shrink-0 transition-transform motion-reduce:transition-none ml-1 translate-y-px" />
            </a>
          </div>
          {/* right */}
          <Checkbox
            onClick={() =>
              isCompleted ? handleMarkUnDone(slug) : handleMarkDone(slug)
            }
            checked={isCompleted}
            className="z-10"
          />
        </div>
      </div>

      <CodeModal id="solution" title={text} code={solution} ref={modalRef} />
    </div>
  );
};
export default QuestionCard;
