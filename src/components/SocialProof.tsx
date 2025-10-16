import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Trophy, CheckCircle } from "lucide-react";

// Removed testimonials as platform is new - replaced with verified statistics and achievements
const achievements = [
  {
    title: "Platform Launch",
    description: "AI-powered NHS career tools launching September 2025",
    icon: Trophy,
    status: "Coming Soon",
  },
  {
    title: "Mentor Network",
    description:
      "Expert NHS consultants and trainers ready to support your journey",
    icon: Users,
    status: "Ready to Launch",
  },
  {
    title: "Evidence-Based Content",
    description: "Content developed by practicing NHS professionals",
    icon: CheckCircle,
    status: "Verified",
  },
];

const stats = [
  { number: "Sep 2025", label: "Launch Date", icon: Star },
  { number: "NHS", label: "Aligned Content", icon: Trophy },
  { number: "AI + Human", label: "Expert Guidance", icon: Users },
  { number: "Global", label: "Accessibility", icon: CheckCircle },
];

export const SocialProof = () => {
  return (
    <section className="py-8 md:py-12 bg-gradient-to-br from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Built for NHS Success</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Expert-developed tools and content designed specifically for
            international medical professionals transitioning to the NHS.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="text-center border-2 hover:border-primary/30 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="h-4 w-4 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Platform Features */}
        <div className="grid md:grid-cols-3 gap-4">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-4 text-center">
                {/* Icon */}
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="h-5 w-5 text-primary" />
                </div>

                {/* Title */}
                <h3 className="font-semibold text-lg mb-2">
                  {achievement.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {achievement.description}
                </p>

                {/* Status Badge */}
                <Badge
                  variant={
                    achievement.status === "Verified" ? "default" : "secondary"
                  }
                  className="text-xs"
                >
                  {achievement.status}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="flex items-center gap-2 text-sm font-medium">
              <CheckCircle className="h-4 w-4 text-green-500" />
              NHS Aligned
            </div>
            <div className="flex items-center gap-2 text-sm font-medium">
              <CheckCircle className="h-4 w-4 text-green-500" />
              GDPR Compliant
            </div>
            <div className="flex items-center gap-2 text-sm font-medium">
              <CheckCircle className="h-4 w-4 text-green-500" />
              ICO Registered
            </div>
            <div className="flex items-center gap-2 text-sm font-medium">
              <CheckCircle className="h-4 w-4 text-green-500" />
              Coming Soon - Reviews
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
