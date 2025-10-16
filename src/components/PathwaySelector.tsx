import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, GraduationCap, Award, Users, Stethoscope, RotateCcw, ArrowRight } from "lucide-react";

interface PathwaySelectorProps {
  onSelect: (pathway: string) => void;
}

const PathwaySelector = ({ onSelect }: PathwaySelectorProps) => {
  const pathways = [
    {
      id: "plab",
      title: "PLAB Pathway",
      description: "International Medical Graduates seeking NHS positions",
      icon: Globe,
      badge: "Most Popular",
      color: "from-blue-50 to-blue-100 border-blue-200",
      steps: "8 milestones • 12-18 months"
    },
    {
      id: "mrcp",
      title: "MRCP Pathway",
      description: "Royal College of Physicians membership",
      icon: Award,
      badge: "Specialist",
      color: "from-green-50 to-green-100 border-green-200",
      steps: "7 milestones • 3-5 years"
    },
    {
      id: "mrcs",
      title: "MRCS Pathway",
      description: "Royal College of Surgeons membership",
      icon: Stethoscope,
      badge: "Surgical",
      color: "from-red-50 to-red-100 border-red-200",
      steps: "6 milestones • 2-4 years"
    },
    {
      id: "mrcog",
      title: "MRCOG Pathway",
      description: "Obstetrics & Gynaecology specialization",
      icon: Users,
      badge: "O&G Focus",
      color: "from-purple-50 to-purple-100 border-purple-200",
      steps: "7 milestones • 3-4 years"
    },
    {
      id: "mrcpch",
      title: "MRCPCH Pathway",
      description: "Paediatrics and Child Health specialization",
      icon: Users,
      badge: "Paediatrics",
      color: "from-pink-50 to-pink-100 border-pink-200",
      steps: "6 milestones • 3-4 years"
    },
    {
      id: "uk-grad",
      title: "UK Graduate",
      description: "Foundation to Specialty training progression",
      icon: GraduationCap,
      badge: "UK Trained",
      color: "from-indigo-50 to-indigo-100 border-indigo-200",
      steps: "6 milestones • 5-8 years"
    },
    {
      id: "ielts-oet",
      title: "IELTS/OET Pathway",
      description: "English language proficiency for medical practice",
      icon: Globe,
      badge: "Language",
      color: "from-teal-50 to-teal-100 border-teal-200",
      steps: "4 milestones • 3-6 months"
    },
    {
      id: "returner",
      title: "Return to Practice",
      description: "Re-entering NHS practice after a break",
      icon: RotateCcw,
      badge: "Reintegration",
      color: "from-orange-50 to-orange-100 border-orange-200",
      steps: "5 milestones • 6-12 months"
    },
    {
      id: "sas-ahp",
      title: "SAS/AHP Pathway",
      description: "SAS doctors and Allied Health Professionals",
      icon: Stethoscope,
      badge: "Non-Training",
      color: "from-gray-50 to-gray-100 border-gray-200",
      steps: "Variable milestones"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-4">Choose Your NHS Pathway</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Select your career pathway to generate a personalized roadmap with milestones, deadlines, and next steps
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pathways.map((pathway) => {
          const Icon = pathway.icon;
          return (
            <Card 
              key={pathway.id}
              className={`cursor-pointer transition-all hover:shadow-lg hover:scale-105 bg-gradient-to-br ${pathway.color}`}
              onClick={() => onSelect(pathway.id)}
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded-lg shadow-sm">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{pathway.title}</CardTitle>
                      <Badge variant="secondary" className="mt-1">{pathway.badge}</Badge>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-left mb-3">{pathway.description}</CardDescription>
                <div className="text-xs text-muted-foreground mb-3">
                  {pathway.steps}
                </div>
              </CardHeader>
              
              <CardContent>
                <Button className="w-full group">
                  Select Pathway
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className="bg-blue-50 border-blue-200 mt-8">
        <CardContent className="pt-6">
          <div className="text-center">
            <h3 className="font-semibold text-blue-900 mb-2">Not Sure Which Pathway?</h3>
            <p className="text-sm text-blue-700 mb-4">
              Book a consultation with our Principal Mentors to discuss your career goals
            </p>
            <Button variant="outline" className="border-blue-300 text-blue-700">
              Book Career Consultation
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PathwaySelector;