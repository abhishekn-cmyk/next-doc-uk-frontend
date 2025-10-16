import { XCircle, ArrowLeft, RefreshCw, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Link } from "react-router"


export default function PaymentFailurePage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-2xl space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center">
              <XCircle className="w-8 h-8 text-destructive" />
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold text-foreground text-balance">Payment Failed</h1>
            <p className="text-muted-foreground text-lg">
              {"We encountered an issue processing your payment. No charges were made to your account."}
            </p>
          </div>
        </div>

        {/* Error Details Card */}
        <Card className="border-border bg-card">
          <CardContent className="p-6 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-border">
              <h2 className="text-lg font-medium text-card-foreground">Transaction Details</h2>
              <span className="text-sm text-muted-foreground">Ref #ERR-12345</span>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Attempted Amount</span>
                <span className="font-medium text-card-foreground">$350.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Payment Method</span>
                <span className="font-medium text-card-foreground">•••• 4242</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Error Code</span>
                <span className="font-medium text-card-foreground font-mono text-sm">CARD_DECLINED</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Status</span>
                <span className="inline-flex items-center gap-1.5 text-destructive font-medium">
                  <div className="w-2 h-2 bg-destructive rounded-full"></div>
                  Failed
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Common Issues */}
        <Card className="border-border bg-card">
          <CardContent className="p-6">
            <h3 className="text-lg font-medium text-card-foreground mb-4 flex items-center gap-2">
              <HelpCircle className="w-5 h-5" />
              Common Issues & Solutions
            </h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="font-medium text-card-foreground">Insufficient funds</p>
                <p className="text-sm text-muted-foreground">
                  {"Check your account balance or try a different payment method"}
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-medium text-card-foreground">Card information incorrect</p>
                <p className="text-sm text-muted-foreground">
                  {"Verify your card number, expiry date, and CVV are correct"}
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-medium text-card-foreground">Bank security block</p>
                <p className="text-sm text-muted-foreground">{"Contact your bank to authorize the transaction"}</p>
              </div>
              <div className="space-y-2">
                <p className="font-medium text-card-foreground">Network timeout</p>
                <p className="text-sm text-muted-foreground">{"Check your internet connection and try again"}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link to="/checkout" className="flex items-center gap-2">
              <RefreshCw className="w-4 h-4" />
              Try Again
            </Link>
          </Button>
          <Button variant="outline" asChild className="border-border text-foreground hover:bg-accent bg-transparent">
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Return to Home
            </Link>
          </Button>
        </div>

        {/* Support */}
        <div className="text-center space-y-2">
          <p className="text-sm text-muted-foreground">
            {"Still having trouble? "}
            <Link to="/support" className="text-foreground hover:underline">
              Contact our support team
            </Link>
          </p>
          <p className="text-xs text-muted-foreground">
            {"Reference ID: ERR-12345 • Include this when contacting support"}
          </p>
        </div>
      </div>
    </div>
  )
}
