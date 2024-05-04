import useStore, { ProblemSet } from "../lib/store";
import { getRandomQuestions } from "../utils/getRandomQuestions";

export const randomizeQuestions = async (problemSet: ProblemSet) => {
  const randomQuestions = await getRandomQuestions(problemSet);

  console.log("randomQuestions", randomQuestions);
  useStore.getState().questions.set({ randomQuestions });
  sessionStorage.setItem("randomQuestions", JSON.stringify(randomQuestions));
};
