import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { X, Cookie } from "lucide-react";
import { Link } from "react-router";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
    console.log("Cookie consent: All accepted");
  };

  const handleRejectNonEssential = () => {
    localStorage.setItem("cookie-consent", "essential-only");
    setIsVisible(false);
    console.log("Cookie consent: Essential only");
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 animate-fade-in">
      <Card className="shadow-lg border-2">
        <CardContent className="pt-4">
          <div className="flex items-start gap-3">
            <Cookie className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="font-semibold text-foreground mb-2">
                NHS-Aligned Privacy & Consent
              </h3>
              <p className="text-sm text-muted-foreground">
                NextDoc Global operates in compliance with NHS data standards,
                GDPR, and ICO registration (ZA123456). We use essential cookies
                and AI processing to enhance your NHS career journey.
              </p>
              <p className="text-sm text-muted-foreground">
                View our
                <Link to="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link to="/terms" className="text-primary hover:underline">
                  Terms
                </Link>
                for detailed information about data handling.
              </p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClose}
              className="p-1 h-auto"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
        <CardFooter className="pt-0 gap-2">
          <Button
            onClick={handleRejectNonEssential}
            variant="outline"
            size="sm"
            className="flex-1"
          >
            Essential Only
          </Button>
          <Button onClick={handleAcceptAll} size="sm" className="flex-1">
            Accept All
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CookieConsent;
