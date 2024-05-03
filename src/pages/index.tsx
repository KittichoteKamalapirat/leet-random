import Image from "next/image";
import { Inter } from "next/font/google";
import SuggestedProblems from "../components/SuggestedProblems";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col p-24 ${inter.className}`}>
      <Navbar />
      <SuggestedProblems />
    </main>
  );
}
