import { FiExternalLink } from "react-icons/fi";
import { cn } from "../utils/cn";
import { getLevelColor } from "../utils/getLevelColor";
import { Difficulty } from "../utils/getRandomQuestions";

interface Props {
  title: string;
  href: string;
  difficulty: Difficulty;
  className?: string;
}

const QuestionCard = ({ title, href, difficulty, className }: Props) => {
  return (
    <div
      className={cn(
        "card card-compact w-96 bg-base-100 shadow-xl",

        className
      )}
    >
      <div className="card-body relative">
        <h2 className="card-title">
          <a
            href={href}
            target="_blank"
            aria-label={`${title}(opens in new tab))`}
            className="inline-flex items-baseline font-medium leading-tight text-foreground-primary hover:text-primary focus-visible:text-primary  group/link text-base"
            rel="noreferrer noopener"
          >
            {/* make the entire card a link */}
            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
            {title}
            <FiExternalLink className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
          </a>
        </h2>

        <div className="card-actions justify-end">
          <div className={cn("badge badge-lg", getLevelColor(difficulty))}>
            {difficulty}
          </div>
        </div>
      </div>
    </div>
  );
};
export default QuestionCard;
