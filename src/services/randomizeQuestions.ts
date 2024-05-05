import { SessionStorage } from "../enums/SessionStorage";
import useStore, { ProblemSet } from "../lib/store";
import { getRandomQuestions } from "./getRandomQuestions";

export const randomizeQuestions = async (problemSet: ProblemSet) => {
  useStore.getState().questions.set({ isLoading: true });
  const randomQuestions = await getRandomQuestions(problemSet);

  useStore.getState().questions.set({ randomQuestions, isLoading: false });
  sessionStorage.setItem(
    SessionStorage.RandomQuestions,
    JSON.stringify(randomQuestions)
  );
};
