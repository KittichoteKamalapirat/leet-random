import React from "react";
import { Difficulty } from "../utils/getRandomQuestions";
import { cn } from "../utils/cn";
import Link from "next/link";

interface Props {
  title: string;
  href: string;
  difficulty: Difficulty;
  className?: string;
}

const getLevelColor = (level: Difficulty) => {
  switch (level) {
    case "Easy":
      return "badge-success";
    case "Medium":
      return "badge-warning";
    case "Hard":
      return "badge-error";
  }
};
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
            <button className={cn("badge badge-lg", getLevelColor(difficulty))}>
              {difficulty}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default QuestionCard;
