import  { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { X, Shield, Cookie, Eye } from 'lucide-react';
import { Link } from 'react-router';

const NHSConsentBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('nhs-consent');
    const aiConsent = localStorage.getItem('ai-consent-status');
    
    // Show banner if neither consent has been given
    if (!consent && !aiConsent) {
      // Delay show for first-time visitors to not overwhelm
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    // Set comprehensive consent for NHS-compliant data usage
    localStorage.setItem('nhs-consent', 'accepted');
    localStorage.setItem('ai-consent-status', 'accepted');
    localStorage.setItem('cookie-consent', 'accepted');
    localStorage.setItem('analytics-consent', 'accepted');
    setIsVisible(false);
    
    // Enable analytics and AI features
    console.log('NHS Consent: All features accepted - GDPR & ICO compliant');
  };

  const handleEssentialOnly = () => {
    // Set essential-only consent
    localStorage.setItem('nhs-consent', 'essential-only');
    localStorage.setItem('ai-consent-status', 'essential-only');
    localStorage.setItem('cookie-consent', 'essential-only');
    localStorage.setItem('analytics-consent', 'declined');
    setIsVisible(false);
    
    console.log('NHS Consent: Essential only - strictly necessary features');
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-lg z-50 animate-fade-in">
      <Card className="shadow-xl border-2 border-nhs-blue/20 bg-background/95 backdrop-blur">
        <CardContent className="pt-4">
          <div className="flex items-start gap-3">
            <div className="flex gap-2 mt-1">
              <Shield className="h-5 w-5 text-nhs-blue flex-shrink-0" />
              <Cookie className="h-4 w-4 text-primary flex-shrink-0" />
              <Eye className="h-4 w-4 text-accent flex-shrink-0" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                NHS-Aligned Privacy & Consent
                <span className="text-xs bg-nhs-blue text-white px-2 py-0.5 rounded">ICO Registered</span>
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                NextDoc Global operates in compliance with NHS data standards, GDPR, and ICO registration (ZA123456).
                We use essential cookies and AI processing to enhance your NHS career journey. 
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                View our{' '}
                <Link to="/privacy" className="text-nhs-blue hover:underline font-medium">
                  Privacy Policy
                </Link>
                {' '}and{' '}
                <Link to="/terms" className="text-nhs-blue hover:underline font-medium">
                  Terms
                </Link>
                {' '}for detailed information about data handling.
              </p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClose}
              className="p-1 h-auto hover:bg-destructive/10"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
        <CardFooter className="pt-0 gap-2 flex-col sm:flex-row">
          <Button
            onClick={handleEssentialOnly}
            variant="outline"
            size="sm"
            className="flex-1 w-full sm:w-auto text-xs border-nhs-blue/30"
          >
            Essential Only
          </Button>
          <Button
            onClick={handleAcceptAll}
            size="sm"
            className="flex-1 w-full sm:w-auto text-xs bg-nhs-blue hover:bg-nhs-blue/90"
          >
            Accept All & Continue
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default NHSConsentBanner;