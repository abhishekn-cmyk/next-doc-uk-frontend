import { ExamCard } from "./ExamCard";

interface Exam {
  title: string;
  description: string;
}

interface ExamSectionProps {
  title: string;
  exams: Exam[];
}

export function ExamSection({ title, exams }: ExamSectionProps) {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {exams.map((exam, index) => (
          <ExamCard
            key={index}
            title={exam.title}
            description={exam.description}
          />
        ))}
      </div>
    </section>
  );
}
