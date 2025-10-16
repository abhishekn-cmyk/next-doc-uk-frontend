import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Headphones } from "lucide-react";
// import Header from "@/components/Header";

const ListeningPage = () => {
  const [transcript, setTranscript] = useState("");
  const [question, setQuestion] = useState("");

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
            <span className="text-foreground">Transcript Analyzer</span>
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
            <span className="font-medium text-foreground">Tip:</span> Use official IELTS/OET listening transcripts for best results.
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
                <Headphones className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">Transcript Analyzer</h2>
                <p className="text-sm text-primary font-medium">Listening Companion</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Paste Transcript
                </label>
                <Textarea
                  placeholder="Paste the listening transcript here..."
                  value={transcript}
                  onChange={(e) => setTranscript(e.target.value)}
                  className="min-h-[200px] resize-none"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Your Question
                </label>
                <Textarea
                  placeholder="e.g., Why is answer B correct, not C?"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  className="min-h-[120px] resize-none"
                />
              </div>

              <Button className="w-full" size="lg">
                Analyse with NextDoc AI
              </Button>
            </div>
          </Card>

          {/* Feedback Section */}
          <Card className="p-6">
            <h3 className="text-2xl font-bold text-foreground mb-4">AI Feedback</h3>
            <p className="text-sm text-muted-foreground mb-6">Results will appear here</p>
            
            <div className="flex flex-col items-center justify-center py-16">
              <Headphones className="h-16 w-16 text-muted-foreground/30 mb-4" />
              <p className="text-muted-foreground text-center">
                Submit a transcript to see AI feedback
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ListeningPage;
