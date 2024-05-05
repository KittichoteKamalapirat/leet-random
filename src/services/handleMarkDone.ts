import { LocalStorage } from "../enums/LocalStorage";
import useStore from "../lib/store";

export const handleMarkDone = async (slug: string) => {
  const completedQuestions = useStore.getState().questions.completedQuestions;
  completedQuestions.push(slug);
  useStore.getState().questions.set({ completedQuestions });

  localStorage.setItem(
    LocalStorage.CompletedQuestions,
    JSON.stringify(completedQuestions)
  );
};
