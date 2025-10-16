import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Calendar, Users, Trophy, ArrowRight } from "lucide-react";
import { Link } from "react-router";

const features = [
  "MRCS Part A & Part B comprehensive preparation",
  "OSCE clinical examination training",
  "Expert guidance from consultant surgeons",
  "Surgical skills workshops and simulations",
  "Mock examinations with detailed feedback",
  "Principal mentor support throughout",
];

const timeline = [
  {
    phase: "Foundation",
    duration: "Months 1-3",
    description: "Basic sciences and surgical principles foundation building",
  },
  {
    phase: "Part A Prep",
    duration: "Months 4-8",
    description:
      "Intensive Part A preparation with MCQ practice and mock tests",
  },
  {
    phase: "Part B & OSCE",
    duration: "Months 9-15",
    description: "Clinical skills development and OSCE examination preparation",
  },
  {
    phase: "Final Mastery",
    duration: "Month 16",
    description: "Final preparation and surgical skills refinement",
  },
];

const covered = [
  {
    title: "General Surgery",
    description: "Core surgical principles and procedures",
  },
  {
    title: "Trauma & Orthopaedics",
    description: "Musculoskeletal system and injuries",
  },
  {
    title: "Urology",
    description: "Genitourinary system surgery",
  },
  {
    title: "Vascular Surgery",
    description: "Circulatory system procedures",
  },
  {
    title: "Cardiothoracic",
    description: "Heart and chest surgery",
  },
  {
    title: "eurosurgery",
    description: "Central nervous system surgery",
  },
];

export default function MRCS() {
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-primary-foreground text-primary">
              Principal Mentor
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              MRCS Preparation Program
            </h1>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              Excel in the MRCS examinations with our comprehensive surgical
              training program led by experienced consultant surgeons and
              principal mentors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/get-started">
                <Button size="lg" variant="secondary" className="px-8">
                  Start Your Surgical Journey
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Meet Consultant Mentors
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
              Why Choose Our MRCS Program?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive surgical training with principal mentor guidance for
              all components of the MRCS examination
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
                  Comprehensive surgical training covering all aspects of MRCS
                  with principal mentor support
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
              Progressive 16-month journey to MRCS success
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
            MRCS Examination Components
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">MRCS Part A</CardTitle>
                <p className="text-muted-foreground">Applied Basic Sciences</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>2 papers (135 MCQs each)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>2.5 hours per paper</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Applied basic sciences</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Principles of surgery</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">MRCS Part B</CardTitle>
                <p className="text-muted-foreground">
                  OSCE Clinical Examination
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>18 OSCE stations</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>9 minutes per station</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Clinical and communication skills</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Applied surgical knowledge</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-medium mb-4">
              Surgical Specialties Covered
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {covered.map((item, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
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
