
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Shield, Database, Users, FileText, Mail } from "lucide-react";
import Head from "@/layout/Head";

export default function Privacy() {
  return (
    <>
      <Head
        title="Privacy Policy - NextDoc Global"
        description="GDPR-compliant privacy policy for NextDoc Global. Learn how we protect your medical career data, AI interactions, and personal information."
        keywords="privacy policy, GDPR, data protection, NextDoc Global, medical data, ICO"
      />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex items-center gap-3 mb-6">
          <Shield className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-bold text-foreground">Privacy Policy</h1>
        </div>

        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
              <div>
                <strong>Data Controller:</strong>
                <br />
                Dr. Roshan Khanderi
                <br />
                NextDoc Global
              </div>
              <div>
                <strong>ICO Registration:</strong>
                <br />
                [Registration Number]
                <br />
                [Insert once registered]
              </div>
              <div>
                <strong>GDPR Compliance:</strong>
                <br />
                UK/EU Data Protection
                <br />
                Right to be Forgotten
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Database className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-semibold text-foreground">
                1. What Information We Collect
              </h2>
            </div>
            <div className="space-y-3 text-muted-foreground">
              <p>We may collect the following types of information:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  <strong>Personal Information:</strong> Name, email address,
                  professional role (doctor, student, etc.)
                </li>
                <li>
                  <strong>Professional Data:</strong> GMC number (optional),
                  specialization, career preferences
                </li>
                <li>
                  <strong>Content Data:</strong> Uploaded CVs, quiz responses,
                  AI tool interactions
                </li>
                <li>
                  <strong>Subscription Data:</strong> Payment information
                  processed via Stripe
                </li>
                <li>
                  <strong>Usage Analytics:</strong> AI tool usage patterns,
                  platform interactions
                </li>
                <li>
                  <strong>Communication Data:</strong> Support tickets, feedback
                  submissions
                </li>
              </ul>
            </div>
          </section>

          <Separator />

          <section>
            <div className="flex items-center gap-2 mb-4">
              <Users className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-semibold text-foreground">
                2. How We Use Your Data
              </h2>
            </div>
            <div className="space-y-3 text-muted-foreground">
              <p>We process your data for the following purposes:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  <strong>Service Delivery:</strong> Providing access to AI
                  tools, quizzes, and educational content
                </li>
                <li>
                  <strong>Personalization:</strong> Customizing content and
                  recommendations based on your career goals
                </li>
                <li>
                  <strong>Platform Improvement:</strong> Analyzing usage
                  patterns to enhance our services (pseudonymised data)
                </li>
                <li>
                  <strong>Communication:</strong> Sending service updates,
                  educational content, and support responses
                </li>
                <li>
                  <strong>Compliance:</strong> Meeting legal obligations and
                  maintaining platform security
                </li>
              </ul>
            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              3. Lawful Basis for Processing
            </h2>
            <div className="space-y-3 text-muted-foreground">
              <p>We process your data based on:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  <strong>Performance of Contract:</strong> Delivering the
                  services you've subscribed to
                </li>
                <li>
                  <strong>Legitimate Interest:</strong> Platform improvement,
                  analytics, security
                </li>
                <li>
                  <strong>Consent:</strong> Marketing communications, optional
                  analytics features
                </li>
                <li>
                  <strong>Legal Obligation:</strong> Tax reporting, data breach
                  notifications
                </li>
              </ul>
            </div>
          </section>

          <Separator />

          <section>
            <div className="flex items-center gap-2 mb-4">
              <Database className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-semibold text-foreground">
                4. Data Storage & Security
              </h2>
            </div>
            <div className="space-y-3 text-muted-foreground">
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  <strong>Primary Storage:</strong> Supabase (EU servers) for
                  maximum data protection
                </li>
                <li>
                  <strong>File Storage:</strong> PDF files and documents stored
                  in secure Supabase Storage Buckets
                </li>
                <li>
                  <strong>Payment Data:</strong> Stripe handles all payment
                  information; we do not store card details
                </li>
                <li>
                  <strong>AI Processing:</strong> OpenAI/OpenRouter APIs process
                  queries (no permanent storage)
                </li>
                <li>
                  <strong>Encryption:</strong> All data encrypted at rest and in
                  transit using industry standards
                </li>
                <li>
                  <strong>Access Controls:</strong> Role-based access with audit
                  trails for all data operations
                </li>
              </ul>
            </div>
          </section>

          <Separator />

          <section>
            <div className="flex items-center gap-2 mb-4">
              <FileText className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-semibold text-foreground">
                5. Your Rights Under GDPR
              </h2>
            </div>
            <div className="space-y-3 text-muted-foreground">
              <p>You have the following rights regarding your personal data:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  <strong>Right of Access:</strong> Request a copy of all
                  personal data we hold about you
                </li>
                <li>
                  <strong>Right to Rectification:</strong> Correct any
                  inaccurate or incomplete information
                </li>
                <li>
                  <strong>Right to Erasure:</strong> Request deletion of your
                  personal data (Right to be Forgotten)
                </li>
                <li>
                  <strong>Right to Data Portability:</strong> Receive your data
                  in a structured, machine-readable format
                </li>
                <li>
                  <strong>Right to Withdraw Consent:</strong> Opt-out of
                  marketing or optional data processing
                </li>
                <li>
                  <strong>Right to Object:</strong> Object to processing based
                  on legitimate interests
                </li>
                <li>
                  <strong>Right to Lodge a Complaint:</strong> Contact the ICO
                  if you believe your rights have been violated
                </li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, contact us at:{" "}
                <strong>info@nextdocglobal.com</strong>
              </p>
            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              6. Data Retention
            </h2>
            <div className="space-y-3 text-muted-foreground">
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  <strong>Account Data:</strong> Retained while your account is
                  active
                </li>
                <li>
                  <strong>Quiz Progress:</strong> Retained for educational
                  continuity
                </li>
                <li>
                  <strong>AI Interactions:</strong> Pseudonymised logs retained
                  for 12 months for service improvement
                </li>
                <li>
                  <strong>Payment Records:</strong> Retained for 7 years for tax
                  and legal compliance
                </li>
                <li>
                  <strong>Marketing Data:</strong> Deleted within 30 days of
                  consent withdrawal
                </li>
              </ul>
            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              7. Cookie Policy
            </h2>
            <div className="space-y-3 text-muted-foreground">
              <p>We use cookies to enhance your experience:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  <strong>Essential Cookies:</strong> Required for login,
                  session management, and core functionality
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> Help us understand how you
                  use our platform (opt-in required)
                </li>
                <li>
                  <strong>Preference Cookies:</strong> Remember your settings
                  and preferences
                </li>
              </ul>
              <p className="mt-3">
                A cookie consent banner is displayed on your first visit. You
                can manage your cookie preferences at any time.
              </p>
            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              8. Third-Party Services
            </h2>
            <div className="space-y-3 text-muted-foreground">
              <p>We work with trusted third-party providers:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  <strong>Stripe:</strong> Payment processing (PCI DSS
                  compliant)
                </li>
                <li>
                  <strong>Supabase:</strong> Database and authentication
                  services
                </li>
                <li>
                  <strong>OpenAI/OpenRouter:</strong> AI query processing
                  (queries not permanently stored)
                </li>
                <li>
                  <strong>Calendly:</strong> Appointment scheduling (if used)
                </li>
              </ul>
              <p className="mt-3">
                All third parties are GDPR-compliant and bound by data
                processing agreements.
              </p>
            </div>
          </section>

          <Separator />

          <section>
            <div className="flex items-center gap-2 mb-4">
              <Mail className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-semibold text-foreground">
                9. Contact Information
              </h2>
            </div>
            <div className="text-muted-foreground">
              <p>
                For any privacy-related questions or to exercise your rights:
              </p>
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <p>
                  <strong>Data Protection Officer:</strong> Dr. Roshan Khanderi
                </p>
                <p>
                  <strong>Email:</strong> info@nextdocglobal.com
                </p>
                <p>
                  <strong>Address:</strong> NextDoc Global, United Kingdom
                </p>
                <p>
                  <strong>Response Time:</strong> We aim to respond within 72
                  hours
                </p>
              </div>
            </div>
          </section>
        </div>

        <Card className="mt-8">
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">
              <strong>Last Updated:</strong> January 2025
              <br />
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated effective date.
            </p>
          </CardContent>
        </Card>
      </main>

      
    </>
  );
}
