import { useNavigate } from "react-router-dom";
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
  LogOut,
  BookOpen,
  Brain,
  FileText,
  MapPin,
  Award,
  TrendingUp,
} from "lucide-react";

const Dashboard = () => {
  const usageStats = {
    mcqs_today: 0,
    pdfs_this_week: 0,
    ai_queries_today: 0,
  };
  const navigate = useNavigate();

  const handleSignOut = async () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  // const getSubscriptionLimits = (subscription: string) => {
  //   switch (subscription) {
  //     case "Core":
  //       return { mcqs: "Unlimited", pdfs: "Unlimited", ai: "Unlimited" };
  //     case "Elite":
  //       return { mcqs: "Unlimited", pdfs: "Unlimited", ai: "Unlimited" };
  //     default:
  //       return { mcqs: "3/day", pdfs: "1/week", ai: "2/day" };
  //   }
  // };

  const profileStr = localStorage.getItem("user");
  const profile = profileStr ? JSON.parse(profileStr) : null;

  return (
    <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 py-10">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            Welcome back,{" "}
            {profile ? profile.firstName + " " + profile.lastName : "User"}!
          </h1>
          <p className="text-muted-foreground mt-2">
            Continue your NHS career journey with NextDoc's AI-powered tools
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Badge
            variant={
              profile?.subscription_status === "Free" ? "secondary" : "default"
            }
          >
            {profile?.subscription_status || "Free"} Plan
          </Badge>
          <Button variant="outline" onClick={handleSignOut}>
            <LogOut className="h-4 w-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </div>

      {/* Usage Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">MCQ Practice</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{usageStats.mcqs_today}</div>
            <p className="text-xs text-muted-foreground">Today's limit: 0</p>
            {profile?.subscription_status === "Free" && (
              <Progress
                value={(usageStats.mcqs_today / 3) * 100}
                className="mt-2"
              />
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">PDF Downloads</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {usageStats.pdfs_this_week}
            </div>
            <p className="text-xs text-muted-foreground">Weekly limit: 0</p>
            {profile?.subscription_status === "Free" && (
              <Progress
                value={(usageStats.pdfs_this_week / 1) * 100}
                className="mt-2"
              />
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">AI Queries</CardTitle>
            <Brain className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {usageStats.ai_queries_today}
            </div>
            <p className="text-xs text-muted-foreground">Daily limit: 0</p>
            {profile?.subscription_status === "Free" && (
              <Progress
                value={(usageStats.ai_queries_today / 2) * 100}
                className="mt-2"
              />
            )}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card
          className="hover:shadow-lg transition-shadow cursor-pointer"
          onClick={() => navigate("/plab-quiz")}
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              PLAB-1 Quiz
            </CardTitle>
            <CardDescription>
              Practice MCQs with AI-powered explanations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full" onClick={() => navigate("/plab-quiz")}>
              Start Quiz
            </Button>
          </CardContent>
        </Card>

        <Card
          className="hover:shadow-lg transition-shadow cursor-pointer"
          onClick={() => navigate("/cv-booster")}
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              CV Booster™
            </CardTitle>
            <CardDescription>
              AI-powered CV enhancement and review
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full" onClick={() => navigate("/cv-booster")}>
              Enhance CV
            </Button>
          </CardContent>
        </Card>

        <Card
          className="hover:shadow-lg transition-shadow cursor-pointer"
          onClick={() => navigate("/interview-sim")}
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5" />
              InterviewSim™
            </CardTitle>
            <CardDescription>
              Practice NHS interviews with AI feedback
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full">Start Practice</Button>
          </CardContent>
        </Card>

        <Card
          className="hover:shadow-lg transition-shadow cursor-pointer"
          onClick={() => navigate("/gap-map")}
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              GapMap™
            </CardTitle>
            <CardDescription>Personalized NHS career roadmap</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full">View Roadmap</Button>
          </CardContent>
        </Card>

        <Card
          className="hover:shadow-lg transition-shadow cursor-pointer"
          onClick={() => navigate("/sponsor-match")}
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              SponsorMatch™
            </CardTitle>
            <CardDescription>
              Find NHS sponsorship opportunities
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full">Find Sponsors</Button>
          </CardContent>
        </Card>

        <Card
          className="hover:shadow-lg transition-shadow cursor-pointer"
          onClick={() => navigate("/study-materials")}
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              Study Materials
            </CardTitle>
            <CardDescription>Access PDFs and CPD modules</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full">Browse Materials</Button>
          </CardContent>
        </Card>
      </div>

      {/* Subscription Upgrade */}
      {profile?.subscription_status === "Free" && (
        <Alert className="mb-8">
          <TrendingUp className="h-4 w-4" />
          <AlertDescription>
            <div className="flex justify-between items-center">
              <span>
                Upgrade to unlock unlimited access to all features and premium
                content.
              </span>
              <Button size="sm" onClick={() => navigate("/products")}>
                Upgrade Now
              </Button>
            </div>
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default Dashboard;
