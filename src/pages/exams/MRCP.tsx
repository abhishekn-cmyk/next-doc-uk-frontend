import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Calendar, Users, Trophy, ArrowRight } from "lucide-react";
import { Link } from "react-router";

const features = [
  "MRCP Part 1 & Part 2 comprehensive preparation",
  "PACES clinical examination training",
  "Expert guidance from UK consultants",
  "Interactive case-based learning",
  "Mock examinations with detailed feedback",
  "High first-attempt success rates",
];

const timeline = [
  {
    phase: "Foundation",
    duration: "Months 1-3",
    description: "Core medical knowledge building and exam familiarization",
  },
  {
    phase: "Part 1 Prep",
    duration: "Months 4-8",
    description:
      "Intensive Part 1 preparation with practice questions and mock tests",
  },
  {
    phase: "Part 2 & PACES",
    duration: "Months 9-15",
    description:
      "Clinical skills development and PACES examination preparation",
  },
  {
    phase: "Final Review",
    duration: "Month 16",
    description: "Comprehensive revision and confidence building",
  },
];

export default function MRCP() {
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-primary-foreground text-primary">
              Principal Mentor
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              MRCP Preparation Program
            </h1>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              Master the MRCP examinations with our comprehensive preparation
              program led by experienced UK consultants and principal mentors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/get-started">
                <Button size="lg" variant="secondary" className="px-8">
                  Begin Your MRCP Journey
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Meet Your Mentors
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
              Why Choose Our MRCP Program?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive preparation with principal mentor guidance for all
              three parts of the MRCP examination
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
                <CardTitle>16-Month Program</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Comprehensive preparation covering all aspects of MRCP
                  examinations with principal mentor support
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>UK Consultants</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Learn from experienced NHS consultants and principal mentors
                  who understand the UK system
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Trophy className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>High Success Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Proven track record of helping international doctors succeed
                  in MRCP examinations
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
            <h2 className="text-3xl font-bold mb-4">Program Structure</h2>
            <p className="text-muted-foreground">
              Progressive 16-month journey to MRCP success
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
            MRCP Examination Components
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">MRCP Part 1</CardTitle>
                <p className="text-muted-foreground">Applied Knowledge Test</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>200 MCQ questions</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>3.5 hours duration</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Core medical knowledge</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">MRCP Part 2</CardTitle>
                <p className="text-muted-foreground">Written Examination</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>3 papers (2.5 hours each)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Clinical problem solving</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Applied medical knowledge</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">PACES</CardTitle>
                <p className="text-muted-foreground">
                  Clinical Skills Assessment
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>5 clinical stations</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>20 minutes per station</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Real patient interactions</span>
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
          <h2 className="text-3xl font-bold mb-4">Ready to Excel in MRCP?</h2>
          <p className="text-xl opacity-90 mb-8">
            Join our principal mentor program and advance your physician career
            with expert guidance from UK consultants.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/get-started">
              <Button size="lg" variant="secondary" className="px-8">
                Start Your Training
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Connect with Mentors
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
