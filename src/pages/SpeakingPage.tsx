import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mic } from "lucide-react";
// import Header from "@/components/Header";

const SpeakingPage = () => {
  const [prompt, setPrompt] = useState("");
  const [isRecording, setIsRecording] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* <Header /> */}
      
      {/* Breadcrumb */}
      <div className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <a href="/"className="hover:text-primary transition-colors">Home</a>
             <span>›</span>
            <a href="/english" className="hover:text-primary transition-colors">English Proficiency</a>
            <span>›</span>
            <span className="text-foreground">SpeechSim™</span>
          </div>
        </div>
      </div>

      {/* Notice Bar */}
      <div className="bg-muted/50 border-b border-border">
        <div className="container mx-auto px-4 py-3 text-center text-sm">
          <span className="text-foreground font-medium">Free users:</span>{" "}
          <span className="text-muted-foreground">1 AI analysis/day.</span>{" "}
          <a href="#" className="text-primary hover:underline font-medium">
            Unlock unlimited with NextDoc AI Pro
          </a>
        </div>
      </div>

      {/* Tip */}
      <div className="bg-background border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Tip:</span> Use official IELTS/OET speaking prompts for best results. Speak clearly and naturally.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {/* Input Section */}
          <Card className="p-6">
            <div className="flex items-start gap-4 mb-6">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mic className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">SpeechSim™</h2>
                <p className="text-sm text-primary font-medium">AI Speaking Partner</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Cue Card / Prompt (Optional)
                </label>
                <Textarea
                  placeholder="e.g., Describe a time when you helped someone..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="min-h-[120px] resize-none"
                />
              </div>

              <Button 
                className="w-full" 
                size="lg"
                onClick={() => setIsRecording(!isRecording)}
              >
                <Mic className="mr-2 h-4 w-4" />
                {isRecording ? "Stop Recording" : "Start Recording"}
              </Button>
            </div>
          </Card>

          {/* Feedback Section */}
          <Card className="p-6">
            <h3 className="text-2xl font-bold text-foreground mb-4">AI Feedback</h3>
            <p className="text-sm text-muted-foreground mb-6">Results will appear here</p>
            
            <div className="flex flex-col items-center justify-center py-16">
              <Mic className="h-16 w-16 text-muted-foreground/30 mb-4" />
              <p className="text-muted-foreground text-center">
                Record your response to see AI feedback
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SpeakingPage;
