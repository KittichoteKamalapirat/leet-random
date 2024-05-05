import { SessionStorage } from "../enums/SessionStorage";
import useStore, { ProblemSet } from "../lib/store";
import { getRandomQuestions } from "./getRandomQuestions";

export const randomizeQuestions = async (problemSet: ProblemSet) => {
  useStore.getState().questions.set({ isLoading: true });
  const solved = useStore.getState().questions.completedQuestions;
  const randomQuestions = await getRandomQuestions(problemSet, solved);

  useStore.getState().questions.set({ randomQuestions, isLoading: false });
  sessionStorage.setItem(
    SessionStorage.RandomQuestions,
    JSON.stringify(randomQuestions)
  );
};
