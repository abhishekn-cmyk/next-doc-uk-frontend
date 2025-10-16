import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Head from "@/layout/Head";
import { Clock, CreditCard, Mail, AlertCircle } from "lucide-react";

export default function Refund() {
  return (
    <>
      <Head
        title="Refund & Cancellation Policy - NextDoc Global"
        description="Clear refund policy for NextDoc Global subscriptions, AI tools, consultations, and CPD certificates. Fair and transparent cancellation terms."
        keywords="refund policy, cancellation, NextDoc Global, subscription refund, consultation cancellation"
      />
      <Navigation />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex items-center gap-3 mb-6">
          <CreditCard className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-bold text-foreground">
            Refund & Cancellation Policy
          </h1>
        </div>

        <Card className="mb-6">
          <CardContent className="p-6">
            <p className="text-muted-foreground">
              We are committed to transparency and customer satisfaction. This
              policy outlines our refund and cancellation terms for all NextDoc
              Global services.
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Quick Refund Guide
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Consultations (24h+ notice):</span>
                  <span className="text-green-600 font-medium">
                    100% Refund
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Subscriptions (48h, minimal usage):</span>
                  <span className="text-green-600 font-medium">
                    Full Refund
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>AI Tools (after use):</span>
                  <span className="text-red-500 font-medium">
                    Non-refundable
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>CPD Certificates (issued):</span>
                  <span className="text-red-500 font-medium">
                    Non-refundable
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                How to Request a Refund
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <p>
                  <strong>Email:</strong> support@nextdocglobal.com
                </p>
                <p>
                  <strong>Include:</strong>
                </p>
                <ul className="list-disc ml-4 space-y-1">
                  <li>Your full name</li>
                  <li>Purchase receipt/transaction ID</li>
                  <li>Reason for refund request</li>
                  <li>Date of purchase</li>
                </ul>
                <p>
                  <strong>Processing Time:</strong> 7-10 working days
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Clock className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-semibold text-foreground">
                1. Consultation Refunds
              </h2>
            </div>
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      Full Refund Eligibility
                    </h3>
                    <p className="text-muted-foreground">
                      Cancellations made <strong>24 hours or more</strong>{" "}
                      before a scheduled consultation receive a full refund via
                      Stripe.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      No Refund Policy
                    </h3>
                    <p className="text-muted-foreground">
                      No-shows or cancellations made{" "}
                      <strong>less than 24 hours</strong> before the appointment
                      will not be refunded.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      Rescheduling
                    </h3>
                    <p className="text-muted-foreground">
                      Free rescheduling available up to 12 hours before your
                      appointment.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <Separator />

          <section>
            <div className="flex items-center gap-2 mb-4">
              <CreditCard className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-semibold text-foreground">
                2. Subscriptions & Products
              </h2>
            </div>

            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    Core/Elite Subscriptions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">
                    Refunds are available within{" "}
                    <strong>48 hours of purchase</strong> if no significant
                    usage has occurred:
                  </p>
                  <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                    <li>Less than 3 MCQs attempted</li>
                    <li>No study materials downloaded</li>
                    <li>No AI tools used extensively</li>
                    <li>No CPD certificates generated</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    AI Tools (CV Booster™, InterviewSim™, GapMap™)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-muted-foreground">
                      <strong>Non-refundable after use.</strong> Once you've
                      accessed or used any AI tool, the service is considered
                      delivered.
                    </p>
                    <div className="flex items-start gap-2 p-3 bg-amber-50 dark:bg-amber-950/20 rounded-lg">
                      <AlertCircle className="h-4 w-4 text-amber-600 mt-0.5" />
                      <p className="text-sm text-amber-800 dark:text-amber-200">
                        If you experience technical issues preventing tool
                        usage, contact support immediately for assistance.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">CPD Certificates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    <strong>Non-refundable once issued.</strong> CPD
                    certificates are generated and logged immediately upon
                    completion, representing consumed educational value.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              3. Refund Process
            </h2>
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">
                      1. Submit Request
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Email support@nextdocglobal.com with your details and
                      reason
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">
                      2. Review Process
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      We review your request within 2-3 business days
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <CreditCard className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">
                      3. Refund Processed
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Approved refunds processed within 7-10 working days
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              4. Exceptions & Special Cases
            </h2>
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">
                      Platform Abuse
                    </h3>
                    <p className="text-muted-foreground">
                      We reserve the right to deny refunds for abuse of the
                      platform or multiple refund requests from the same user.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-blue-500 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">
                      Technical Issues
                    </h3>
                    <p className="text-muted-foreground">
                      If technical problems prevent you from accessing purchased
                      services, we'll provide full support or consider
                      discretionary refunds.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">
                      Subscription Cancellation
                    </h3>
                    <p className="text-muted-foreground">
                      You can cancel your subscription at any time. Access
                      continues until the end of your billing period.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              5. Contact & Support
            </h2>
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">
                      Refund Requests
                    </h3>
                    <p className="text-muted-foreground mb-2">
                      <strong>Email:</strong> support@nextdocglobal.com
                    </p>
                    <p className="text-muted-foreground">
                      <strong>Response Time:</strong> Within 24-48 hours
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">
                      General Support
                    </h3>
                    <p className="text-muted-foreground mb-2">
                      <strong>Email:</strong> info@nextdocglobal.com
                    </p>
                    <p className="text-muted-foreground">
                      <strong>Business Hours:</strong> Monday-Friday, 9 AM - 6
                      PM GMT
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        <Card className="mt-8">
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">
              <strong>Policy Updates:</strong> This refund policy may be updated
              from time to time. The latest version will always be available on
              this page.
              <br />
              <strong>Last Updated:</strong> January 2025
            </p>
          </CardContent>
        </Card>
      </main>
    </>
  );
}
