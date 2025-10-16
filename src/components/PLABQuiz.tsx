import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  BookOpen,
  Flag,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  XCircle,
  AlertTriangle,
} from "lucide-react";
import toast from "react-hot-toast";
import api from "@/utils/api";

interface Question {
  id: string;
  examId: string;
  question_text: string;
  option_a: string;
  option_b: string;
  option_c: string;
  option_d: string;
  correct_answer: string;
  rationale: string;
  category: string;
  difficulty: string;
  cpd_tag: boolean;
}

interface QuizSession {
  id: string;
  current_question: number;
  total_questions: number;
  answers: any[];
  flagged_questions: number[];
  filters: any;
  completed: boolean;
  score: number;
}

const PLABQuiz: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [showRationale, setShowRationale] = useState(false);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [flaggedQuestions, setFlaggedQuestions] = useState<Set<number>>(
    new Set()
  );
  const [quizSession, setQuizSession] = useState<QuizSession | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState({
    category: "",
    difficulty: "",
    cpd_tag: "",
  });
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    if (user && user._id) {
      setAuthenticated(true);
      initializeQuiz();
    } else {
      toast.error("Please login to start the quiz");
      setIsLoading(false);
    }
  }, []);

  const initializeQuiz = async () => {
    try {
      console.log("Initializing quiz...");
      await loadQuestions();
    } catch (err) {
      console.error("Quiz init error", err);
      toast.error("Error initializing quiz");
    } finally {
      setIsLoading(false);
    }
  };

  const loadQuestions = async () => {
    try {
      console.log("Loading questions...");
      const { data } = await api.get("/questions");
      console.log("Questions fetched:", data);

      if (data && data.questions.length > 0) {
        const mappedQuestions = data.questions.map((q: any) => ({
          id: q._id,
          examId: q.examId,
          question_text: q.text,
          option_a: q.optionA,
          option_b: q.optionB,
          option_c: q.optionC,
          option_d: q.optionD,
          correct_answer: q.correctAnswer,
          rationale: q.rationale || "",
          category: q.category,
          difficulty: q.difficulty,
          cpd_tag: q.cpdTag,
        }));

        setQuestions(mappedQuestions);
        console.log("Mapped questions:", mappedQuestions);

        // Create session with examId from first question
        const firstExamId = mappedQuestions[0].examId;
        if (!quizSession) {
          await createNewSession(mappedQuestions.length, firstExamId);
        }
      } else {
        toast("No questions found");
      }
    } catch (err) {
      console.error("Error loading questions", err);
      toast.error("Error loading questions");
    }
  };

  const createNewSession = async (totalQuestions: number, examId: string) => {
    try {
      const user = JSON.parse(localStorage.getItem("user") || "{}");
      const userId = user._id;

      console.log("Creating new session...");
      console.log("User ID:", userId, "Exam ID:", examId, "Filters:", filters);

      if (!examId) {
        toast.error("Exam ID not found. Cannot start session.");
        return;
      }

      const { data } = await api.post("/sessions/start", {
        userId,
        examId,
        filters,
      });

      console.log("Session created:", data);
      setFilters(filters)

      setQuizSession({
        id: data.sessionId,
        current_question: data.currentQuestion,
        total_questions: totalQuestions,
        answers: [],
        flagged_questions: [],
        filters,
        completed: false,
        score: data.score,
      });
    } catch (err) {
      console.error("Error creating session", err);
      toast.error("Error creating quiz session");
    }
  };

  const handleAnswerSelect = (answer: string) => {
    if (!isAnswerSubmitted) {
      console.log("Selected answer:", answer);
      setSelectedAnswer(answer);
    }
  };

  const handleSubmitAnswer = async () => {
    if (!selectedAnswer || !quizSession) return;

    setIsAnswerSubmitted(true);
    setShowRationale(true);

    const currentQuestion = questions[currentQuestionIndex];

    try {
      console.log("Submitting answer...");
      console.log("Session ID:", quizSession.id);
      console.log("Question ID:", currentQuestion.id);
      console.log("Selected Answer:", selectedAnswer);

      const { data } = await api.post(`/sessions/${quizSession.id}/answer`, {
        questionId: currentQuestion.id,
        selectedAnswer,
      });

      console.log("Answer submission response:", data);

      setQuizSession((prev) => {
        const newState = {
          ...prev!,
          current_question: data.currentQuestion,
          score: data.score,
          answers: [
            ...(prev?.answers || []),
            {
              questionId: currentQuestion.id,
              selectedAnswer,
              correctAnswer: currentQuestion.correct_answer,
              isCorrect: selectedAnswer === currentQuestion.correct_answer,
            },
          ],
        };
        console.log("Updated quiz session state:", newState);
        return newState;
      });
    } catch (err) {
      console.error("Error submitting answer", err);
    }
  };

  const handleNext = () => {
    console.log("Navigating next from index:", currentQuestionIndex);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer("");
      setShowRationale(false);
      setIsAnswerSubmitted(false);

      if (quizSession?.answers?.[currentQuestionIndex + 1]) {
        const savedAnswer = quizSession.answers[currentQuestionIndex + 1];
        setSelectedAnswer(savedAnswer.selectedAnswer);
        setShowRationale(true);
        setIsAnswerSubmitted(true);
      }
    }
  };

  const handlePrevious = () => {
    console.log("Navigating previous from index:", currentQuestionIndex);
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedAnswer("");
      setShowRationale(false);
      setIsAnswerSubmitted(false);

      if (quizSession?.answers?.[currentQuestionIndex - 1]) {
        const savedAnswer = quizSession.answers[currentQuestionIndex - 1];
        setSelectedAnswer(savedAnswer.selectedAnswer);
        setShowRationale(true);
        setIsAnswerSubmitted(true);
      }
    }
  };

  const toggleFlag = async () => {
    if (!quizSession) return;
    console.log("Toggling flag for question index:", currentQuestionIndex);

    try {
      const { data } = await api.post(`/sessions/${quizSession.id}/flag`, {
        questionIndex: currentQuestionIndex,
      });
      console.log("Flag response:", data);
      setFlaggedQuestions(new Set(data.flaggedQuestions));
    } catch (err) {
      console.error("Error flagging question", err);
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center h-96">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  if (!authenticated) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Please Login</CardTitle>
            <CardDescription>
              You must be logged in to access the quiz.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle>No Questions Available</CardTitle>
            <CardDescription>
              Please try adjusting your filters or contact support.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <BookOpen className="h-6 w-6" />
            PLAB-1 Emergency Pack
          </h1>
          <Badge variant="outline">
            Q{currentQuestionIndex + 1}/{questions.length}
          </Badge>
        </div>

        <Progress value={progress} className="mb-4" />
      </div>

      {/* Question Card */}
      <Card className="mb-6">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div className="flex gap-2">
              <Badge variant="secondary">{currentQuestion.category}</Badge>
              <Badge variant="outline">{currentQuestion.difficulty}</Badge>
              {currentQuestion.cpd_tag && <Badge>CPD</Badge>}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={toggleFlag}
              className={
                flaggedQuestions.has(currentQuestionIndex)
                  ? "bg-yellow-100"
                  : ""
              }
            >
              <Flag className="h-4 w-4" />
            </Button>
          </div>
          <CardTitle className="text-lg leading-relaxed">
            {currentQuestion.question_text}
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="space-y-3 mb-6">
            {[
              { key: "A", text: currentQuestion.option_a },
              { key: "B", text: currentQuestion.option_b },
              { key: "C", text: currentQuestion.option_c },
              { key: "D", text: currentQuestion.option_d },
            ].map((option) => (
              <div
                key={option.key}
                className={`p-4 border rounded-lg transition-all ${
                  selectedAnswer === option.key
                    ? isAnswerSubmitted
                      ? option.key === currentQuestion.correct_answer
                        ? "bg-green-50 border-green-300"
                        : "bg-red-50 border-red-300"
                      : "bg-primary/10 border-primary"
                    : "hover:bg-muted border-border"
                } ${isAnswerSubmitted ? "cursor-default" : "cursor-pointer"}`}
                onClick={() => handleAnswerSelect(option.key)}
              >
                <div className="flex items-start gap-3">
                  <span className="font-medium text-primary">{option.key}.</span>
                  <span className="flex-1">{option.text}</span>
                  {isAnswerSubmitted &&
                    option.key === currentQuestion.correct_answer && (
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                    )}
                  {isAnswerSubmitted &&
                    selectedAnswer === option.key &&
                    option.key !== currentQuestion.correct_answer && (
                      <XCircle className="h-5 w-5 text-red-600" />
                    )}
                </div>
              </div>
            ))}
          </div>

          {!isAnswerSubmitted && selectedAnswer && (
            <Button onClick={handleSubmitAnswer} className="w-full mb-4">
              Submit Answer
            </Button>
          )}

          {showRationale && (
            <Alert className="mb-4">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <strong>Explanation:</strong> {currentQuestion.rationale}
              </AlertDescription>
            </Alert>
          )}

          {/* Navigation */}
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Previous
            </Button>

            <Button
              onClick={handleNext}
              disabled={currentQuestionIndex === questions.length - 1}
            >
              Next
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Quiz Stats */}
      {quizSession && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Session Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">
                  {quizSession.score || 0}
                </div>
                <div className="text-sm text-muted-foreground">Correct</div>
              </div>
              <div>
                <div className="text-2xl font-bold">{flaggedQuestions.size}</div>
                <div className="text-sm text-muted-foreground">Flagged</div>
              </div>
              <div>
                <div className="text-2xl font-bold">{currentQuestionIndex + 1}</div>
                <div className="text-sm text-muted-foreground">
                  of {questions.length}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default PLABQuiz;
