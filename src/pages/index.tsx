import { useEffect, useRef } from "react";

import useStore, { ProblemSet } from "../lib/store";

import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import ProblemSetTabs from "../components/ProblemSetTabs";
import SuggestedProblems from "../components/SuggestedProblems";
import { randomizeQuestions } from "../services/randomizeQuestions";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { randomQuestions, set: setQuestions } = useStore(
    (state) => state.questions
  );

  const { problemSet, set: setSetting } = useStore((state) => state.setting);

  const isFirstRender = useRef(true);

  console.log("isFirstRender.current", isFirstRender.current);

  useEffect(() => {
    console.log("home");
  }, []);

  useEffect(() => {
    const existingQuestions = sessionStorage.getItem("randomQuestions");
    const existingProblemSet = sessionStorage.getItem("problemSet");
    if (existingQuestions && existingProblemSet) {
      setQuestions({ randomQuestions: JSON.parse(existingQuestions) });
      setSetting({ problemSet: existingProblemSet as ProblemSet });
    } else {
      randomizeQuestions(problemSet);
    }
    setTimeout(() => {
      isFirstRender.current = false; // add delay so the next hook don't get called right away
    }, 500);
  }, []);

  // Don't update on the first render
  useEffect(() => {
    if (isFirstRender.current) {
      return;
    }

    randomizeQuestions(problemSet);
  }, [problemSet]);

  return (
    <main className={`flex min-h-screen flex-col p-24 ${inter.className}`}>
      <Navbar />
      <ProblemSetTabs />
      <SuggestedProblems />
    </main>
  );
}
