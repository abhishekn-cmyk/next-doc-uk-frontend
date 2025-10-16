import { CheckCircle, ArrowRight, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router";

export default function PaymentSuccess() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-2xl space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-success" />
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold text-foreground text-balance">
              Payment Successful
            </h1>
            <p className="text-muted-foreground text-lg">
              {
                "Thank you for your purchase. Your payment has been processed successfully."
              }
            </p>
          </div>
        </div>

        {/* Order Details Card */}
        <Card className="border-border bg-card">
          <CardContent className="p-6 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-border">
              <h2 className="text-lg font-medium text-card-foreground">
                Order Details
              </h2>
              <span className="text-sm text-muted-foreground">
                Order #12345
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Amount Paid</span>
                  <span className="font-medium text-card-foreground">
                    $350.00
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Payment Method</span>
                  <span className="font-medium text-card-foreground">
                    •••• 4242
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Transaction ID</span>
                  <span className="font-medium text-card-foreground font-mono text-sm">
                    txn_1234567890
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Date</span>
                  <span className="font-medium text-card-foreground">
                    Dec 26, 2024
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Status</span>
                  <span className="inline-flex items-center gap-1.5 text-success font-medium">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    Completed
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Receipt</span>
                  <span className="text-card-foreground">Sent to email</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card className="border-border bg-card">
          <CardContent className="p-6">
            <h3 className="text-lg font-medium text-card-foreground mb-4">
              What happens next?
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="font-medium text-card-foreground">
                    Confirmation email sent
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {"Check your inbox for order details and receipt"}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Download className="w-5 h-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="font-medium text-card-foreground">
                    Access your purchase
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {"Download links and access details are in your email"}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Link to="/dashboard" className="flex items-center gap-2">
              Go to Dashboard
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button
            variant="outline"
            asChild
            className="border-border text-foreground hover:bg-accent bg-transparent"
          >
            <Link to="/">Return to Home</Link>
          </Button>
        </div>

        {/* Support */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            {"Need help? "}
            <Link to="/support" className="text-foreground hover:underline">
              Contact our support team
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
