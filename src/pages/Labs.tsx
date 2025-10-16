// pages/labs.tsx
import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  FileText,
  Download,
  ExternalLink,
  Calendar,
  Bell,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import { usePublications } from "@/hooks/useResearch";
import type { IResearchPublication } from "@/types/research";
import { useFocusAreas } from "@/hooks/useResearch";
import { FaMicroscope, FaGlobe, FaUserGraduate } from "react-icons/fa";
import { MdAssessment } from "react-icons/md";
import { usePartnerships } from "@/hooks/useResearch";

function getIcon(title: string) {
  const lower = title.toLowerCase();
  if (lower.includes("technology")) return <FaMicroscope className="text-purple-500" />;
  if (lower.includes("healthcare")) return <FaGlobe className="text-green-500" />;
  if (lower.includes("assessment")) return <MdAssessment className="text-blue-500" />;
  if (lower.includes("career")) return <FaUserGraduate className="text-pink-500" />;
  return <FaGlobe className="text-gray-400" />; // fallback
}

export default function Labs() {
  const [showModal, setShowModal] = useState(false);
  const { data: publicationsResponse, isLoading: pubLoading, error: pubError } = usePublications();
  const { data: focusAreas, isLoading: focusLoading, error: focusError } = useFocusAreas();
  const { data: Partnerships, isLoading: partnerLoading, error: partnerError } = usePartnerships();

  // Unified loading/error handling
  if (pubLoading || focusLoading || partnerLoading) return <p>Loading...</p>;
  if (pubError || focusError || partnerError) return <p>Error loading data</p>;

  const publications: IResearchPublication[] = publicationsResponse || [];

  if (!focusAreas?.length) return <p>No focus areas found.</p>;
  if (!Partnerships?.length) return <p>No partnerships found.</p>;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 py-24 text-left">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">NextDoc Labs</h1>
          <p className="text-xl md:text-2xl mb-4 text-white/90 max-w-3xl  leading-relaxed">
            Evidence-led white papers and practical frameworks on NHS workforce,
            medical education, and health & social care.
          </p>
          <p className="text-lg text-white/80 italic">
            The research arm of NextDoc Global.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="flex-1 container mx-auto px-4 py-12">
        <Card className="mb-16 max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">What is NextDoc Labs?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <CardDescription className="text-base leading-relaxed">
              NextDoc Labs publishes white papers, working papers, and methods
              notes focused on NHS workforce integration, IMG pathways, medical
              education, and responsible AI. We follow COPE/ICMJE guidance and
              EQUATOR reporting standards, aiming for BMJ-level rigor with
              service-design practicality.
            </CardDescription>
            <p className="text-sm text-muted-foreground">
              Coming soon: author submissions, peer review, and a reviewer
              registry.
            </p>
          </CardContent>
        </Card>

        {/* Publications Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">NextDoc Labs White Papers</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our latest publications advancing international medical education
              and NHS integration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {publications.slice(0, 2).map((paper: IResearchPublication) => (
              <Card key={paper._id} className="border-2 border-primary/20">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge>{paper.category}</Badge>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Download className="h-4 w-4" />
                      <span>0</span>
                    </div>
                  </div>

                  <CardTitle className="text-xl leading-tight">{paper.title}</CardTitle>

                  <p className="text-sm text-muted-foreground">
                    {paper.authors.join(", ")}
                  </p>

                  <p className="text-sm text-muted-foreground flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(paper.date).toLocaleDateString("en-GB", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground mb-6">{paper.summary}</p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button className="flex-1">
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Abstract
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <section className="py-16 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-12">
                Research Publications
              </h2>

              <div className="space-y-6">
                {publications.slice(0, 4).map((paper, index) => (
                  <Card key={paper._id || index}>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-4 mb-2">
                            <Badge variant={paper.featured ? "default" : "outline"}>
                              {paper.category}
                            </Badge>
                            {paper.downloadCount !== undefined && (
                              <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                                <Download className="h-4 w-4" />
                                <span>{paper.downloadCount} downloads</span>
                              </div>
                            )}
                          </div>
                          <h3 className="text-xl font-semibold mb-2">
                            {paper.title}
                          </h3>
                          <p className="text-muted-foreground mb-2">
                            {paper.summary}
                          </p>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <span>{paper.authors?.join(", ")}</span>
                            <span className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {new Date(paper.date).toLocaleDateString("en-GB", {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              })}
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2 mt-4 md:mt-0 md:ml-6">
                          <Button variant="outline" size="sm">
                            <FileText className="h-4 w-4 mr-2" />
                            Preview
                          </Button>
                          <Button size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Research Areas */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">
                  Our Research Focus Areas
                </h2>
                <p className="text-muted-foreground">
                  We conduct research across multiple domains to advance
                  international medical education
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {focusAreas.map((area, index) => (
                  <Card key={index} className="text-center shadow-md hover:shadow-lg transition rounded-2xl">
                    <CardHeader>
                      <div className="flex justify-center mb-4 text-5xl">
                        {getIcon(area.title)}
                      </div>
                      <CardTitle className="text-lg font-semibold">{area.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">{area.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </section>

        {/* Our Work & Guidelines Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-muted-foreground bg-gray-100">
                We align with NHS guidance, NICE, BNF, ICMJE, COPE, and EQUATOR (CONSORT, STROBE, PRISMA, SQUIRE).
              </p>
            </div>

            {/* Grid: first two cards side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Author Guidelines */}
              <Card className="border-2 border-primary/20 hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    Author Guidelines (Preview)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    2-page overview: what we accept, reporting standards, licensing, conflicts.
                  </p>
                  <Button variant="outline" size="sm" disabled className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Download Preview (Coming Soon)
                  </Button>
                </CardContent>
              </Card>

              {/* Editorial & Ethics */}
              <Card className="border-2 border-primary/20 hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    Editorial & Ethics (Preview)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    COPE/ICMJE alignment, plagiarism screening, data availability.
                  </p>
                  <Button variant="outline" size="sm" disabled className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Download Preview (Coming Soon)
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>

      {/* Footer-like Contribute Section */}
     <section className="w-full bg-gray-100 text-black">
  <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
    <div className="max-w-6xl mx-auto">
      {/* Section content without Card */}
      <div className="w-full p-6 md:p-10">
        <div className="pb-6 text-left">
          <h2 className="text-3xl font-bold flex items-start justify-start gap-3 mb-4">
            <FileText className="h-8 w-8 text-black" />
            Contribute to Our Research
          </h2>
          <p className="text-black/90 text-lg leading-relaxed max-w-3xl mx-auto text-left">
            Join our research community and help shape the future of international medical education.
          </p>
        </div>

        <div className="text-left">
          <div className="flex flex-col sm:flex-row gap-4 justify-start items-start mt-6">
            <Button 
              variant="outline" 
              size="lg" 
              disabled 
              className="min-w-[220px] justify-center bg-gray-200 border-gray-300 text-black hover:bg-gray-300 hover:text-black"
            >
              <Lock className="h-5 w-5 mr-2" />
              Participate — Coming Soon
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              disabled 
              className="min-w-[220px] justify-center bg-gray-200 border-gray-300 text-black hover:bg-gray-300 hover:text-black"
            >
              <Lock className="h-5 w-5 mr-2" />
              Submit Proposal — Coming Soon
            </Button>
            <Button 
              size="lg" 
              onClick={() => setShowModal(true)} 
              className="min-w-[220px] justify-center bg-gradient-to-br from-[#0A3B7A] to-[#004E92] text-white font-semibold"
            >
             <Bell/> Join Early Access
            </Button>
          </div>
        
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 p-4">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 relative overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-900"
            >
              <X className="h-5 w-5" />
            </button>

            <h2 className="text-2xl font-bold mb-4">Join the Early Access List</h2>
            <p className="text-gray-700 mb-6">
              Be first to access the submission portal, reviewer invitations, and calls for papers.
            </p>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name *
                </label>
                <input
                  type="text"
                  placeholder="Dr. Jane Smith"
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email *
                </label>
                <input
                  type="email"
                  placeholder="jane.smith@example.com"
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  I'm interested in *
                </label>
                <select
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Select a role</option>
                  <option value="author">Author</option>
                  <option value="reviewer">Reviewer</option>
                  <option value="subscriber">Subscriber</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Organisation (Optional)
                </label>
                <input
                  type="text"
                  placeholder="University or Hospital"
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="updates"
                  className="mt-1 mr-2"
                  required
                />
                <label htmlFor="updates" className="text-sm text-gray-700">
                  I agree to receive updates about NextDoc Labs * Including submission
                  windows, reviewer calls, and publication releases. You can unsubscribe anytime. See Privacy Notice.
                </label>
              </div>

              <Button type="submit" className="w-full">
                Join Early Access List
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}