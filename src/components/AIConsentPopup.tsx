import  { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Bot, Shield, X, Database, Users } from 'lucide-react';
import { Link } from 'react-router';

const AIConsentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('ai-data-consent');
    const hasInteractedWithAI = localStorage.getItem('has-used-ai-tools');
    
    // Show popup if user hasn't consented and hasn't used AI tools before
    if (!consent && !hasInteractedWithAI) {
      // Check if user has visited the site before (delay popup for new users)
      const hasVisited = localStorage.getItem('has-visited');
      if (hasVisited) {
        setIsVisible(true);
      } else {
        localStorage.setItem('has-visited', 'true');
        // Show after 30 seconds for first-time visitors
        setTimeout(() => setIsVisible(true), 30000);
      }
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('ai-data-consent', 'full');
    localStorage.setItem('analytics-consent', 'accepted');
    setIsVisible(false);
    console.log('AI consent: Full consent granted');
  };

  const handleEssentialOnly = () => {
    localStorage.setItem('ai-data-consent', 'essential');
    localStorage.setItem('analytics-consent', 'declined');
    setIsVisible(false);
    console.log('AI consent: Essential only');
  };

  const handleDecline = () => {
    localStorage.setItem('ai-data-consent', 'declined');
    localStorage.setItem('analytics-consent', 'declined');
    setIsVisible(false);
    console.log('AI consent: Declined');
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <Dialog open={isVisible} onOpenChange={setIsVisible}>
      <DialogContent className="sm:max-w-lg">
        <Card className="border-0 shadow-none">
          <CardHeader className="text-center pb-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                <CardTitle className="text-xl">We Value Your Privacy</CardTitle>
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
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Bot className="h-4 w-4" />
              <span className="text-sm">AI-Powered Medical Career Tools</span>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground text-center">
              NextDoc Global uses AI to provide personalized medical career guidance. 
              We'd like your consent to enhance your experience.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                <Database className="h-4 w-4 text-primary mt-0.5" />
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-foreground">What We Collect</h4>
                  <p className="text-xs text-muted-foreground">
                    AI queries, quiz progress, and usage patterns to personalize your NHS career journey
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                <Users className="h-4 w-4 text-primary mt-0.5" />
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-foreground">How We Use It</h4>
                  <p className="text-xs text-muted-foreground">
                    Suggest relevant tools, improve AI responses, and recommend career resources
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-xs text-muted-foreground">
                By continuing, you consent to our data usage as outlined in our{' '}
                <Link to="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
                . You can withdraw consent anytime.
              </p>
            </div>
          </CardContent>
          
          <CardFooter className="flex flex-col gap-2">
            <Button
              onClick={handleAcceptAll}
              className="w-full"
              size="sm"
            >
              Accept All & Continue
            </Button>
            <div className="flex gap-2 w-full">
              <Button
                onClick={handleEssentialOnly}
                variant="outline"
                size="sm"
                className="flex-1"
              >
                Essential Only
              </Button>
              <Button
                onClick={handleDecline}
                variant="ghost"
                size="sm"
                className="flex-1"
              >
                Decline
              </Button>
            </div>
            <Link 
              to="/privacy" 
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Review Our Data Policy →
            </Link>
          </CardFooter>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default AIConsentPopup;