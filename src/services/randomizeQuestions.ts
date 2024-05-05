import { SessionStorage } from "../enums/SessionStorage";
import useStore, { ProblemSet } from "../lib/store";
import { getRandomQuestions } from "../utils/getRandomQuestions";

export const randomizeQuestions = async (problemSet: ProblemSet) => {
  const randomQuestions = await getRandomQuestions(problemSet);

  useStore.getState().questions.set({ randomQuestions });
  sessionStorage.setItem(
    SessionStorage.RandomQuestions,
    JSON.stringify(randomQuestions)
  );
};
