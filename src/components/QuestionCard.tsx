import React from "react";
import { Difficulty } from "../utils/getRandomQuestions";
import { cn } from "../utils/cn";
import Link from "next/link";
import { getLevelColor } from "../utils/getLevelColor";

interface Props {
  title: string;
  href: string;
  difficulty: Difficulty;
  className?: string;
}

const QuestionCard = ({ title, href, difficulty, className }: Props) => {
  return (
    <Link href={href} target="_blank">
      <div
        className={cn(
          "card card-compact w-96 bg-base-100 shadow-xl",
          className
        )}
      >
        <div className="card-body">
          <h2 className="card-title">{title}</h2>

          <div className="card-actions justify-end">
            <div className={cn("badge badge-lg", getLevelColor(difficulty))}>
              {difficulty}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default QuestionCard;
