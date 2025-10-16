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
  Target,
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
  "CVPro™": Bot,
  "SponsorMatch™": Briefcase,
  "InterviewSim+™": Users,
  "MentorConnect™": Stethoscope,
  "PLAB Mastery QBank": GraduationCap,
};

// Define exact order
const toolOrder = [
  "GapMap™",
  "CVPro™",
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
  "CVPro™": "default",
  "SponsorMatch™": "destructive",
  "InterviewSim+™": "secondary",
  "MentorConnect™": "default",
  "PLAB Mastery QBank": "default",
};

const linkByTool: Record<string, string> = {
  "GapMap™": "/gap-map",
  "CVPro™": "/cv-pro",
  "SponsorMatch™": "/sponsormatch",
  "InterviewSim+™": "/interviewsim",
  "MentorConnect™": "/mentors",
  "PLAB Mastery QBank": "/plab-quiz",
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

  const sortedTools: ITool[] = toolOrder
    .map((name) => tools.find((t) => t.name === name))
    .filter((t): t is ITool => Boolean(t));

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
              AI Powered - Mentor Reviewed Products
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              NextDoc Global — 2025/26 Product Line
            </h1>
            <p className="text-xl leading-relaxed opacity-90">
              Principal Mentor Edition: Complete ecosystem of AI-powered tools
              and expert mentorship for NHS success. From exam preparation to
              career placement—we've got every step covered.
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
              NextDoc AI — Medical & Career Super-Assistant
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Free: 5 queries/day. Pro AI: £{PRICES.proAI.monthly}/mo —
              unlimited, faster responses, deeper explanations, “Ask Mentor AI”,
              early features. Specialty modes: Internal Medicine, Surgery, OBG,
              EM, Paediatrics, Psych, Cardiology, Oncology.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
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
      {sortedTools.map((tool: ITool, index) => {
        const Icon = iconByTool[tool.name] || MapPin;

        return (
          <Card
            key={tool._id}
            className="group hover:shadow-2xl transition-shadow rounded-2xl overflow-hidden"
          >
            <CardHeader className="pb-0">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  {/* Tool Icon */}
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
              <p className="text-muted-foreground mb-4">{tool.description}</p>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {tool.features?.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Price Info */}
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold text-primary">£{tool.basePrice}</span>
                <span className="text-sm text-muted-foreground">Base</span>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Link
                  to={linkByTool[tool.name as keyof typeof linkByTool] ?? "/somewhere"}
                >
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
              {plabExams.slice(0, 2).map((exam, idx) => (
                <Card
                  key={exam._id}
                  className="group hover:shadow-xl transition-all"
                >
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div
                        className={`p-2 rounded-lg ${
                          exam.iconBg || "bg-green-100"
                        }`}
                      >
                        {idx === 0 ? (
                          <Brain className="h-6 w-6 text-green-600" />
                        ) : (
                          <BookOpen className="h-6 w-6 text-green-600" />
                        )}
                      </div>
                      <div>
                        <CardTitle>{exam.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">
                          {exam.subtitle}
                        </p>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {exam.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-4">
                      {exam.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Price & Access */}
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-2xl font-bold text-primary">
                        £{exam.price || PRICES.plabQBank.oneTime}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {exam.bundleItems?.join(", ")}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <Button className="w-full">Access QBank</Button>
                      <BuyNowButton
                        item={{
                          id: exam._id || "plab-qbank",
                          name: exam.title,
                          price: exam.price || PRICES.plabQBank.oneTime,
                          description: exam.description,
                          type: "one-time",
                        }}
                        variant="outline"
                        className="w-full"
                      >
                        Buy QBank - £{exam.price || PRICES.plabQBank.oneTime}
                      </BuyNowButton>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* PLAB Exam Suite */}

          {/* Postgraduate Exams */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">
              C. {postgraduateExams[0]?.category}
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {postgraduateExams.map((exam) => {
                // Optional color mapping for icons
                const colorMap: Record<string, string> = {
                  MRCP: "amber",
                  MRCS: "red",
                  MRCOG: "purple",
                  MRCPCH: "blue",
                };

                // Safe access with fallback
                const examColor = exam.examType
                  ? colorMap[exam.examType]
                  : "gray";

                return (
                  <Card
                    key={exam._id}
                    className="group hover:shadow-xl transition-all"
                  >
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg bg-${examColor}-100`}>
                          <Stethoscope
                            className={`h-6 w-6 text-${examColor}-600`}
                          />
                        </div>
                        <div>
                          <CardTitle className="text-base">
                            {exam.title}
                          </CardTitle>
                          <Badge className="mt-1" variant="secondary">
                            {exam.subtitle}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent>
                      {/* Features */}
                      <div className="space-y-2 mb-4">
                        {exam.features.map((feature, fIdx) => (
                          <div
                            key={fIdx}
                            className="flex items-center space-x-2"
                          >
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span className="text-xs">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Price & Bundle */}
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-lg font-bold text-primary">
                          £{exam.price}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {exam.bundleItems?.join(", ") || "No bundle items"}
                        </span>
                      </div>

                      <div className="space-y-1">
                        {exam.examType && (
                          <Link to={`/exams/${exam.examType.toLowerCase()}`}>
                            <Button className="w-full" size="sm">
                              Start Pathway
                            </Button>
                          </Link>
                        )}
                        <div className="mb-4" />
                        <BuyNowButton
                          item={{
                            id: exam._id,
                            name: exam.title,
                            price: exam.price ?? 0, // fallback if undefined
                            description: `Complete ${
                              exam.title
                            } with ${exam.features.join(", ")}`,
                            type: "one-time",
                          }}
                          variant="outline"
                          size="sm"
                          className="w-full"
                        >
                          Buy - £{exam.price ?? 0}
                        </BuyNowButton>
                      </div>
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
                {(programs[1]?.features || []).length > 0 && (
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    {programs[1]?.features?.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                )}
                <div>
                  {programs[1]?.pricingOptions?.map((option, idx) => (
                    <div key={idx}>
                      <p>{option.name}</p>
                      <p>{option.price}</p>
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
                {(programs[0]?.features || []).length > 0 && (
                  <div className="space-y-2 mt-2">
                    {programs[0].features?.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-2 space-y-1">
                  {programs?.[0]?.pricingOptions?.map((price, idx) => (
                    <div key={idx} className="text-xl font-bold text-primary">
                      £{price.price}
                    </div>
                  ))}
                </div>

                {/* Static button for mentorship */}
                <Button className="w-full mt-4">
                  Book Mentor Session —{" "}
                  <p>
                    {programs[0]?.pricingOptions?.map((price) => (
                      <p> £ {price.price}</p>
                    ))}
                  </p>
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
              Complete packages designed for maximum value and comprehensive
              support
            </p>
          </div>

          {/* Featured Subscription Plans */}
          <div className="mb-6 flex items-center justify-center gap-2">
            <span className="text-sm text-muted-foreground">Billing:</span>
            <div className="inline-flex rounded-md border">
              <button
                className={`px-3 py-1 text-sm rounded-l-md ${
                  billingInterval === "month"
                    ? "bg-primary text-primary-foreground"
                    : "bg-background"
                }`}
                onClick={() => setBillingInterval("month")}
              >
                Monthly
              </button>
              <button
                className={`px-3 py-1 text-sm rounded-r-md ${
                  billingInterval === "year"
                    ? "bg-primary text-primary-foreground"
                    : "bg-background"
                }`}
                onClick={() => setBillingInterval("year")}
              >
                Yearly
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Pro AI Only */}
            {products?.[5] && (
              <Card className="group hover:shadow-xl transition-all">
                <CardHeader className="text-center">
                  {products[5].tagline && (
                    <Badge className="mb-2" variant="secondary">
                      {products[5].tagline}
                    </Badge>
                  )}
                  <CardTitle className="text-2xl">{products[5].name}</CardTitle>
                  <div className="mt-2">
                    <span className="text-4xl font-bold text-primary">
                      £{products[5].pricingOptions?.[0]?.price ?? 0}
                    </span>
                    <span className="text-muted-foreground">
                      /
                      {products[5].pricingOptions?.[0]?.type === "monthly"
                        ? "mo"
                        : "yr"}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="pt-2">
                  {products[5].features?.map((feature) => (
                    <div
                      key={feature._id}
                      className="flex items-center space-x-2"
                    >
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>{feature.description}</span>
                    </div>
                  ))}
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
                    Subscribe — £{products[5].pricingOptions?.[0]?.price ?? 0}/
                    {products[5].pricingOptions?.[0]?.type === "monthly"
                      ? "mo"
                      : "yr"}
                  </BuyNowButton>
                </CardContent>
              </Card>
            )}

            {/* Core / Cores */}
            {products?.[4] && (
              <Card className="group hover:shadow-xl transition-all border-2 border-primary/20">
                <CardHeader className="text-center bg-primary/5">
                  <Badge className="mb-2 bg-primary text-primary-foreground">
                    {products[4].tagline || products[4].highlightTag || "N/A"}
                  </Badge>
                  <CardTitle className="text-2xl">{products[4].name}</CardTitle>
                  <div className="mt-2">
                    <span className="text-4xl font-bold text-primary">
                      £{" "}
                      {billingInterval === "year"
                        ? (products[4].pricingOptions[0]?.price ?? 0) * 10 + 10
                        : products[4].pricingOptions[0]?.price ?? 0}
                      /{billingInterval === "year" ? "yr" : "mo"}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="pt-2">
                  {products[4].features?.map((feature) => (
                    <div
                      key={feature._id}
                      className="flex items-center space-x-2"
                    >
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>{feature.description}</span>
                    </div>
                  ))}
                  <BuyNowButton
                    item={{
                      id: products[4]._id,
                      name: products[4].name,
                      price:
                        billingInterval === "year"
                          ? (products[4].pricingOptions[0]?.price ?? 0) * 10 +
                            10
                          : products[4].pricingOptions[0]?.price ?? 0,
                      description: products[4].description ?? products[4].name,
                      type: "subscription",
                    }}
                    className="w-full"
                  >
                    Subscribe — £{" "}
                    {billingInterval === "year"
                      ? (products[4].pricingOptions[0]?.price ?? 0) * 10 + 10
                      : products[4].pricingOptions[0]?.price ?? 0}
                    /{billingInterval === "year" ? "yr" : "mo"}
                  </BuyNowButton>
                </CardContent>
              </Card>
            )}

            {/* Elite */}
            {products?.[3] && (
              <Card className="group hover:shadow-xl transition-all border-2 border-amber-500/20 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-amber-500 text-white">
                    {products[3].highlightTag || "PREMIUM"}
                  </Badge>
                </div>
                <CardHeader className="text-center bg-amber-50">
                  <CardTitle className="text-2xl">{products[3].name}</CardTitle>
                  <div className="mt-2">
                    <span className="text-4xl font-bold text-amber-600">
                      {billingInterval === "year"
                        ? (products[3].pricingOptions[0]?.price ?? 0) * 10 + 10
                        : products[3].pricingOptions[0]?.price ?? 0}
                    </span>
                    <span className="text-muted-foreground">
                      /{billingInterval === "year" ? "yr" : "mo"}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="pt-2">
                  {products[3].features?.map((feature) => (
                    <div
                      key={feature._id}
                      className="flex items-center space-x-2"
                    >
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>{feature.description}</span>
                    </div>
                  ))}
                  <br />
                  <BuyNowButton
                    item={{
                      id: `elite-${billingInterval}`,
                      name: products[3].name,
                      price:
                        billingInterval === "year"
                          ? (products[3].pricingOptions[0]?.price ?? 0) * 10 +
                            10
                          : products[3].pricingOptions[0]?.price ?? 0,
                      description: "Elite subscription",
                      type: "subscription",
                    }}
                    className="w-full"
                  >
                    Subscribe — £{" "}
                    {billingInterval === "year"
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
            {[2, 1, 0].map((i) => {
              const bundle = products?.[i];
              if (!bundle) return null; // <- This tells TS bundle is not undefined below

              return (
                <Card
                  key={bundle._id}
                  className="group hover:shadow-xl transition-all"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Target className="h-6 w-6 text-primary" />
                      <Badge
                        className={
                          bundle.highlightTag === "Best Value"
                            ? "bg-green-100 text-green-800"
                            : bundle.highlightTag === "Complete"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-purple-100 text-purple-800"
                        }
                      >
                        {bundle.highlightTag}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{bundle.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 text-sm">
                      {bundle.description}
                    </p>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-2xl font-bold text-primary">
                        £{bundle.pricingOptions?.[0]?.price ?? 0}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        One-time
                      </span>
                    </div>
                    <div className="space-y-1">
                      <Button className="w-full" size="sm">
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
                        size="sm"
                        className="w-full"
                      >
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
              Enterprise solutions for NHS Trusts, deaneries, and medical
              institutions
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

                <CardContent>
                  <p className="text-muted-foreground text-center mb-8">
                    {item.description}
                  </p>

                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {item.hasCohortTracking && (
                      <div className="text-center">
                        <div className="flex items-center space-x-2 justify-center mb-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium">
                            Cohort tracking & analytics
                          </span>
                        </div>
                      </div>
                    )}

                    {item.isWhiteLabel && (
                      <div className="text-center">
                        <div className="flex items-center space-x-2 justify-center mb-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium">
                            White-label branding
                          </span>
                        </div>
                      </div>
                    )}

                    {item.hasBulkusermanagement && (
                      <div className="text-center">
                        <div className="flex items-center space-x-2 justify-center mb-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium">
                            Bulk user management
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="text-center">
                    <Button asChild size="lg">
                      <Link to="/contact">Contact Sales</Link>
                    </Button>
                    <p className="text-sm text-muted-foreground mt-3">
                      {item.minUsers
                        ? `Pricing from £10,000/year per ${item.minUsers} users`
                        : "Contact for pricing"}
                    </p>
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
