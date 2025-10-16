import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  MessageSquare,
  Mic,
  Square,
  Play,
} from "lucide-react";

interface InterviewSessionProps {
  config: any;
  onComplete: (data: any) => void;
  onBack: () => void;
}

const API_BASE = `${import.meta.env.VITE_API_BASE_URL}/tools`; // backend base URL

const InterviewSession = ({
  config,
  onComplete,
  onBack,
}: InterviewSessionProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(180);
  const [isRecording, setIsRecording] = useState(false);
  const [sessionStarted, setSessionStarted] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);

  const questions = config.questions || []; // dynamically from config

  // Handle empty questions
  if (questions.length === 0) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">No Questions Found</CardTitle>
          <CardDescription>
            There are no questions available for this interview configuration.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <Button variant="outline" onClick={onBack}>
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Setup
          </Button>
        </CardContent>
      </Card>
    );
  }

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (sessionStarted && timeRemaining > 0) {
      interval = setInterval(() => setTimeRemaining((t) => t - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [sessionStarted, timeRemaining]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const storedUser = localStorage.getItem("user");
  const userId = storedUser ? JSON.parse(storedUser)._id : null;

  const handleStartSession = async () => {
    try {
      const res = await fetch(`${API_BASE}/session/start`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: userId, config, questions }),
      });
      const data = await res.json();
      setSessionId(data.sessionId);
      setSessionStarted(true);
      setTimeRemaining(questions[0]?.timeLimit || 180);
    } catch (err) {
      console.error("Failed to start session:", err);
    }
  };

  const saveAnswerToBackend = async (questionIndex: number, answer: string) => {
    if (!sessionId) return;
    try {
      await fetch(`${API_BASE}/session/${sessionId}/answer`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ questionIndex, answer }),
      });
    } catch (err) {
      console.error("Failed to save answer:", err);
    }
  };

  const handleNextQuestion = async () => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = currentAnswer;
    setAnswers(updatedAnswers);

    await saveAnswerToBackend(currentQuestion, currentAnswer);

    setCurrentAnswer("");
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimeRemaining(questions[currentQuestion + 1].timeLimit);
    } else {
      if (sessionId) {
        await fetch(`${API_BASE}/session/${sessionId}/complete`, {
          method: "POST",
        });
      }
      onComplete({
        config,
        questions,
        answers: [...updatedAnswers, currentAnswer],
      });
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      const updatedAnswers = [...answers];
      updatedAnswers[currentQuestion] = currentAnswer;
      setAnswers(updatedAnswers);

      setCurrentQuestion(currentQuestion - 1);
      setCurrentAnswer(answers[currentQuestion - 1] || "");
      setTimeRemaining(questions[currentQuestion - 1].timeLimit);
    }
  };

  const handleRecordToggle = () => setIsRecording(!isRecording);

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (!sessionStarted) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">
            Ready to Start Your Interview?
          </CardTitle>
          <CardDescription>
            You'll have {questions.length} questions. Take your time and answer
            as naturally as possible.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">
              Interview Configuration
            </h4>
            <div className="text-sm text-blue-700 space-y-1">
              <p>
                <strong>Pathway:</strong> {config.pathway}
              </p>
              <p>
                <strong>Role:</strong> {config.role}
              </p>
              <p>
                <strong>Specialty:</strong> {config.specialty}
              </p>
              <p>
                <strong>Interview Type:</strong> {config.interviewType}
              </p>
            </div>
          </div>
          <div className="flex gap-4 justify-center">
            <Button variant="outline" onClick={onBack}>
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to Setup
            </Button>
            <Button
              onClick={handleStartSession}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700"
            >
              <Play className="h-4 w-4 mr-2" /> Start Interview
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>
                Question {currentQuestion + 1} of {questions.length}
              </CardTitle>
              <CardDescription>
                <Badge variant="secondary" className="mr-2">
                  {questions[currentQuestion].category}
                </Badge>
                Time remaining: {formatTime(timeRemaining)}
              </CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span
                className={`text-sm font-mono ${
                  timeRemaining < 30 ? "text-red-500" : "text-muted-foreground"
                }`}
              >
                {formatTime(timeRemaining)}
              </span>
            </div>
          </div>
          <Progress value={progress} className="mt-4" />
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-blue-600" /> Interview
            Question
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <p className="text-lg font-medium text-blue-900">
              {questions[currentQuestion].text}
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label htmlFor="answer" className="font-semibold">
                Your Answer:
              </label>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleRecordToggle}
                  className={isRecording ? "bg-red-100 border-red-300" : ""}
                >
                  {isRecording ? (
                    <>
                      {" "}
                      <Square className="h-4 w-4 mr-1 text-red-500" /> Stop
                      Recording{" "}
                    </>
                  ) : (
                    <>
                      {" "}
                      <Mic className="h-4 w-4 mr-1" /> Record Voice{" "}
                    </>
                  )}
                </Button>
                <span className="text-xs text-muted-foreground">
                  (Coming Soon)
                </span>
              </div>
            </div>

            <Textarea
              id="answer"
              value={currentAnswer}
              onChange={(e) => setCurrentAnswer(e.target.value)}
              placeholder="Type your answer here..."
              className="min-h-[200px]"
            />
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={currentQuestion === 0 ? onBack : handlePreviousQuestion}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />{" "}
          {currentQuestion === 0 ? "Back to Setup" : "Previous Question"}
        </Button>

        <Button
          onClick={handleNextQuestion}
          disabled={!currentAnswer.trim()}
          className="flex items-center gap-2"
        >
          {currentQuestion === questions.length - 1
            ? "Complete Interview"
            : "Next Question"}
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default InterviewSession;
