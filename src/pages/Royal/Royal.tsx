"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExamSection } from "@/pages/ExamSection";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useNavigate } from "react-router";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function Royal() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [selectedExams, setSelectedExams] = useState<string[]>([]);
  const [timeframe, setTimeframe] = useState("");
  const [role, setRole] = useState("");
  const [country, setCountry] = useState("");
  const [agree, setAgree] = useState(false);
  const [openItem, setOpenItem] = useState<string | null>(null);

  const navigate = useNavigate();

  // === Exam data ===
  const anaesthetistsExams = [
    { title: "FFICM (Primary, Final OSCE/SOE)", description: "ICM primary + OSCE/SOE with mock vivas." },
    { title: "FFPMRCA", description: "Pain medicine fellowship exam preparation." },
    { title: "FRCA (Primary, Final)", description: "Primary & Final prep with anaesthetics consultants." },
  ];

  const radiologistsExams = [
    { title: "FRCR – Clinical Oncology", description: "CO Part 1, 2A, 2B mapped to latest blueprint." },
    { title: "FRCR – Clinical Radiology", description: "Physics, Anatomy, Final A/B with image-rich drills." },
  ];

  const pathologistsExams = [
    { title: "FRCPath – Chemical Pathology", description: "Part 1 & 2 prep with consultant pathologists." },
    { title: "FRCPath – Haematology", description: "Part 1 & 2 prep with consultant pathologists." },
    { title: "FRCPath – Histopathology", description: "Part 1 & 2 prep with consultant pathologists." },
    { title: "FRCPath – Immunology", description: "Part 1 & 2 prep with consultant pathologists." },
  ];

  const ophthalmologistsExams = [
    { title: "FRCOphth (Part 1, 2, Final Clinical)", description: "Parts 1–2 & clinical OSCE with station practice." },
  ];

  const psychiatristsExams = [
    { title: "MRCPsych (Paper A, B, CASC)", description: "Paper A/B & CASC with role-play stations." },
  ];

  const physiciansExams = [
    { title: "SCE – Cardiology", description: "Specialty Certificate Exam prep aligned to RCP." },
    { title: "SCE – Respiratory Medicine", description: "Specialty Certificate Exam prep aligned to RCP." },
    { title: "SCE – Neurology", description: "Specialty Certificate Exam prep aligned to RCP." },
  ];

  const surgeonsExams = [
    { title: "FRCS – General Surgery", description: "Fellowship prep tailored to your surgical specialty." },
    { title: "FRCS – Plastic Surgery", description: "Fellowship prep tailored to your surgical specialty." },
  ];

  const facultiesExams = [
    { title: "MFPH (Part A, Part B)", description: "Consultant-led preparation aligned to faculty standards." },
    { title: "FFOM", description: "Consultant-led preparation aligned to faculty standards." },
  ];

  const examsList = [
    ...anaesthetistsExams,
    ...radiologistsExams,
    ...pathologistsExams,
    ...ophthalmologistsExams,
    ...psychiatristsExams,
    ...physiciansExams,
    ...surgeonsExams,
    ...facultiesExams,
  ].map((e) => e.title);

  // === Handlers ===
  const toggleExam = (exam: string) => {
    setSelectedExams((prev) =>
      prev.includes(exam) ? prev.filter((e) => e !== exam) : [...prev, exam]
    );
  };

  const handleSubmit = () => {
    if (!email) return alert("Please enter your email.");
    if (!agree) return alert("Please agree to receive updates.");
    if (selectedExams.length === 0) return alert("Please select at least one exam.");

    const payload = { email, selectedExams, timeframe, role, country, agree };
    console.log("Submitting waitlist:", payload);
    setOpen(false);
    alert("Thank you! You've joined the waitlist.");
  };

  const handleApply = (target: string) => {
    if (target === "mentors") navigate("/mentors");
    else if (target === "gapmap") navigate("/gap-map");
    else if (target === "available") navigate("/products");
  };

  // === JSX ===
  return (
    <div className="min-h-screen bg-background">
      {/* === HERO SECTION === */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0A3B7A] to-[#004E92] text-white">
        <div className="container mx-auto px-4 py-24 text-center">
          <Badge className="bg-white/20 text-white border border-white/30 px-4 py-1 rounded-full text-sm mb-6">
            ✨ Coming Soon
          </Badge>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">Royal College Exams</h1>
          <p className="text-lg md:text-xl mb-10 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Consultant-led preparation for major UK Royal College exams.  
            Join the waitlist to get notified when your programme launches.
          </p>

          <Button
            onClick={() => setOpen(true)}
            className="bg-white text-[#0d47a1] font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-white/90 transition inline-flex items-center gap-2"
          >
            Join Waitlist →
          </Button>
        </div>
      </section>

      {/* === EXAM SECTIONS === */}
     <div className="container mx-auto px-4 py-12 space-y-10">
  <ExamSection 
    title="Royal College of Anaesthetists" 
    exams={anaesthetistsExams} 
    onJoinWaitlist={() => setOpen(true)}
  />
  <ExamSection 
    title="Royal College of Radiologists" 
    exams={radiologistsExams} 
    onJoinWaitlist={() => setOpen(true)}
  />
  <ExamSection 
    title="Royal College of Pathologists" 
    exams={pathologistsExams} 
    onJoinWaitlist={() => setOpen(true)}
  />
  <ExamSection 
    title="Royal College of Ophthalmologists" 
    exams={ophthalmologistsExams} 
    onJoinWaitlist={() => setOpen(true)}
  />
  <ExamSection 
    title="Royal College of Psychiatrists" 
    exams={psychiatristsExams} 
    onJoinWaitlist={() => setOpen(true)}
  />
  <ExamSection 
    title="Royal College of Physicians - SCEs" 
    exams={physiciansExams} 
    onJoinWaitlist={() => setOpen(true)}
  />
  <ExamSection 
    title="Royal College of Surgeons" 
    exams={surgeonsExams} 
    onJoinWaitlist={() => setOpen(true)}
  />
  <ExamSection 
    title="UK Faculties" 
    exams={facultiesExams} 
    onJoinWaitlist={() => setOpen(true)}
  />
</div>


      {/* === EXPLORE SECTION === */}
      <section className="bg-gray-50 py-16 mt-16 border-t">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Explore What's Available Now</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" onClick={() => handleApply("mentors")} className="text-[#0d47a1] border-[#0d47a1] hover:bg-[#0d47a1] hover:text-white">Meet Mentors</Button>
            <Button variant="outline" onClick={() => handleApply("gapmap")} className="text-[#0d47a1] border-[#0d47a1] hover:bg-[#0d47a1] hover:text-white">Explore GapMap™</Button>
            <Button variant="outline" onClick={() => handleApply("available")} className="text-[#0d47a1] border-[#0d47a1] hover:bg-[#0d47a1] hover:text-white">Explore Programmes</Button>
          </div>
        </div>
      </section>

      {/* === FAQ SECTION === */}
    {/* === FAQ SECTION === */}
<section className="bg-white py-16 border-t">
  <div className="container mx-auto px-4 max-w-3xl">
    <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
    <Accordion type="single" collapsible value={openItem} onValueChange={setOpenItem}>
      <AccordionItem value="q1">
        <AccordionTrigger className="text-lg font-medium">When will programmes launch?</AccordionTrigger>
        <AccordionContent>
          Most Royal College prep programmes are scheduled to open in phased releases starting Q1 2026, beginning with FRCA, MRCPsych, and MRCS.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="q2">
        <AccordionTrigger className="text-lg font-medium">What's included in each programme?</AccordionTrigger>
        <AccordionContent>
          Each programme will include consultant-led prep, exam-aligned content, mock assessments, and mentor support tailored to that Royal College exam. We follow the same high standards as our existing PLAB, MRCP, and MRCS programmes.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="q3">
        <AccordionTrigger className="text-lg font-medium">What will pricing be?</AccordionTrigger>
        <AccordionContent>
          Pricing will vary by exam and duration — with early-bird and institutional access discounts available. All pricing will be announced before launch.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
</section>


      {/* === WAITLIST MODAL === */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Join the Waitlist</DialogTitle>
            <DialogDescription>
              Get early access and updates about upcoming Royal College programmes.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            {/* Email */}
            <div>
              <Label>Email *</Label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
              />
            </div>

            {/* Exams */}
            <div>
              <Label>Select Exams of Interest *</Label>
              <div className="border rounded-md p-3 max-h-48 overflow-y-auto space-y-2 mt-2">
                {examsList.map((exam) => (
                  <div key={exam} className="flex items-center space-x-2">
                    <Checkbox
                      id={exam}
                      checked={selectedExams.includes(exam)}
                      onCheckedChange={(checked) => {
                        if (checked === true || checked === false) toggleExam(exam);
                      }}
                    />
                    <Label htmlFor={exam} className="text-sm font-normal">
                      {exam}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeframe */}
            <div>
              <Label>When do you plan to take this exam?</Label>
              <Select onValueChange={setTimeframe}>
                <SelectTrigger>
                  <SelectValue placeholder="Select timeframe" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="within-3-months">Within 3 months</SelectItem>
                  <SelectItem value="within-6-months">Within 6 months</SelectItem>
                  <SelectItem value="within-1-year">Within 1 year</SelectItem>
                  <SelectItem value="over-1-year">Over 1 year</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Role */}
            <div>
              <Label>Current Role/Grade (optional)</Label>
              <Input placeholder="e.g., CT1-2, ST3+" value={role} onChange={(e) => setRole(e.target.value)} />
            </div>

            {/* Country */}
            <div>
              <Label>Country/Region (optional)</Label>
              <Input placeholder="e.g., UK, India" value={country} onChange={(e) => setCountry(e.target.value)} />
            </div>

            {/* Agree */}
            <div className="flex items-start space-x-2">
              <Checkbox
                id="agree"
                checked={agree}
                onCheckedChange={(checked) => setAgree(checked === true)}
              />
              <Label htmlFor="agree" className="text-sm">
                I agree to receive updates about NextDoc programmes *
              </Label>
            </div>
          </div>

         <DialogFooter className="w-full">
  <Button
    onClick={handleSubmit}
    className="bg-[#0d47a1] hover:bg-[#1565c0] text-white w-full"
  >
    Join Waitlist
  </Button>
</DialogFooter>

        </DialogContent>
      </Dialog>
    </div>
  );
}
