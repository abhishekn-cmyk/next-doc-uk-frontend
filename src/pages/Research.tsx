import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import {
  FileText,
  Download,
  ExternalLink,
  Calendar,
  Users,
} from "lucide-react";
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



export default function Research() {
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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              White Papers & Research
            </h1>
            <p className="text-xl leading-relaxed opacity-90">
              Evidence-based insights and thought leadership in international
              medical education, healthcare integration, and professional
              development.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Research */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Research</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our latest research publications contributing to the advancement
              of international medical education
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

        </div>
      </section>

      {/* All Research Papers */}
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

      {/* Collaboration & Partnerships */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Research Partnerships</h2>
            <p className="text-muted-foreground">
              Collaborating with leading institutions to advance medical
              education research
            </p>
          </div>

            <div className="grid md:grid-cols-3 gap-8">
      {Partnerships.map((partner) => (
        <Card key={partner._id}>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="h-6 w-6 text-primary" />
              <span>{partner.partnerName}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              {partner.description
                .split("•") // split by bullet
                .map((item, i) => (
                  <li key={i}>• {item.trim()}</li>
                ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Contribute to Our Research
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Join our research community and help shape the future of
            international medical education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              Participate in Research
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              Submit Research Proposal
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
