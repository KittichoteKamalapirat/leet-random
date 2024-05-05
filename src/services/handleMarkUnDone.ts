import { LocalStorage } from "../enums/LocalStorage";
import useStore from "../lib/store";

export const handleMarkUnDone = async (slug: string) => {
  const completedQuestions = useStore.getState().questions.completedQuestions;
  if (!completedQuestions.includes(slug)) return;

  const index = completedQuestions.findIndex((s) => s === slug);

  completedQuestions.splice(index, 1);

  useStore.getState().questions.set({ completedQuestions });

  localStorage.setItem(
    LocalStorage.CompletedQuestions,
    JSON.stringify(completedQuestions)
  );
};
