
// ✅ use only if you're in Next.js
// If plain React, replace with <img> as shown below in the comment

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Shield, Database, Users,  Mail } from "lucide-react";
import Head from "@/layout/Head";

export default function Privacy() {
  return (
    <>
      <Head
        title="Privacy Policy - NextDoc UK"
        description="GDPR-compliant privacy policy for NextDoc UK. Learn how we protect your data, AI interactions, and professional information under UK Data Protection Law."
        keywords="NextDoc UK, privacy policy, GDPR, medical data, data protection, healthcare, UK law"
      />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <Shield className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-bold text-foreground">Privacy Policy</h1>
        </div>

        {/* Summary Card */}
        <Card className="mb-6">
          <CardContent className="p-6 text-sm text-muted-foreground">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <strong>Data Controller:</strong> <br />
                NextDoc Global Ltd (Company No. 16504223) <br />
                Trading Brand: NextDoc UK
              </div>
              <div>
                <strong>GDPR Compliance:</strong> <br />
                UK Data Protection Act 2018 <br />
                Standard Contractual Clauses
              </div>
            </div>
            <div className="mt-4">
              <strong>Last Updated:</strong> 17 October 2025 <br />
              <strong>Version:</strong> 2.0
            </div>
          </CardContent>
        </Card>

        {/* Sections */}
        <div className="space-y-8 text-muted-foreground">
          {/* 1. What Information We Collect */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Database className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-semibold text-foreground">
                1. What Information We Collect
              </h2>
            </div>
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
                <strong>Content Data:</strong> Uploaded CVs, quiz responses, AI
                tool interactions
              </li>
              <li>
                <strong>AI Chat History:</strong> Logged-in users’ conversation
                history with “Ask NextDoc AI” and other tools
              </li>
              <li>
                <strong>Interview Practice Data:</strong> Responses, AI feedback,
                and scores from InterviewSim™
              </li>
              <li>
                <strong>Study & Exam Performance:</strong> Quiz answers, scores,
                progress, flagged questions
              </li>
              <li>
                <strong>CPD Certificates:</strong> Module completions and
                certificates
              </li>
              <li>
                <strong>Mentor Documents:</strong> Application and verification
                materials (mentors only)
              </li>
              <li>
                <strong>Subscription Data:</strong> Stripe payment records
              </li>
              <li>
                <strong>Usage Analytics:</strong> Platform and AI tool usage
                patterns
              </li>
              <li>
                <strong>Communication Data:</strong> Support, feedback, and email
                correspondence
              </li>
            </ul>
          </section>

          <Separator />

          {/* 2. How We Use Your Data */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Users className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-semibold text-foreground">
                2. How We Use Your Data
              </h2>
            </div>
            <ul className="list-disc ml-6 space-y-2">
              <li>To deliver AI tools, quizzes, and educational content</li>
              <li>To personalise learning and recommendations</li>
              <li>To analyse and improve services (pseudonymised data)</li>
              <li>To send service updates and educational content</li>
              <li>To ensure compliance and platform security</li>
            </ul>
          </section>

          <Separator />

          {/* 3. Lawful Basis for Processing */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              3. Lawful Basis for Processing
            </h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Performance of Contract</li>
              <li>Legitimate Interests</li>
              <li>Consent (marketing, analytics)</li>
              <li>Legal Obligation (tax, security)</li>
            </ul>
          </section>

          <Separator />

          {/* 4. Data Storage & Security */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              4. Data Storage & Security
            </h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Primary storage: Supabase (EU servers)</li>
              <li>File storage: Encrypted Supabase buckets</li>
              <li>Payments: Managed by Stripe (PCI DSS compliant)</li>
              <li>
                AI processing: OpenAI / Google Gemini APIs (logged-in user
                history retained securely)
              </li>
              <li>Encryption: Data encrypted in transit and at rest</li>
              <li>Access controls: Role-based with full audit trails</li>
            </ul>
          </section>

          <Separator />

          {/* 5. GDPR Rights */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              5. Your Rights Under GDPR
            </h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Right of Access</li>
              <li>Right to Rectification</li>
              <li>Right to Erasure (Right to be Forgotten)</li>
              <li>Right to Data Portability</li>
              <li>Right to Withdraw Consent</li>
              <li>Right to Object</li>
              <li>Right to Lodge a Complaint (ICO)</li>
            </ul>
            <p className="mt-4">
              Contact us at{" "}
              <strong>support@nextdocuk.com</strong> to exercise any of these
              rights.
            </p>
          </section>

          <Separator />

          {/* 6. Retention */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              6. Data Retention
            </h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Account Data: Active + 12 months after closure</li>
              <li>AI Chat History: 12 months for quality improvement</li>
              <li>Anonymous AI Queries: 12 months (unlinked)</li>
              <li>Payment Records: 7 years (legal compliance)</li>
              <li>CPD Certificates: Indefinite unless deleted by request</li>
              <li>Marketing Data: Deleted within 30 days after opt-out</li>
            </ul>
          </section>

          <Separator />

          {/* 7. Cookies */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              7. Cookie Policy
            </h2>
            <p>
              We use cookies to improve functionality, analytics, and user
              experience. Manage preferences via the banner on your first visit.
            </p>
          </section>

          <Separator />

          {/* 8. Third-Party Services */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              8. Third-Party Services
            </h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Stripe – Payments (PCI DSS compliant)</li>
              <li>Supabase – Database & authentication</li>
              <li>OpenAI / Google Gemini – AI query processing</li>
              <li>Calendly – Appointment scheduling (if used)</li>
            </ul>
          </section>

          <Separator />

          {/* 9. Contact */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Mail className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-semibold text-foreground">
                9. Contact Information
              </h2>
            </div>
            <div className="bg-muted rounded-lg p-4">
              <p>
                <strong>Data Controller:</strong> NextDoc Global Ltd (Company No.
                16504223)
              </p>
              <p>
                <strong>Email:</strong> support@nextdocuk.com
              </p>
              <p>
                <strong>Jurisdiction:</strong> United Kingdom (England & Wales)
              </p>
              <p>
                <strong>Response Time:</strong> within 72 hours
              </p>
            </div>
          </section>
        </div>
          <Separator />

          {/* 10. Your Control Over AI Data */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              10. Your Control Over AI Data
            </h2>
            <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
              <li>
                <strong>View Chat History:</strong> Access your past AI
                conversations through your dashboard
              </li>
              <li>
                <strong>Delete Conversations:</strong> Remove individual
                conversations or all AI chat history at any time
              </li>
              <li>
                <strong>Download Data:</strong> Request a complete export of all
                AI interactions under your Right to Data Portability
              </li>
              <li>
                <strong>Opt-Out of Improvement Analytics:</strong> Request that
                your data not be used for AI model improvement (this may limit
                personalization)
              </li>
            </ul>
            <p className="mt-3">
              To exercise these rights, contact:{" "}
              <strong>support@nextdocuk.com</strong>
            </p>
          </section>

          <Separator />

          {/* Footer summary card */}
          <Card className="mt-8">
            <CardContent className="p-6 text-sm text-muted-foreground">
              <p>
                <strong>Last Updated:</strong> 17 October 2025
                <br />
                <strong>Version:</strong> 2.0
                <br />
                We may update this Privacy Policy from time to time. Any material
                changes will be notified via email and in-platform alerts.
              </p>
            </CardContent>
          </Card>
</main>

      {/* Footer */}
      <footer className="border-t mt-12 py-6 bg-background">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 px-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <img
              src="/logo.svg"
              alt="NextDoc UK Logo"
              width={28}
              height={28}
              className="rounded"
            />
            {/* If not using Next.js: 
            <img src="/logo.svg" alt="NextDoc UK Logo" width={28} height={28} className="rounded" />
            */}
            <span className="font-semibold text-foreground">NextDoc UK</span>
          </div>
          <div className="flex gap-4">
            <a href="/privacy" className="hover:text-primary">
              Privacy
            </a>
            <a href="/terms" className="hover:text-primary">
              Terms
            </a>
            <a href="/" className="hover:text-primary">
              Home
            </a>
          </div>
          <p>© 2025 NextDoc Global Ltd</p>
        </div>
      </footer>
    </>
  );
}
