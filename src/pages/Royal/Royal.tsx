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
  const [selectedExams, setSelectedExams] = useState<string[]>([]);
  const [selectedSections, setSelectedSections] = useState<string[]>([]);
  const router = useNavigate();

  const toggleExam = (exam: string) => {
    setSelectedExams((prev) =>
      prev.includes(exam) ? prev.filter((e) => e !== exam) : [...prev, exam]
    );
  };

  const toggleSection = (section: string) => {
    setSelectedSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  const [openItem, setOpenItem] = useState<string | null>(null);

  // === Exam Data ===
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

  // For modal exam listing
  const allExams = [
    ...anaesthetistsExams,
    ...radiologistsExams,
    ...pathologistsExams,
    ...ophthalmologistsExams,
    ...psychiatristsExams,
    ...physiciansExams,
    ...surgeonsExams,
    ...facultiesExams,
  ].map((e) => e.title);

  const allSections = [
    "Royal College of Anaesthetists",
    "Royal College of Radiologists",
    "Royal College of Pathologists",
    "Royal College of Ophthalmologists",
    "Royal College of Psychiatrists",
    "Royal College of Physicians - SCEs",
    "Royal College of Surgeons",
    "UK Faculties",
  ];

  const handleApply = (target: string) => {
    if (target === "mentors") router("/mentors");
    else if (target === "gapmap") router("/gap-map");
    else if (target === "available") router("/products");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* === HERO SECTION === */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0d47a1] to-[#1976d2] text-white">
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
        <ExamSection title="Royal College of Anaesthetists" exams={anaesthetistsExams} />
        <ExamSection title="Royal College of Radiologists" exams={radiologistsExams} />
        <ExamSection title="Royal College of Pathologists" exams={pathologistsExams} />
        <ExamSection title="Royal College of Ophthalmologists" exams={ophthalmologistsExams} />
        <ExamSection title="Royal College of Psychiatrists" exams={psychiatristsExams} />
        <ExamSection title="Royal College of Physicians - SCEs" exams={physiciansExams} />
        <ExamSection title="Royal College of Surgeons" exams={surgeonsExams} />
        <ExamSection title="UK Faculties" exams={facultiesExams} />
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
      <section className="bg-gray-50 py-16 border-t">
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
                Each programme includes structured study plans, consultant-led teaching, live mock sessions, progress tracking, and AI-powered question banks.
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
            {/* Filter Section */}
            <div>
              <Label>Select College Section(s)</Label>
              <div className="border rounded-md p-3 grid grid-cols-2 gap-2 mt-2">
                {allSections.map((section) => (
                  <div key={section} className="flex items-center space-x-2">
                    <Checkbox
                      id={section}
                      checked={selectedSections.includes(section)}
                      onCheckedChange={() => toggleSection(section)}
                    />
                    <Label htmlFor={section} className="text-sm font-normal">{section}</Label>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-1">{selectedSections.length} selected</p>
            </div>

            {/* Email */}
            <div>
              <Label>Email *</Label>
              <Input type="email" placeholder="your.email@example.com" required />
            </div>

            {/* Exams */}
            <div>
              <Label>Select Exams of Interest *</Label>
              <div className="border rounded-md p-3 max-h-48 overflow-y-auto space-y-2 mt-2">
                {allExams.map((exam) => (
                  <div key={exam} className="flex items-center space-x-2">
                    <Checkbox
                      id={exam}
                      checked={selectedExams.includes(exam)}
                      onCheckedChange={() => toggleExam(exam)}
                    />
                    <Label htmlFor={exam} className="text-sm font-normal">{exam}</Label>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-1">{selectedExams.length} exams selected</p>
            </div>

            <div>
              <Label>When do you plan to take this exam?</Label>
              <Select>
                <SelectTrigger><SelectValue placeholder="Select timeframe" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="within-3-months">Within 3 months</SelectItem>
                  <SelectItem value="within-6-months">Within 6 months</SelectItem>
                  <SelectItem value="within-1-year">Within 1 year</SelectItem>
                  <SelectItem value="over-1-year">Over 1 year</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div><Label>Current Role/Grade (optional)</Label><Input placeholder="e.g., CT1-2, ST3+" /></div>
            <div><Label>Country/Region (optional)</Label><Input placeholder="e.g., UK, India" /></div>

            <div className="flex items-start space-x-2">
              <Checkbox id="agree" required />
              <Label htmlFor="agree" className="text-sm">
                I agree to receive updates about NextDoc programmes *
              </Label>
            </div>
          </div>

          <DialogFooter className="flex flex-col sm:flex-row gap-3 justify-between">
            <Button onClick={() => handleApply("mentors")} variant="outline" className="border-[#0d47a1] text-[#0d47a1] hover:bg-[#0d47a1] hover:text-white">
              Apply & Go to Mentors
            </Button>
            <Button onClick={() => handleApply("gapmap")} variant="outline" className="border-[#0d47a1] text-[#0d47a1] hover:bg-[#0d47a1] hover:text-white">
              Apply & Explore GapMap
            </Button>
            <Button onClick={() => handleApply("available")} className="bg-[#0d47a1] hover:bg-[#1565c0] text-white">
              Apply & View Programmes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
