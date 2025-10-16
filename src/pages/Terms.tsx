
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Head from "@/layout/Head";

export default function Terms() {
  return (
    <>
      <Head
        title="Terms & Conditions - NextDoc Global"
        description="Terms and conditions for NextDoc Global's AI-powered medical career tools, PLAB preparation, and CPD modules. UK jurisdiction and GDPR compliant."
        keywords="terms conditions, NextDoc Global, medical career, PLAB, legal, UK healthcare"
      />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-6">
          Terms & Conditions of Use
        </h1>

        <Card className="mb-6">
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground mb-4">
              <strong>Effective Date:</strong> January 2025
              <br />
              <strong>Data Controller:</strong> Dr. Roshan Khanderi
              <br />
              <strong>Jurisdiction:</strong> United Kingdom
            </p>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              1. Introduction
            </h2>
            <p className="text-muted-foreground mb-4">
              Welcome to NextDoc Global, operated by Dr. Roshan Khanderi and
              associated entities. These Terms govern your access to our
              website, tools, and services, including AI-powered tools (e.g., CV
              Booster™, InterviewSim™, GapMap™, SponsorMatch™), PLAB and
              postgraduate exam resources, and CPD modules.
            </p>
            <p className="text-muted-foreground">
              By using our platform, you agree to be bound by these Terms.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              2. Eligibility
            </h2>
            <p className="text-muted-foreground">
              You must be 18 years or older, a healthcare professional or
              aspiring professional, and capable of entering into legally
              binding contracts.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              3. Subscription Tiers and Access
            </h2>
            <div className="space-y-3 text-muted-foreground">
              <p>
                <strong>Free Tier:</strong> Limited access to 3 MCQs/day, 1
                study guide/week, and 2 Ask NextDoc AI queries/day.
              </p>
              <p>
                <strong>Core Tier:</strong> Full access to all quizzes and study
                materials.
              </p>
              <p>
                <strong>Elite Tier:</strong> Includes Core + CPD certificates,
                SponsorMatch™, and priority support.
              </p>
              <p className="mt-4">
                All prices include applicable UK VAT. Payments are processed
                securely via Stripe.
              </p>
            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              4. AI Tools and Limitations
            </h2>
            <div className="space-y-3 text-muted-foreground">
              <p>
                Our AI tools (including Ask NextDoc AI) provide general career
                guidance. Outputs are generated via GPT APIs and should not be
                considered medical or legal advice. We do not guarantee the
                accuracy of AI-generated content.
              </p>
              <p>
                You acknowledge the limitations of AI and agree to verify any
                critical decision based on these tools with a qualified human
                advisor.
              </p>
            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              5. Refund Policy
            </h2>
            <p className="text-muted-foreground">
              See our comprehensive{" "}
              <a href="/refund" className="text-primary hover:underline">
                Refund Policy
              </a>{" "}
              for detailed terms and conditions regarding cancellations and
              refunds.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              6. Intellectual Property
            </h2>
            <p className="text-muted-foreground">
              All content, trademarks, and source code (including AI prompts,
              data structures, and interfaces) are the intellectual property of
              NextDoc Global. Unauthorised use or redistribution is prohibited.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              7. User Data, Storage & Analytics
            </h2>
            <div className="space-y-3 text-muted-foreground">
              <p>By using the platform, you consent to:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  Storage of user quiz progress, AI interactions, and
                  subscription status via Supabase (EU servers)
                </li>
                <li>
                  Optional analytics for personalised content or recommendations
                </li>
                <li>Data may be pseudonymised for internal research</li>
                <li>Data is never sold to third parties</li>
              </ul>
            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              8. Limitation of Liability
            </h2>
            <p className="text-muted-foreground">
              NextDoc Global is not liable for damages arising from the use of
              AI-generated content or educational tools. Access is provided
              "as-is".
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              9. Modifications
            </h2>
            <p className="text-muted-foreground">
              We may update these terms at any time. Continued use implies
              acceptance.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              10. Contact Information
            </h2>
            <div className="text-muted-foreground">
              <p>For questions about these Terms, contact:</p>
              <p className="mt-2">
                <strong>Email:</strong> info@nextdocglobal.com
                <br />
                <strong>Address:</strong> NextDoc Global, United Kingdom
              </p>
            </div>
          </section>
        </div>
      </main>

      
    </>
  );
}
