import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Bot,
  Users,
  MapPin,
  CheckCircle,
  Stethoscope,
  GraduationCap,
  Briefcase,
  Globe,
  Award,
  ArrowRight,
  Brain,
  BookOpen,
  Target,Zap
} from "lucide-react";
import { useExams } from "@/hooks/useExam";
import { useProposals } from "@/hooks/useTrust";
import type { ITool } from "@/types/tool";
import { useProducts } from "@/hooks/useProduct";
import { Link } from "react-router-dom";
import { BuyNowButton } from "@/components/BuyNowButton";
import Head from "@/layout/Head";
import { useTools } from "@/hooks/useTools";
import { PRICES } from "@/lib/pricing";
import { usePrograms } from "@/hooks/useProgram";

const iconByTool: Record<string, React.ElementType> = {
  "GapMap™": MapPin,
  "CVBooster™": Bot,
  "SponsorMatch™": Briefcase,
  "InterviewSim+™": Users,
  "MentorConnect™": Stethoscope,
  "PLAB Mastery QBank": GraduationCap,
};

// Define exact order
const toolOrder = [
  "GapMap™",
  "CVBooster™",
  "SponsorMatch™",
  "InterviewSim+™",
  "MentorConnect™",
  "PLAB Mastery QBank",
];

const badgeColorByTool: Record<
  string,
  "default" | "secondary" | "destructive" | "outline"
> = {
  "GapMap™": "outline",
  "CVBooster™": "default",
  "SponsorMatch™": "destructive",
  "InterviewSim+™": "secondary",
  "MentorConnect™": "default",
  "PLAB Mastery QBank": "default",
};

const linkByTool: Record<string, string> = {
  "GapMap™": "/gap-map", // This is correct
  "CVBooster™": "/cv-booster", // Updated to match your route
  "SponsorMatch™": "/sponsor-match", // This is correct
  "InterviewSim+™": "/interviewsim", // This is correct
  "MentorConnect™": "/mentors", // This is correct
  "PLAB Mastery QBank": "/plab-quiz", // This is correct
};

export default function Products() {
  const [billingInterval, setBillingInterval] = useState<"month" | "year">(
    "month"
  );

  const { data: tools = [] } = useTools();
  const { data: exams = [] } = useExams();
  const { data: programs = [] } = usePrograms();
  const { data: products = [] } = useProducts();
  const { data: enterprise = [] } = useProposals();

  // Filter exams by category
  const englishExams = exams.filter(
    (e) => e.category === "English Proficiency"
  );
  const plabExams = exams.filter((e) => e.category === "PLAB");
  const postgraduateExams = exams.filter((e) => e.category === "Postgraduate");
  console.log(tools);
  const sortedTools: ITool[] = toolOrder
    .map((name) => tools.find((t) => t.name === name))
    .filter((t): t is ITool => Boolean(t));
   // Desired order of tools by name


// Reorder the tools array
const orderedTools = toolOrder
  .map(name => sortedTools.find(tool => tool.name === name))
  .filter(Boolean) as ITool[]; // filter out any undefined


  return (
    <>
      <Head
        title="AI NHS Career Tools & Mentorship | NextDoc"
        description="Explore AI-powered NHS career tools: GapMap, CVPro, SponsorMatch, InterviewSim+, PLAB QBank, and mentor support."
        keywords="AI NHS tools, PLAB QBank, NHS mentorship, CV review, Interview simulator"
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl">
      <Badge className="mb-6 bg-primary-foreground text-primary">
       AI Powered • Mentor Validated • UK Registered
      </Badge>
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        NextDoc UK — AI-Powered Career & Certification Ecosystem
      </h1>
      <p className="text-xl leading-relaxed opacity-90">
        A comprehensive suite of AI-powered tools and NHS-verified mentorship
        designed for international doctors. From PLAB success to career
        integration and CPD growth — NextDoc UK sets a new standard for
        medical career empowerment.
      </p>
    </div>
  </div>
</section>


      {/* AI-Powered Platform Core */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
  <Badge className="mb-3" variant="secondary">
    AI-Powered Platform Core
  </Badge>
  <h2 className="text-3xl font-bold mb-2">
    NextDoc AI — Your Medical & Career Co-Pilot
  </h2>
  <p className="text-muted-foreground max-w-2xl mx-auto">
    Free plan includes 5 queries per day. Upgrade to Pro AI (£14.99/mo) for
    unlimited responses, deeper reasoning, and NHS-aligned feedback across
    CVPro™, GapMap™, InterviewSim™, and QBank modules, “Ask Mentor AI”,
    early features. Specialty modes: Internal Medicine, Surgery, OBG, EM,
    Paediatrics, Psych, Cardiology, Oncology.
  </p>
</div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* ... keep existing code (AI feature cards) */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Bot className="h-5 w-5 text-primary" />
                  <CardTitle>Conversational Guidance</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Context-aware answers with specialty modes.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-primary" />
                  <CardTitle>Mentor Hand-off</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Seamless upgrade to verified NHS mentors.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <CardTitle>Built-in Tools</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                “Ask AI” inside GapMap, CVPro, InterviewSim+, and QBank.
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={() =>
                window.dispatchEvent(
                  new CustomEvent("nextdoc:open-ai", {
                    detail: {
                      message:
                        "Hello NextDoc AI — can you help me plan my NHS journey?",
                      specialty: "general",
                    },
                  })
                )
              }
            >
              Try Free (5/day) <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
            <BuyNowButton
              item={{
                id: "pro-ai",
                name: "NextDoc Pro AI Subscription",
                price: PRICES.proAI.monthly,
                description:
                  "Unlimited AI with faster responses and “Ask Mentor AI”",
                type: "subscription",
              }}
              variant="outline"
            >
              Upgrade to Pro AI — £{PRICES.proAI.monthly}/mo
            </BuyNowButton>
          </div>
        </div>
      </section>

      {/* NHS Career Tools */}
     <section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-4">I. NHS Career Tools</h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        AI-powered tools designed to accelerate your NHS career journey
        with Principal Mentor integration
      </p>
    </div>

    {/* Tools Grid */}
   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {orderedTools.map((tool: ITool, index) => {
    const Icon = iconByTool[tool.name] || MapPin;

    // Static content for first 3 cards
    
let description = tool.description;
let features = tool.features;

if (index === 0) {
  description = "Personalised NHS journey mapping with gap analysis, milestones, and action plan. Upgrade to mentor session anytime.";
  features = [
    "Dynamic, step-by-step roadmap",
    "Gap analysis with red flags",
  ];
} else if (index === 1) {
  description = "NHS-Format CV Builder with Mentor Review. Instant AI scoring/rewrites in NHS format. Optional mentor human polish for guaranteed professionalism.";
  features = [
    "Benchmark vs NHS CVs",
    "Export-ready PDF & portfolio",
  ];
} else if (index === 2) {
  description = "Personalised shortlist of live NHS jobs and Trusts with sponsorship status, fit score, and red flags.";
  features = [
    "Live job matching",
    "Sponsorship eligibility check",
  ];
} else if (index === 3) {
  description = "Specialty-matched NHS interview simulator with instant AI feedback. Upgrade to mentor review anytime.";
  features = [
    "Instant feedback & scoring",
    "Real NHS-style questions",
  ];
} else if (index === 4) {
  description = "Book specialty-matched NHS mentors. Session notes, CPD sign-off, and package deals available.";
  features = [
    "Session credits & bundles",
    "CPD sign-off eligible",
  ];
} else if (index === 5) {
  description = "Practice with MLA-aligned MCQs, difficulty modes, mocks, and peer stats. “Ask AI about this question” included for Pro/Core/Elite.";
  features = [
    "Free: 30 Qs/month",
    "Full Access: £69 or £6.99/mo",
  ];
}

    return (
      <Card
        key={tool._id}
        className="group hover:shadow-2xl transition-shadow rounded-2xl overflow-hidden"
      >
        <CardHeader className="pb-0">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle className="text-xl font-semibold">{tool.name}</CardTitle>
                {tool.tagline && (
                  <p className="text-sm text-muted-foreground mt-1">{tool.tagline}</p>
                )}
              </div>
            </div>
            {tool.category && (
              <Badge
                variant={badgeColorByTool[tool.name] || "default"}
                className="h-6 px-2 py-1 text-xs font-medium"
              >
                {tool.category}
              </Badge>
            )}
          </div>
        </CardHeader>

        <CardContent>
          <p  className="text-muted-foreground mb-4">{tool.description}</p>
          <p className="text-muted-foreground mb-4">{description}</p>

          <div className="space-y-2 mb-6">
            {features?.map((feature, idx) => (
              <div key={idx} className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center mb-4">
            <span className="text-2xl font-bold text-primary">£{tool.basePrice}</span>
            <span className="text-sm text-muted-foreground">Base</span>
          </div>

          <div className="space-y-3">
            <Link to={linkByTool[tool.name as keyof typeof linkByTool] || "/products"}>
              <Button className="w-full">
                Learn More <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>

            <Button variant="outline" className="w-full">
              Buy Now - £{tool.basePrice}
            </Button>

            {index < 2 && (
              <Button variant="secondary" className="w-full">
                AI + Mentor £{tool.basePrice * 2 + 10}
              </Button>
            )}

            <Button
              variant="ghost"
              size="sm"
              className="w-full"
              onClick={() =>
                window.dispatchEvent(
                  new CustomEvent("nextdoc:open-ai", {
                    detail: {
                      message: `Tell me more about ${tool.name}`,
                      specialty: "general",
                    },
                  })
                )
              }
            >
              Ask AI about {tool.name}
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  })}
</div>

  </div>
</section>


      {/* Exams Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">II. Exams</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive exam preparation with Principal Mentor support for
              every NHS pathway
            </p>
          </div>

          {/* English Proficiency */}
          {englishExams.map((exam) => (
            <div key={exam._id} className="mb-12">
              <h3 className="text-2xl font-bold mb-6">A. {exam.category}</h3>
              <Card className="group hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Globe className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{exam.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">
                          {exam.subtitle}
                        </p>
                      </div>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800">
                      {exam.subcategory}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent>
                  {/* Grid: Left = description + first 2 features, Right = remaining features */}
                  <div className="grid md:grid-cols-2 gap-8 items-start">
                    {/* Left: Description + first 2 features */}
                    <div>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {exam.description}
                      </p>
                      <div className="space-y-2">
                        {exam.features[0]
                          .split(",")
                          .slice(0, 2)
                          .map((feature, idx) => (
                            <div
                              key={idx}
                              className="flex items-center space-x-2"
                            >
                              <CheckCircle className="h-4 w-4 text-primary" />
                              <span className="text-sm">{feature.trim()}</span>
                            </div>
                          ))}
                      </div>
                    </div>

                    {/* Right: Remaining features */}
                    <div className="space-y-2">
                      {exam.features[0]
                        .split(",")
                        .slice(2)
                        .map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center space-x-2"
                          >
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span className="text-sm">{feature.trim()}</span>
                          </div>
                        ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}

        <div className="mb-12">
  <h3 className="text-2xl font-bold mb-6">
    B. {plabExams[0]?.category}
  </h3>

  <div className="grid md:grid-cols-2 gap-8">
    {plabExams.slice(0, 2).map((exam, idx) => {
      let title = exam.title;
      let subtitle = exam.subtitle;
      let description = exam.description;
      let features = exam.features;
      let price = exam.price || PRICES.plabQBank.oneTime;
      let bundleItems = exam.bundleItems;

      if (idx === 0) {
        // Static content for first card
        title = "PLAB-1 QBank — NHS Aligned";
        subtitle = "2,000+ MLA-aligned MCQs • Full Rationales";
        description = "Early Access: Free for first 1000 users";
        features = [
          "2,000+ MLA-aligned MCQs",
          "Full Rationales",
          "NextDoc AI help",
          "Performance analytics",
          "Mentor analysis (paid add-on)",
        ];
       
        bundleItems = ["Early Access"];
      } else if (idx === 1) {
        // Static content for second card
        title = "PLAB Study Material & Starter Bundle";
        subtitle = "Complete preparation package";
        description = "High-yield guides, revision notes, and bundled offer: QBank + CV Booster™ + InterviewSim™ + CPD + 1x mentor consult.";
        features = [
          "Complete study bundle",
          "Best value package deal",
        ];
        price = 199;
        bundleItems = [];
      }

      return (
        <Card key={exam._id} className="group hover:shadow-xl transition-all">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-lg ${exam.iconBg || "bg-green-100"}`}>
                {idx === 0 ? (
                  <Brain className="h-6 w-6 text-green-600" />
                ) : (
                  <BookOpen className="h-6 w-6 text-green-600" />
                )}
              </div>
              <div>
                <CardTitle>{title}</CardTitle>
                <p className="text-sm text-muted-foreground">{subtitle}</p>
              </div>
            </div>
          </CardHeader>

        <CardContent>
          {idx=== 0 ?(
               <p className="mb-4">
  <Badge className="border border-blue-500 text-blue-500 px-2 py-1">
    {description}
  </Badge>
</p>

          ):(
          null
          )}
 {idx === 1 && (
  <p className="text-muted-foreground mb-4">
    High-yield guides, revision notes, and bundled offer: QBank + CV Booster™ + InterviewSim™ + CPD + 1x mentor consult.
  </p>
)}


  {/* Feature badges */}
 <div className="space-y-2 mb-2">
  {idx === 0
    ? [
        "Extended rationales, distractor analysis, and clinical pearls",
        "NextDoc AI help + performance analytics",
      ].map((feature, fIdx) => (
        <div key={fIdx} className="flex items-center space-x-2">
          <CheckCircle className="h-4 w-4 text-primary" />
          <span className="text-sm">{feature}</span>
        </div>
      ))
    : [
        "Complete study bundle",
        "Best value package deal",
      ].map((feature, fIdx) => (
        <div key={fIdx} className="flex items-center space-x-2">
          <CheckCircle className="h-4 w-4 text-primary" />
          <span className="text-sm">{feature}</span>
        </div>
      ))}
</div>
<div className="space-y-2 mb-2">
  {features.map((feature, fIdx) => (
    <div key={fIdx} className="flex items-center space-x-2">
      <CheckCircle className="h-4 w-4 text-primary" />
      <span className="text-sm">{feature}</span>
    </div>
  ))}
</div>



  {/* Mentor analysis note */}
  {idx === 0 && (
    <p className="text-xs text-muted-foreground mt-1">
      Mentor analysis is a paid add-on
    </p>
  )}

  {/* Price & Access */}
  <div className="flex justify-end items-end mb-4">
    
    {bundleItems?.length ? (
      <span className="text-sm text-muted-foreground">{bundleItems.join(", ")}</span>
    ) : null}
  </div>

  <div className="space-y-2">
    <Button className="w-full">Access QBank</Button>
    <BuyNowButton
      item={{
        id: exam._id || "plab-qbank",
        name: title,
        price: price,
        description: description,
        type: "one-time",
      }}
      variant="outline"
      className="w-full"
    >
      Buy QBank - £{price}
    </BuyNowButton>
  </div>
</CardContent>

        </Card>
      );
    })}
  </div>
</div>


          {/* PLAB Exam Suite */}

          {/* Postgraduate Exams */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">
              C. {postgraduateExams[0]?.category}
            </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
  {postgraduateExams.slice(0,4)
    .filter(exam => exam.examType && exam.title) // filter out undefined examType
    .map((exam, idx) => {
      // Custom colors based on position
      let bgColor = "bg-gray-100";
      let iconColor = "text-gray-600";

      if (idx === 1) {
        bgColor = "bg-red-100";
        iconColor = "text-red-600";
      } else if (idx === 2 || idx === 3) {
        bgColor = "bg-indigo-100";
        iconColor = "text-indigo-600";
      }

      const examSlug = exam.examType ? exam.examType.toLowerCase() : ""; // safe fallback

      return (
        <Card key={examSlug || idx} className="group hover:shadow-xl transition-all">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-lg ${bgColor}`}>
                <Stethoscope className={`h-6 w-6 ${iconColor}`} />
              </div>
              <div>
                <CardTitle className="text-base font-semibold">{exam.title}</CardTitle>
              </div>
            </div>
          </CardHeader>

          <CardContent>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xs">
                AI-powered diagnostic & revision tools in development.
              </span>
            </div>

            <div className="flex items-center justify-start mb-2">
              <Badge className="bg-gray-100 text-black px-2 py-1 text-xs">
                Coming Soon
              </Badge>
            </div>

            {examSlug && (
              <Link to={`/exams/${examSlug}`}>
                <Button className="w-full" size="sm">
                  Join Waitlist
                </Button>
              </Link>
            )}
          </CardContent>
        </Card>
      );
    })}
</div>






          </div>
        </div>
      </section>

      {/* CPD & Mentorship */}
    <section className="py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-4">
        III. {programs[1]?.category}
      </h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        Professional development and expert guidance from NHS consultants
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      {/* First card: programs[1] */}
      <Card className="group hover:shadow-xl transition-all">
        <CardHeader>
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <div>
              <CardTitle>{programs[1]?.title}</CardTitle>
              <p className="text-sm text-muted-foreground">
                {programs[1]?.subtitle}
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            {programs[1]?.description}
          </p>

          {/* Pricing options */}
          <div className="space-y-2">
  {programs[1]?.pricingOptions?.map((option, idx) => (
    <div key={idx} className="flex justify-between items-center">
      <span className="font-medium">{option.name}</span>
      <span className="font-semibold">£{option.price}</span>
    </div>
  ))}
</div>


          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {programs[1]?.pricingOptions?.map((option, idx) => (
              <BuyNowButton
                key={idx}
                item={{
                  id: option.name.replace(/\s+/g, "-").toLowerCase(),
                  name: option.name,
                  price: option.price,
                  description: option.name,
                  type: "one-time",
                }}
                variant={idx === 0 ? "outline" : "secondary"}
                className="py-2 px-2 rounded-lg text-center font-semibold transition-all hover:scale-105 hover:shadow-lg max-w-xs"
              >
                {option.name} — £{option.price}
              </BuyNowButton>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Second card: programs[0] */}
      <Card className="group hover:shadow-xl transition-all">
        <CardHeader>
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div>
              <CardTitle>{programs[0]?.title}</CardTitle>
              <p className="text-sm text-muted-foreground">
                {programs[0]?.subtitle}
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            {programs[0]?.description}
          </p>

          {/* Features only for second card */}
          {(programs[0]?.features || []).length > 0 && (
            <div className="space-y-2 mt-2">
              {programs[0]?.features?.map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          )}

          {/* Pricing options */}
        <div className="mt-2">
  {programs[0]?.pricingOptions?.length > 0 && (
    <div className="text-xl font-bold text-primary">
      £{programs[0].pricingOptions.at(-1)?.price}
    </div>
  )}
</div>

          {/* Static button for mentorship */}
         <Button className="w-full mt-4">
  Book Mentor Session —{" "}
  <span>
    £{programs[0]?.pricingOptions?.at(-1)?.price ?? "TBA"}
  </span>
</Button>

        </CardContent>
      </Card>
    </div>
  </div>
</section>


      {/* Bundles & Subscriptions */}
       <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              IV. Bundles & Subscriptions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Complete packages designed for maximum value and comprehensive support
            </p>
          </div>

          {/* Billing Toggle */}
          <div className="mb-8 flex items-center justify-center gap-2">
            <span className="text-sm text-muted-foreground">Billing:</span>
            <div className="inline-flex rounded-md border border-border bg-background">
              <button
                className={`px-4 py-2 text-sm font-medium rounded-l-md transition-colors ${
                  billingInterval === "month"
                    ? "bg-primary text-primary-foreground"
                    : "bg-background text-foreground hover:bg-muted"
                }`}
                onClick={() => setBillingInterval("month")}
              >
                Monthly
              </button>
              <button
                className={`px-4 py-2 text-sm font-medium rounded-r-md transition-colors ${
                  billingInterval === "year"
                    ? "bg-primary text-primary-foreground"
                    : "bg-background text-foreground hover:bg-muted"
                }`}
                onClick={() => setBillingInterval("year")}
              >
                Yearly
              </button>
            </div>
          </div>

          {/* Featured Subscription Plans */}
          <div className="grid md:grid-cols-3 gap-8 mb-2">
            {/* Pro AI Only */}
            {products?.[5] && (
  <Card className="group hover:shadow-xl transition-all duration-300">
    <CardHeader className="text-center pb-6 rounded-t-lg"> {/* full bg highlight */}
      {products[5].tagline && (
        <Badge className="mb-3  bg-primary/10 w-full text-left items-start justify-start" style={{borderRadius:"5px"}} variant="secondary">
          {products[5].tagline}
        </Badge>
      )}
      <CardTitle className="text-2xl mb-4">{products[5].name}</CardTitle>
      <div className="mt-2">
        <span className="text-4xl font-bold text-primary">
          £{products[5].pricingOptions?.[0]?.price ?? 0}
        </span>
        <span className="text-muted-foreground">
          /{products[5].pricingOptions?.[0]?.type === "monthly" ? "mo" : "yr"}
        </span>
      </div>
    </CardHeader>
    <CardContent className="space-y-3">
      {products[5].features?.map((feature) => (
        <div key={feature._id} className="flex items-start gap-2">
          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <span className="text-sm">{feature.description}</span>
        </div>
      ))}
      <div className="pt-4">
        <BuyNowButton
          item={{
            id: products[5]._id,
            name: products[5].name,
            price: products[5].pricingOptions?.[0]?.price ?? 0,
            description: products[5].description ?? products[5].name,
            type: "subscription",
          }}
          className="w-full"
        >
          <Zap className="mr-2 h-4 w-4" />
          Subscribe — £{products[5].pricingOptions?.[0]?.price ?? 0}/
          {products[5].pricingOptions?.[0]?.type === "monthly" ? "mo" : "yr"}
        </BuyNowButton>
      </div>
    </CardContent>
  </Card>
)}

            {/* Core */}
            {products?.[4] && (
              <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-primary/30 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge variant="default" className="shadow-sm">
                    {products[4].tagline || products[4].highlightTag || "POPULAR"}
                  </Badge>
                </div>
                <CardHeader className="text-center  bg-primary/5 rounded-t-lg">
                  <CardTitle className="text-2xl mb-4 mt-2">{products[4].name}</CardTitle>
                  <div className="mt-2">
                    <span className="text-4xl font-bold text-primary">
                      £{billingInterval === "year"
                        ? (products[4].pricingOptions[0]?.price ?? 0) * 10 + 10
                        : products[4].pricingOptions[0]?.price ?? 0}
                    </span>
                    <span className="text-muted-foreground">
                      /{billingInterval === "year" ? "yr" : "mo"}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 pt-6">
                  {products[4].features?.map((feature) => (
                    <div key={feature._id} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{feature.description}</span>
                    </div>
                  ))}
                  <div className="pt-4">
                    <BuyNowButton
                      item={{
                        id: products[4]._id,
                        name: products[4].name,
                        price: billingInterval === "year"
                          ? (products[4].pricingOptions[0]?.price ?? 0) * 10 + 10
                          : products[4].pricingOptions[0]?.price ?? 0,
                        description: products[4].description ?? products[4].name,
                        type: "subscription",
                      }}
                      className="w-full"
                    >
                      <Zap className="mr-2 h-4 w-4" />
                      Subscribe — £{billingInterval === "year"
                        ? (products[4].pricingOptions[0]?.price ?? 0) * 10 + 10
                        : products[4].pricingOptions[0]?.price ?? 0}
                      /{billingInterval === "year" ? "yr" : "mo"}
                    </BuyNowButton>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Elite */}
          {/* Elite */}
{products?.[3] && (
  <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-premium/30 relative">
    {/* Badge overlapping header */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
      <Badge className="bg-yellow-400 text-primary/80 px-3 py-1 rounded-full shadow-sm">
        {products[3].highlightTag || "PREMIUM"}
      </Badge>
    </div>

    {/* Header with full yellow background */}
    <CardHeader className="text-center bg-yellow-100  text-primary/80 rounded-t-lg pb-4 pt-4 relative">
      <CardTitle className="text-2xl mb-2 text-primary/80">{products[3].name}</CardTitle>
      <div className="mt-2">
        <span className="text-4xl font-bold text-primary/80">
          £{billingInterval === "year"
            ? (products[3].pricingOptions[0]?.price ?? 0) * 10 + 10
            : products[3].pricingOptions[0]?.price ?? 0}
        </span>
        <span className="text-black ml-1">
          /{billingInterval === "year" ? "yr" : "mo"}
        </span>
      </div>
    </CardHeader>

    <CardContent className="space-y-3 pt-4">
      {products[3].features?.map((feature) => (
        <div key={feature._id} className="flex items-start gap-2">
          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <span className="text-sm">{feature.description}</span>
        </div>
      ))}

      <BuyNowButton
        item={{
          id: `elite-${billingInterval}`,
          name: products[3].name,
          price: billingInterval === "year"
            ? (products[3].pricingOptions[0]?.price ?? 0) * 10 + 10
            : products[3].pricingOptions[0]?.price ?? 0,
          description: "Elite subscription",
          type: "subscription",
        }}
        className="w-full mt-0"
      >
        <Zap className="mr-2 h-4 w-4" />
        Subscribe — £{billingInterval === "year"
          ? (products[3].pricingOptions[0]?.price ?? 0) * 10 + 10
          : products[3].pricingOptions[0]?.price ?? 0}
        /{billingInterval === "year" ? "yr" : "mo"}
      </BuyNowButton>
    </CardContent>
  </Card>
)}



          </div>

          {/* Other Bundles */}
         <div className="grid md:grid-cols-3 gap-6">
  {[2, 1, 0].map((i, idx) => {
    const bundle = products?.[i];
    if (!bundle) return null;

    // Custom badge colors based on index
    const badgeBg = idx === 1 ? "bg-blue-100" : idx === 0 ? "bg-green-100" : "bg-blue-100";
    const badgeText = idx === 0 ? "text-red-600" : "text-primary";

    return (
      <Card
        key={bundle._id}
        className="group hover:shadow-xl transition-all duration-300"
      >
        <CardHeader>
          <div className="flex items-center justify-between mb-3">
            <Target className="h-6 w-6 text-primary" />
            <Badge
              className={`${badgeBg} ${badgeText} px-2 py-1 text-xs`}
            >
              {bundle.highlightTag}
            </Badge>
          </div>
          <CardTitle className="text-xl">{bundle.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
            {bundle.description}
          </p>
          <div className="flex justify-between items-baseline mb-6">
            <span className="text-3xl font-bold text-primary">
              £{bundle.pricingOptions?.[0]?.price ?? 0}
            </span>
            <span className="text-sm text-muted-foreground">One-time</span>
          </div>
          <div className="space-y-2">
            <Button className="w-full" size="default">
              Get Bundle
            </Button>
            <BuyNowButton
              item={{
                id: bundle._id,
                name: bundle.name,
                price: bundle.pricingOptions?.[0]?.price ?? 0,
                description: bundle.description,
                type: "one-time",
              }}
              variant="outline"
              size="default"
              className="w-full"
            >
              <Zap className="mr-2 h-4 w-4" />
              Buy £{bundle.pricingOptions?.[0]?.price ?? 0}
            </BuyNowButton>
          </div>
        </CardContent>
      </Card>
    );
  })}
</div>

        </div>
      </section>

      {/* B2B/Trust Solutions */}
     <section className="py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-4">V. B2B/Trust Solutions</h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        Enterprise solutions for NHS Trusts, deaneries, and medical institutions
      </p>
    </div>

    <div className="grid md:grid-cols-1 gap-8">
      {enterprise.map((item) => (
        <Card key={item._id} className="max-w-4xl mx-auto">
          <CardHeader>
            <div className="flex items-center space-x-3 justify-center">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">{item.name}</CardTitle>
            </div>
          </CardHeader>
           <div className="flex justify-center mb-2">
  <Badge
    variant="outline"
    className="bg-gray-100 text-black px-2 py-1 text-xs flex items-center justify-center"
  >
    Coming Soon
  </Badge>
</div>

          <CardContent>
            <p className="text-muted-foreground text-center mb-8">
              {item.description}
            </p>

            {/* Features Section */}
            <div className="flex justify-center gap-6 mb-8">
              {item.hasCohortTracking && (
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium text-muted-foreground">
                    Cohort tracking & analytics
                  </span>
                </div>
              )}

              {item.isWhiteLabel && (
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium text-muted-foreground">
                    White-label branding
                  </span>
                </div>
              )}
                {item.hasBulkusermanagement && ( <div className="text-center"> <div className="flex items-center space-x-2 justify-center mb-2"> <CheckCircle className="h-4 w-4 text-primary" /> <span className="text-sm font-medium"> Bulk user management </span> </div> </div> )}
            </div>
            

            {/* Coming Soon Button */}
            <div className="text-center">
              <Button size="lg" variant="outline" disabled>
                Coming Soon
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>


      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-primary-foreground text-primary">
            AI Powered - Mentor Reviewed Products
          </Badge>
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your NHS Journey?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Join thousands of international doctors who have successfully
            transitioned to the NHS with NextDoc Global's comprehensive
            ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/get-started">
              <Button size="lg" variant="secondary" className="px-8">
                Get Started Today
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
            <Link to="/mentors">
              <Button
                variant="outline"
                size="lg"
                className="px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Speak with a Principal Mentor
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
