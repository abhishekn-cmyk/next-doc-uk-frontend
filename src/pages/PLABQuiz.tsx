import Navigation from "@/components/Navigation";

import PLABQuiz from "@/components/PLABQuiz";

const PLABQuizPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <PLABQuiz />
      </main>
    </div>
  );
};

export default PLABQuizPage;
