import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Calendar, Users, Trophy, ArrowRight } from "lucide-react";
import { Link } from "react-router";

const features = [
  "Comprehensive PLAB 1 & 2 preparation",
  "Mock examinations with detailed feedback",
  "Clinical scenario practice sessions",
  "Expert guidance from NHS consultants",
  "Flexible online and offline learning",
  "95% first-attempt pass rate",
];

const timeline = [
  {
    phase: "Assessment",
    duration: "Week 1",
    description:
      "Initial evaluation of current knowledge and personalized study plan creation",
  },
  {
    phase: "PLAB 1 Prep",
    duration: "Weeks 2-12",
    description:
      "Intensive theoretical preparation with practice questions and mock tests",
  },
  {
    phase: "PLAB 2 Training",
    duration: "Weeks 13-20",
    description:
      "Clinical scenario practice and communication skills development",
  },
  {
    phase: "Final Preparation",
    duration: "Weeks 21-24",
    description: "Final mock examinations and last-minute revision support",
  },
];

export default function PLAB() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-primary-foreground text-primary">
              PLAB Preparation
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              PLAB Exam Preparation
            </h1>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              Comprehensive preparation program for PLAB 1 & 2 examinations with
              proven success rates and expert guidance from experienced NHS
              consultants.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/get-started">
                <Button size="lg" variant="secondary" className="px-8">
                  Start Your Preparation
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Download Syllabus
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Why Choose Our PLAB Program?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive approach ensures you're fully prepared for both
              theoretical and practical components
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>24-Week Program</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Structured learning pathway designed to take you from initial
                  assessment to exam success
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Expert Mentors</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Learn from NHS consultants and doctors who have successfully
                  passed PLAB examinations
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Trophy className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>95% Success Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Industry-leading success rate with comprehensive support until
                  you pass
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Program Timeline */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Program Timeline</h2>
            <p className="text-muted-foreground">
              Structured 24-week journey from assessment to PLAB success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{item.phase}</CardTitle>
                    <Badge variant="outline">{item.duration}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PLAB Components */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            PLAB Examination Components
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">PLAB 1</CardTitle>
                <p className="text-muted-foreground">Knowledge Assessment</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>180 single best answer questions</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>3 hours examination duration</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Computer-based testing</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Clinical knowledge and problem-solving skills</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">PLAB 2</CardTitle>
                <p className="text-muted-foreground">
                  Clinical Skills Assessment
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>16 clinical scenarios (8 minutes each)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Simulated clinical environment</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Communication and clinical skills</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Patient interaction and examination</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your PLAB Journey?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Join hundreds of successful candidates who achieved their PLAB goals
            with our expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/get-started">
              <Button size="lg" variant="secondary" className="px-8">
                Enroll Now
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
