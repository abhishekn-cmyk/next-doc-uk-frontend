import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Calendar, Users, Trophy, ArrowRight } from "lucide-react";
import { Link } from "react-router";

const features = [
  "MRCOG Part 1, 2 & 3 comprehensive preparation",
  "Clinical assessment training with real scenarios",
  "Expert guidance from consultant obstetricians",
  "Subspecialty training modules",
  "Mock examinations with detailed feedback",
  "Principal mentor support throughout journey",
];

const timeline = [
  {
    phase: "Foundation",
    duration: "Months 1-4",
    description: "Basic sciences in obstetrics and gynaecology foundation",
  },
  {
    phase: "Part 1 Prep",
    duration: "Months 5-10",
    description:
      "Intensive Part 1 preparation with MCQ practice and mock tests",
  },
  {
    phase: "Part 2 Training",
    duration: "Months 11-16",
    description: "Clinical knowledge and problem-solving skills development",
  },
  {
    phase: "Part 3 & Clinical",
    duration: "Months 17-20",
    description:
      "Clinical assessment and practical skills examination preparation",
  },
];

const covered = [
  {
    title: "Maternal Medicine",
    description: "High-risk pregnancy management and maternal health",
  },
  {
    title: "Reproductive Medicine",
    description: "Fertility treatments and reproductive endocrinology",
  },
  {
    title: "Gynaecological Oncology",
    description: "Cancer diagnosis and treatment in women's health",
  },
  {
    title: "Urogynaecology",
    description: "Pelvic floor disorders and reconstructive surgery",
  },
];

export default function MRCOG() {
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-primary-foreground text-primary">
              Principal Mentor
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              MRCOG Preparation Program
            </h1>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              Excel in the MRCOG examinations with our comprehensive obstetrics
              and gynaecology training program led by experienced consultants
              and principal mentors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/get-started">
                <Button size="lg" variant="secondary" className="px-8">
                  Start Your O&G Journey
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Meet O&G Consultants
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
              Why Choose Our MRCOG Program?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive O&G training with principal mentor guidance for all
              components of the MRCOG examination
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
                <CardTitle>20-Month Program</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Comprehensive O&G training covering all aspects of MRCOG with
                  principal mentor support
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>O&G Consultants</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Learn from experienced NHS consultant obstetricians and
                  gynaecologists as principal mentors
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
                  Proven track record of helping trainees succeed in MRCOG
                  examinations
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
              Progressive 20-month journey to MRCOG success
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
            MRCOG Examination Components
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">MRCOG Part 1</CardTitle>
                <p className="text-muted-foreground">Basic Sciences</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>200 MCQ questions</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>2.5 hours duration</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Basic sciences in O&G</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Applied anatomy & physiology</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">MRCOG Part 2</CardTitle>
                <p className="text-muted-foreground">Written Examination</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>2 papers (MCQs & EMQs)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>2.5 hours each paper</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Clinical O&G knowledge</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Evidence-based practice</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">MRCOG Part 3</CardTitle>
                <p className="text-muted-foreground">Clinical Assessment</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>14 clinical tasks</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>12 minutes per task</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Clinical skills & communication</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Patient management scenarios</span>
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
              O&G Subspecialties Covered
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
          <h2 className="text-3xl font-bold mb-4">Ready to Excel in MRCOG?</h2>
          <p className="text-xl opacity-90 mb-8">
            Join our principal mentor program and advance your O&G career with
            expert guidance from consultant obstetricians and gynaecologists.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/get-started">
              <Button size="lg" variant="secondary" className="px-8">
                Begin Your Training
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Connect with O&G Consultants
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
