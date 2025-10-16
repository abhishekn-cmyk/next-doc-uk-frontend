import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
// import Header from "@/components/Header";
import ToolCard from "@/components/ToolCard";
import { Pen, Mic, Headphones, BookOpen } from "lucide-react";

const English = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* <Header /> */}
      
      <main>
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
              🤖 AI-Powered
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              NextDoc UK — English Proficiency Toolkit
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Bring your own official materials. Our AI does the analysis.
            </p>
            
            <div className="bg-accent rounded-xl p-6 mb-8 border border-border">
              <p className="text-sm text-accent-foreground mb-3">
                <span className="font-semibold">Free users:</span> 1 AI analysis per day across all tools.
              </p>
              <Button size="lg" className="font-semibold">
                Unlock Unlimited with NextDoc AI Pro
              </Button>
            </div>
          </div>
        </section>
        
        {/* Tools Grid */}
        <section className="py-8 px-4 pb-20">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-6">
              <ToolCard
                icon={Pen}
                title="WriterPro™"
                subtitle="AI Writing Analyzer"
                description="Paste any IELTS/OET task. Get instant band, criteria feedback, and fixes."
                buttonText="Open WriterPro™"
                iconBgColor="bg-blue-50"
                link="/writing"
              />
              
              <ToolCard
                icon={Mic}
                title="SpeechSim™"
                subtitle="AI Speaking Partner"
                description="Record your response or run a Part 1–3 simulation. Get fluency, pronunciation, grammar feedback."
                buttonText="Start Speaking"
                iconBgColor="bg-blue-50"
                link="/speaking"
              />
              
              <ToolCard
                icon={Headphones}
                title="Transcript Analyzer"
                subtitle="Listening Companion"
                description="Paste a listening transcript + your question. Understand answers, idioms, and reasoning."
                buttonText="Analyse Transcript"
                iconBgColor="bg-blue-50"
                link="/listening"
              />
              
              <ToolCard
                icon={BookOpen}
                title="Reading Assistant"
                subtitle="Comprehension Coach"
                description="Paste any reading passage. Get summaries, vocab help, and 'why this answer' logic."
                buttonText="Practice Reading"
                iconBgColor="bg-blue-50"
                link="/reading"
              />
            </div>
          </div>
        </section>
        
        {/* Footer Disclaimer */}
        <footer className="border-t border-border bg-muted/30 py-8 px-4">
          <div className="container mx-auto max-w-6xl">
            <p className="text-sm text-muted-foreground text-center">
              NextDoc AI is not affiliated with IDP or British Council. Use official materials; our tools provide independent AI analysis.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default English;