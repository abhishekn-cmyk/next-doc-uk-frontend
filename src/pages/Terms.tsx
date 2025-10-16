
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Head from "@/layout/Head";
import { Link } from "react-router";

export default function Terms() {
  return (
    <>
      <Head
        title="Terms & Conditions of Use - NextDoc UK"
        description="Official Terms & Conditions of Use for NextDoc UK, operated by NextDoc Global Ltd. AI-powered healthcare tools, exam preparation, and mentorship. UK jurisdiction and GDPR compliant."
        keywords="terms, conditions, NextDoc UK, NextDoc Global, healthcare AI, PLAB, MRCP, NHS, legal, GDPR"
      />

      <main className="container mx-auto px-4 py-10 max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-6">
          Terms & Conditions of Use
        </h1>

        <Card className="mb-6">
          <CardContent className="p-6 text-sm text-muted-foreground">
            <p>
              <strong>Effective Date:</strong> 17 October 2025
              <br />
              <strong>Data Controller:</strong> NextDoc Global Ltd (Company No.
              16504223)
              <br />
              <strong>Trading Brand:</strong> NextDoc UK
              <br />
              <strong>Jurisdiction:</strong> United Kingdom (England & Wales)
            </p>
          </CardContent>
        </Card>

        <div className="space-y-10 text-muted-foreground leading-relaxed">
          {/* 1. Introduction */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              1. Introduction
            </h2>
            <p>
              Welcome to NextDoc UK, operated by NextDoc Global Ltd ("NextDoc",
              "we", "us", "our"). NextDoc UK is a trading brand of NextDoc Global
              Ltd.
            </p>
            <p className="mt-3">
              These Terms govern your use of our websites, dashboards, AI tools,
              and all associated digital services (collectively, the
              "Services"), including AI-powered tools (e.g., CV Booster™,
              InterviewSim™, GapMap™, SponsorMatch™), PLAB and postgraduate exam
              resources, CPD modules, and payment and subscription systems
              powered by Stripe.
            </p>
            <p className="mt-3">
              By accessing or using our Services, you agree to comply with and
              be bound by these Terms. If you do not agree, you must not use the
              Services.
            </p>
          </section>

          <Separator />

          {/* 2. Eligibility */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              2. Eligibility
            </h2>
            <p>
              You must be 18 years of age or older, a healthcare professional,
              or an aspiring healthcare professional capable of entering into
              legally binding contracts.
            </p>
            <p className="mt-3">
              If you are using the Services on behalf of an organisation, you
              confirm that you are authorised to bind that organisation to these
              Terms.
            </p>
          </section>

          <Separator />

          {/* 3. Accounts, Subscriptions, and Access */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              3. Accounts, Subscriptions, and Access
            </h2>
            <div className="space-y-2">
              <p>
                <strong>3.1 Accounts –</strong> Certain features require
                registration. You must maintain the confidentiality of your
                login credentials and notify us of unauthorised access.
              </p>
              <p>
                <strong>3.2 Subscription Access –</strong> Paid content (e.g., AI
                tools, CPD modules, downloadable materials) requires login and a
                successful Stripe payment.
              </p>
              <p>
                <strong>3.3 Billing & Renewal –</strong> Subscription fees are
                processed securely through Stripe and renew automatically unless
                cancelled before the renewal date.
              </p>
              <p>
                <strong>3.4 Refunds & Cancellations –</strong> Please refer to
                our Refund Policy for applicable terms.
              </p>
              <p>
                <strong>3.5 Taxes –</strong> Prices may include or exclude VAT as
                indicated.
              </p>
              <p>
                <strong>3.6 Free Tier –</strong> Access to limited features is
                permitted under the Free Tier; misuse or automated scraping may
                result in account suspension.
              </p>
            </div>
          </section>

          <Separator />

          {/* 4. AI Tools and Limitations */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              4. AI Tools and Limitations
            </h2>
            <p>
              Our AI-based tools (including Ask NextDoc AI, CV Booster™,
              InterviewSim™, GapMap™, and SponsorMatch™) are designed for
              educational and career guidance purposes only.
            </p>
            <ul className="list-disc ml-6 mt-3 space-y-2">
              <li>
                They must not be treated as clinical, legal, or professional
                advice.
              </li>
              <li>Outputs may be incomplete or contain inaccuracies.</li>
              <li>
                Users are responsible for verifying any important information
                with a qualified human advisor.
              </li>
            </ul>
            <p className="mt-3">
              You acknowledge that AI-generated outputs are probabilistic and
              not guaranteed to be correct. No liability arises from reliance on
              AI results for career, visa, or medical decisions.
            </p>
          </section>

          <Separator />

          {/* 5. Acceptable Use */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              5. Acceptable Use
            </h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Use the Services for lawful and ethical purposes only.</li>
              <li>
                Do not circumvent access controls, scrape content, or
                reverse-engineer systems.
              </li>
              <li>Do not impersonate another user or misrepresent identity.</li>
              <li>
                Do not post harmful, infringing, or discriminatory material.
              </li>
              <li>
                Do not use AI outputs in patient care, diagnostics, or legal
                documentation.
              </li>
            </ul>
          </section>

          <Separator />

          {/* 6. Third-Party Services */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              6. Third-Party Services
            </h2>
            <p>
              We use verified third-party providers, including Stripe (payments)
              and Google Workspace (communications). Each may have their own
              privacy and usage terms. We do not control third-party websites or
              services linked from our platform.
            </p>
          </section>

          <Separator />

          {/* 7. Intellectual Property */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              7. Intellectual Property
            </h2>
            <p>
              All content, source code, AI prompts, database structures,
              trademarks, branding, and downloadable materials are the
              intellectual property of NextDoc Global Ltd.
            </p>
            <p className="mt-3">
              Unauthorised reproduction, distribution, or scraping is
              prohibited. Users may access and download materials only for
              lawful, personal, and educational use.
            </p>
          </section>

          <Separator />

          {/* 8. User Data, Storage, and Analytics */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              8. User Data, Storage, and Analytics
            </h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                <strong>Data Controller –</strong> NextDoc Global Ltd acts as the
                Data Controller under UK GDPR.
              </li>
              <li>
                <strong>Processing –</strong> Data is processed on secure UK/EU
                servers via Supabase and Stripe.
              </li>
              <li>
                <strong>Lawful Bases –</strong> Contract, Legitimate Interests,
                and Consent.
              </li>
              <li>
                <strong>Rights –</strong> You have rights to access, correct, or
                erase your data under UK GDPR.
              </li>
              <li>
                <strong>Retention –</strong> Data is kept only as long as
                necessary for legal and operational purposes.
              </li>
              <li>
                <strong>Analytics –</strong> Used to improve user experience and
                learning recommendations.
              </li>
              <li>
                <strong>Cookies –</strong> Governed by our Cookie Policy (see
                Privacy Policy).
              </li>
            </ul>
          </section>

          <Separator />

          {/* 9. Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              9. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, NextDoc Global Ltd and its
              affiliates are not liable for indirect, consequential, or
              incidental damages, including loss of profits or data.
            </p>
            <p className="mt-3">
              Our total liability is limited to the greater of £100 or the total
              amount paid by you within the past 12 months. Nothing in these
              Terms limits liability for death, personal injury, or fraud.
            </p>
          </section>

          <Separator />

          {/* 10. Suspension and Termination */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              10. Suspension and Termination
            </h2>
            <p>
              We may suspend or terminate access for breach of terms, misuse,
              non-payment, fraud, or regulatory reasons.
            </p>
            <p className="mt-3">
              You may terminate anytime by emailing{" "}
              <a
                href="mailto:support@nextdocuk.com"
                className="text-primary hover:underline"
              >
                support@nextdocuk.com
              </a>
              . Certain clauses (IP, data, liability) survive termination.
            </p>
          </section>

          <Separator />

          {/* 11. Modifications */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              11. Modifications
            </h2>
            <p>
              We reserve the right to modify these Terms for legal or product
              reasons. Material updates will be communicated via email or in-app
              notifications. Continued use after updates constitutes acceptance.
            </p>
          </section>

          <Separator />

          {/* 12. Governing Law */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              12. Governing Law and Jurisdiction
            </h2>
            <p>
              These Terms are governed by the laws of England and Wales. All
              disputes are subject to the exclusive jurisdiction of the courts
              of England and Wales.
            </p>
          </section>

          <Separator />

          {/* 13. Contact */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              13. Contact Information
            </h2>
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:support@nextdocuk.com"
                className="text-primary hover:underline"
              >
                support@nextdocuk.com
              </a>
              <br />
              <strong>Company:</strong> NextDoc Global Ltd (Company No. 16504223)
              <br />
              <strong>Trading Brand:</strong> NextDoc UK
              <br />
              <strong>Registered Jurisdiction:</strong> United Kingdom
              <br />
              <strong>Last Updated:</strong> 17 October 2025
            </p>
          </section>
        </div>
      </main>
      <footer className="border-t mt-12 py-6 bg-muted/30">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 px-4">
          {/* Logo + Brand */}
          <div className="flex items-center gap-2">
            <img
              src="/logo.svg"
              alt="NextDoc UK Logo"
              width={28}
              height={28}
              className="rounded"
            />

            <span className="font-semibold text-foreground">NextDoc UK</span>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>© 2025</span>
            <Link
              to="/privacy"
              className="hover:text-foreground transition-colors"
            >
              Privacy
            </Link>
            <Link
              to="/terms"
              className="hover:text-foreground transition-colors"
            >
              Terms
            </Link>
            <Link
              to="/"
              className="hover:text-foreground transition-colors"
            >
              Home
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
