import { Difficulty } from "./Difficulty";

export interface LeetcodeQuestion {
  category: string;
  href: string;
  text: string;
  difficulty: Difficulty;
  isPremium: boolean;
  neetLink: string;
  slug: string;
}
