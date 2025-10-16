import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Calendar, Users, Trophy, ArrowRight } from "lucide-react";
import { Link } from "react-router";

const features = [
  "MRCPCH Foundation & Progress comprehensive preparation",
  "Clinical examination and OSCE training",
  "Expert guidance from consultant paediatricians",
  "Child development and safeguarding modules",
  "Mock examinations with detailed feedback",
  "Principal mentor support throughout training",
];

const timeline = [
  {
    phase: "Foundation",
    duration: "Months 1-4",
    description: "Basic paediatric sciences and child development foundation",
  },
  {
    phase: "Foundation Exam",
    duration: "Months 5-10",
    description: "MRCPCH Foundation examination preparation and practice",
  },
  {
    phase: "Progress Training",
    duration: "Months 11-16",
    description: "Advanced clinical knowledge and specialist paediatrics",
  },
  {
    phase: "Progress Exam",
    duration: "Months 17-20",
    description: "MRCPCH Progress examination and clinical skills assessment",
  },
];

const covered = [
  {
    title: "Neonatology",
    description: "Newborn care and intensive care medicine",
  },
  {
    title: "Paediatric Emergency",
    description: "Emergency and acute paediatric care",
  },
  {
    title: "Developmental Paediatrics",
    description: "Child development and neurodevelopmental disorders",
  },
  {
    title: "Paediatric Cardiology",
    description: "Congenital and acquired heart conditions",
  },
  {
    title: "Paediatric Oncology",
    description: "Childhood cancers and haematological disorders",
  },
  {
    title: "Community Paediatrics",
    description: "Child health promotion and safeguarding",
  },
];

export default function MRCPCH() {
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-primary-foreground text-primary">
              Principal Mentor
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              MRCPCH Preparation Program
            </h1>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              Excel in the MRCPCH examinations with our comprehensive paediatric
              training program led by experienced consultant paediatricians and
              principal mentors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/get-started">
                <Button size="lg" variant="secondary" className="px-8">
                  Start Your Paediatric Journey
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Meet Paediatric Consultants
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
              Why Choose Our MRCPCH Program?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive paediatric training with principal mentor guidance
              for all components of the MRCPCH examination pathway
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
                  Comprehensive paediatric training covering both Foundation and
                  Progress examinations
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Paediatric Consultants</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Learn from experienced NHS consultant paediatricians across
                  all subspecialties
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
                  Proven track record of helping paediatric trainees succeed in
                  MRCPCH examinations
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
              Progressive 20-month journey through MRCPCH Foundation and
              Progress
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
            MRCPCH Examination Components
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">MRCPCH Foundation</CardTitle>
                <p className="text-muted-foreground">Entry Level Assessment</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>200 MCQ questions</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>3 hours duration</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Basic paediatric sciences</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Child development & safeguarding</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Clinical problem solving</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">MRCPCH Progress</CardTitle>
                <p className="text-muted-foreground">Advanced Assessment</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Written paper + Clinical</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>3 hours written examination</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>13 clinical scenarios</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Advanced clinical knowledge</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Communication skills assessment</span>
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
              Paediatric Subspecialties Covered
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
          <h2 className="text-3xl font-bold mb-4">Ready to Excel in MRCPCH?</h2>
          <p className="text-xl opacity-90 mb-8">
            Join our principal mentor program and advance your paediatric career
            with expert guidance from consultant paediatricians.
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
              Connect with Paediatricians
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
