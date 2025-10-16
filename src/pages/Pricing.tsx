// import SubscriptionPlans from "@/components/SubscriptionPlans";
// import Head from "@/layout/Head";


// export default function Pricing() {
//   return (
//     <main>
//       <Head
//         title="Pricing: Pro AI, Core, Elite | NextDoc"
//         description="Choose Pro AI, Core or Elite. AI-first NHS career tools with mentor support."
//         keywords="NextDoc pricing, Pro AI, Core, Elite, NHS tools"
//       />
//       <SubscriptionPlans />
//     </main>
//   );
// }

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { useState } from "react";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Pro AI",
      subtitle: "Unlimited NextDoc AI",
      price: isYearly ? 149.99 : 14.99,
      period: isYearly ? "year" : "mo",
      features: [
        "Unlimited AI chat",
        "Faster responses, deeper explanations",
        '"Ask Mentor AI" initiation',
        "Early feature access"
      ]
    },
    {
      name: "Core",
      subtitle: "Most value for active IMGs",
      price: isYearly ? 790 : 79,
      period: isYearly ? "year" : "mo",
      popular: true,
      features: [
        "Unlimited PLAB QBank",
        "NextDoc AI (unlimited)",
        "1 mentor session/mo",
        "Full CVPro™",
        "Basic CPD, GapMap Lite"
      ]
    },
    {
      name: "Elite",
      subtitle: "All-access for serious aspirants",
      price: isYearly ? 1390 : 139,
      period: isYearly ? "year" : "mo",
      features: [
        "Everything in Core",
        "Unlimited specialty QBanks",
        "3 mentor sessions/mo",
        "CPD Plus, InterviewSim+",
        "Priority features, portfolio review"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-accent/20 text-primary-foreground px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
            <span className="text-sm font-medium">Transparent Pricing</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
            Choose Your NHS Career Journey
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Unlock AI-powered career tools, mentorship, and comprehensive exam prep. All plans include money-back guarantee.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Choose Your Plan</h2>
          <p className="text-center text-muted-foreground mb-8">
            Unlock your NHS career potential with our AI-first platform and mentor support
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm font-medium ${!isYearly ? 'text-primary' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary transition-colors"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isYearly ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isYearly ? 'text-primary' : 'text-muted-foreground'}`}>
              Yearly
            </span>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-lg border bg-card p-8 shadow-sm hover:shadow-md transition-shadow ${
                  plan.popular ? 'ring-2 ring-primary' : ''
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{plan.subtitle}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-primary">£{plan.price}</span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                  Upgrade to {plan.name}
                </Button>
              </div>
            ))}
          </div>

          {/* Help Section */}
          <div className="mt-16 text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4">Need help choosing?</h3>
            <p className="text-muted-foreground mb-6">
              Start with Core for full access to our learning platform, or upgrade to Elite for premium mentorship and career support.
            </p>
            <Button variant="outline">Contact Support</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
