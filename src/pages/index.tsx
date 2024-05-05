import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
import { useEffect, useRef, useState } from "react";

import useStore, { ProblemSet } from "../lib/store";

import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import ProblemSetTabs from "../components/ProblemSetTabs";
import SuggestedProblems from "../components/SuggestedProblems";
import { LocalStorage } from "../enums/LocalStorage";
import { SessionStorage } from "../enums/SessionStorage";
import { randomizeQuestions } from "../services/randomizeQuestions";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const {
    completedQuestions,
    randomQuestions,
    set: setQuestions,
  } = useStore((state) => state.questions);

  const [runConfetti, setRunConfetti] = useState<boolean>(false);

  const todaysDone = randomQuestions.every((q) =>
    completedQuestions.includes(q.slug)
  );
  const { width, height } = useWindowSize();
  console.log("wid", width, height);

  const { problemSet, set: setSetting } = useStore((state) => state.setting);

  const isFirstRender = useRef(true);

  // populate completed questions
  useEffect(() => {
    const completedQuestions = localStorage.getItem(
      LocalStorage.CompletedQuestions
    );

    if (completedQuestions) {
      setQuestions({ completedQuestions: JSON.parse(completedQuestions) });
    }
  }, []);

  // populate randomQuestions(this session) and problemSet setting
  useEffect(() => {
    const existingQuestions = sessionStorage.getItem(
      SessionStorage.RandomQuestions
    );
    const existingProblemSet = sessionStorage.getItem(
      SessionStorage.ProblemSet
    );
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

  // confetti 5 secs
  useEffect(() => {
    setRunConfetti(todaysDone);
    const timeoutId = setTimeout(() => setRunConfetti(false), 5000);

    return () => clearTimeout(timeoutId);
  }, [todaysDone]);

  return (
    <main
      className={`flex min-h-screen flex-col p-24 bg-base-300 ${inter.className}`}
    >
      <Navbar />
      <div className="max-w-7xl mx-auto">
        <ProblemSetTabs />
        <SuggestedProblems />
        {runConfetti && (
          <Confetti
            width={width}
            height={height} // height * 1 is too short
            gravity={0.2}
            style={{ zIndex: 30 }} // seems like default is 2?,i won't overflow anyway since overflow-y hidden
            recycle={true}
            confettiSource={{
              x: 0,
              y: -height,
              w: width,
              h: height,
            }}
          />
        )}
      </div>
    </main>
  );
}
