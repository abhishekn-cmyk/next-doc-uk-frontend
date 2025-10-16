import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Stethoscope,
  GraduationCap,
  Users,
  Send,
  MessageSquare,
  Globe,
  ArrowLeft,
  MapPin,
  CheckCircle,
  AlertCircle,
  Clock,
  Download,
  Calendar,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

import ProfileIntake from "@/components/ProfileIntake";

type StepStatus = "completed" | "pending" | "not-started";

type RoadmapStep = {
  id: number;
  title: string;
  description: string;
  status: StepStatus;
};

type RoadmapData = {
  title: string;
  progress: number;
  totalSteps: number;
  completedSteps: number;
  steps: RoadmapStep[];
};

// type for pathway keys
type PathwayKey =
  | "plab"
  | "mrcp"
  | "mrcs"
  | "mrcog"
  | "mrcpch"
  | "uk-grad"
  | "ielts"
  | "return"
  | "sas";

const GapMap = () => {
  const [currentStep, setCurrentStep] = useState<
    "pathway" | "intake" | "roadmap"
  >("pathway");
  const [selectedPathway, setSelectedPathway] = useState<PathwayKey | "">("");
  const [userProfile, setUserProfile] = useState<Record<string, unknown>>({});
  const [roadmapData] = useState<RoadmapData | null>(null);

  const pathways = [
    {
      key: "plab" as const,
      title: "PLAB Pathway",
      tag: "Most Popular",
      desc: "International Medical Graduates seeking NHS positions",
      milestones: "8 milestones • 12-18 months",
      color: "bg-blue-50",
      icon: <Globe className="w-6 h-6 text-blue-600" />,
    },
    {
      key: "mrcp" as const,
      title: "MRCP Pathway",
      tag: "Specialist",
      desc: "Royal College of Physicians membership",
      milestones: "7 milestones • 3-5 years",
      color: "bg-green-50",
      icon: <Users className="w-6 h-6 text-green-600" />,
    },
    {
      key: "mrcs" as const,
      title: "MRCS Pathway",
      tag: "Surgical",
      desc: "Royal College of Surgeons membership",
      milestones: "6 milestones • 2-4 years",
      color: "bg-rose-50",
      icon: <Stethoscope className="w-6 h-6 text-rose-600" />,
    },
    {
      key: "mrcog" as const,
      title: "MRCOG Pathway",
      tag: "O&G Focus",
      desc: "Obstetrics & Gynaecology specialization",
      milestones: "7 milestones • 3-4 years",
      color: "bg-purple-50",
      icon: <Users className="w-6 h-6 text-purple-600" />,
    },
    {
      key: "mrcpch" as const,
      title: "MRCPCH Pathway",
      tag: "Paediatrics",
      desc: "Paediatrics and Child Health specialization",
      milestones: "6 milestones • 3-4 years",
      color: "bg-pink-50",
      icon: <Users className="w-6 h-6 text-pink-600" />,
    },
    {
      key: "uk-grad" as const,
      title: "UK Graduate",
      tag: "UK Trained",
      desc: "Foundation to Specialty training progression",
      milestones: "6 milestones • 5-8 years",
      color: "bg-indigo-50",
      icon: <GraduationCap className="w-6 h-6 text-indigo-600" />,
    },
    {
      key: "ielts" as const,
      title: "IELTS/OET Pathway",
      tag: "Language",
      desc: "English language proficiency for medical practice",
      milestones: "4 milestones • 3-6 months",
      color: "bg-teal-50",
      icon: <Globe className="w-6 h-6 text-teal-600" />,
    },
    {
      key: "return" as const,
      title: "Return to Practice",
      tag: "Reintegration",
      desc: "Re-entering NHS practice after a break",
      milestones: "5 milestones • 6-12 months",
      color: "bg-amber-50",
      icon: <Send className="w-6 h-6 text-amber-600" />,
    },
    {
      key: "sas" as const,
      title: "SAS/AHP Pathway",
      tag: "Non-Training",
      desc: "SAS doctors and Allied Health Professionals",
      milestones: "Variable milestones",
      color: "bg-gray-50",
      icon: <MessageSquare className="w-6 h-6 text-gray-600" />,
    },
  ];

  const handlePathwaySelect = (pathwayKey: PathwayKey) => {
    setSelectedPathway(pathwayKey);
    setCurrentStep("intake");
  };

  const handleProfileComplete = (profile: Record<string, unknown>) => {
    setUserProfile(profile);
    console.log(userProfile);
    // TODO: generate roadmap logic here
    // setRoadmapData(generateRoadmap(selectedPathway, profile));
    setCurrentStep("roadmap");
  };

  const getStatusColor = (status: StepStatus) => {
    switch (status) {
      case "completed":
        return "text-green-600";
      case "pending":
        return "text-orange-600";
      case "not-started":
        return "text-gray-400";
      default:
        return "text-gray-400";
    }
  };

  const getStatusIcon = (status: StepStatus) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-6 w-6 text-green-600" />;
      case "pending":
        return <Clock className="h-6 w-6 text-orange-600" />;
      case "not-started":
        return <AlertCircle className="h-6 w-6 text-gray-400" />;
      default:
        return <AlertCircle className="h-6 w-6 text-gray-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-background max-w-7xl px-5 sm:px-8 md:px-10 py-5">
      <div className="container mx-auto px-4 py-8">
        {/* Top Header */}
        <div className="mb-6">
          <Link
            to="/products"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Link>

          <div className="flex items-center gap-3 mb-2">
            <MapPin className="h-8 w-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-foreground">GapMap™</h1>
            <Badge variant="secondary">AI-Powered</Badge>
          </div>
          <p className="text-xl text-muted-foreground">
            Map your NHS career journey with personalized roadmaps and milestone
            tracking
          </p>
        </div>

        {/* Step 1: Pathway Selection */}
        {currentStep === "pathway" && (
          <section className="w-full">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold text-gray-800">
                Choose Your NHS Pathway
              </h2>
              <p className="text-gray-600 mt-2">
                Select your career pathway to generate a personalized roadmap
                with milestones, deadlines, and next steps
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {pathways.map((item) => (
                <div
                  key={item.key}
                  className={`${item.color} p-6 rounded-xl shadow-md border hover:shadow-lg transition`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="p-2 rounded-lg bg-white shadow">
                      {item.icon}
                    </span>
                    <span className="text-xs px-2 py-1 rounded-full bg-white shadow text-gray-700 font-medium">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                  <p className="text-sm text-gray-500 mt-2">
                    {item.milestones}
                  </p>
                  <button
                    onClick={() => handlePathwaySelect(item.key)}
                    className="mt-4 w-full bg-blue-700 hover:bg-blue-800 text-white py-2 rounded-lg font-medium transition"
                  >
                    Select Pathway →
                  </button>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600">Not Sure Which Pathway?</p>
              <button className="mt-3 px-6 py-3 rounded-lg bg-blue-100 text-blue-700 font-medium hover:bg-blue-200 transition">
                Book Career Consultation
              </button>
            </div>
          </section>
        )}

        {/* Step 2: Intake Form */}
        {currentStep === "intake" && (
          <ProfileIntake
            pathway={selectedPathway}
            onComplete={handleProfileComplete}
            onBack={() => setCurrentStep("pathway")}
          />
        )}

        {/* Step 3: Roadmap */}
        {currentStep === "roadmap" && roadmapData && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl">
                      {roadmapData.title}
                    </CardTitle>
                    <CardDescription>
                      Your personalized NHS career roadmap
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">
                      {roadmapData.progress}%
                    </div>
                    <p className="text-sm text-muted-foreground">Complete</p>
                  </div>
                </div>
                <Progress value={roadmapData.progress} className="mt-4" />
                <p className="text-sm text-muted-foreground">
                  {roadmapData.completedSteps} of {roadmapData.totalSteps}{" "}
                  milestones completed
                </p>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Career Timeline</CardTitle>
                <CardDescription>
                  Track your progress through each milestone
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {roadmapData.steps.map((step, index) => (
                    <div
                      key={step.id}
                      className="flex items-start gap-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex-shrink-0">
                        {getStatusIcon(step.status)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4
                            className={`font-semibold ${getStatusColor(
                              step.status
                            )}`}
                          >
                            {step.title}
                          </h4>
                          <Badge
                            variant={
                              step.status === "completed"
                                ? "default"
                                : step.status === "pending"
                                ? "secondary"
                                : "outline"
                            }
                          >
                            {step.status === "completed"
                              ? "Completed"
                              : step.status === "pending"
                              ? "In Progress"
                              : "Not Started"}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          {step.description}
                        </p>

                        {step.status === "pending" && (
                          <div className="bg-orange-50 border border-orange-200 rounded p-3">
                            <p className="text-sm text-orange-800 mb-2">
                              <strong>Next Actions:</strong>
                            </p>
                            <div className="flex gap-2 flex-wrap">
                              <Button
                                size="sm"
                                variant="outline"
                                className="text-xs"
                              >
                                Book Mentor Session
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="text-xs"
                              >
                                View Requirements
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="text-xs"
                              >
                                Update CV
                              </Button>
                            </div>
                          </div>
                        )}

                        {step.status === "not-started" &&
                          index ===
                            roadmapData.steps.findIndex(
                              (s) => s.status === "not-started"
                            ) && (
                            <div className="bg-blue-50 border border-blue-200 rounded p-3">
                              <p className="text-sm text-blue-800 mb-2">
                                <strong>Ready to start:</strong> This is your
                                next milestone
                              </p>
                              <div className="flex gap-2 flex-wrap">
                                <Button size="sm" className="text-xs">
                                  Get Started
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="text-xs"
                                >
                                  Learn More
                                </Button>
                              </div>
                            </div>
                          )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Upcoming Deadlines
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-2 bg-orange-50 rounded">
                      <span className="text-sm">MRCP Part 2 Application</span>
                      <Badge variant="secondary">15 days</Badge>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-blue-50 rounded">
                      <span className="text-sm">CPD Portfolio Review</span>
                      <Badge variant="outline">30 days</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Recommended Actions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      📚 Complete CPD Mastery™ Course
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      🎯 Practice with InterviewSim™
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      👨‍⚕️ Book Principal Mentor Session
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex gap-4 justify-center">
              <Button
                variant="outline"
                onClick={() => setCurrentStep("pathway")}
              >
                Change Pathway
              </Button>
              <Button className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Download Roadmap PDF
              </Button>
              <Button variant="secondary">Share with Mentor</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GapMap;
