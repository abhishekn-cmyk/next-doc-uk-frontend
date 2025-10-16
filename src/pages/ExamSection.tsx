import { ExamCard } from "./ExamCard";

interface Exam {
  title: string;
  description: string;
}

interface ExamSectionProps {
  title: string;
  exams: Exam[];
  onJoinWaitlist?: () => void; // function prop
}

export function ExamSection({ title, exams, onJoinWaitlist }: ExamSectionProps) {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pl-4 sm:pl-8 lg:pl-12">
        {exams.map((exam, index) => (
          <ExamCard
            key={index}
            title={exam.title}
            description={exam.description}
            onJoinWaitlist={onJoinWaitlist} // pass down
          />
        ))}
      </div>
    </section>
  );
}


