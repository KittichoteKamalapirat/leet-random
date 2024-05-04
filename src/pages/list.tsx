import React from "react";
import Navbar from "../components/Navbar";
import ProblemList from "../components/ProblemList";

const ListPage = () => {
  return (
    <main className={`flex min-h-screen flex-col p-24`}>
      <Navbar />
      <ProblemList />
    </main>
  );
};
export default ListPage;
