import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Users, Globe, Award, Heart, Trophy } from "lucide-react";
import { useAbout } from "@/hooks/useAbout";
import { Badge } from "@/components/ui/badge";

export default function About() {
  const { data: abouts, isLoading } = useAbout();

  if (isLoading) return <p className="text-center py-16">Loading...</p>;
  if (!abouts || abouts.length === 0)
    return <p className="text-center py-16">No about data available.</p>;

  const about = abouts[0]; // get the first item
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {about.title}
            </h1>
            <p className="text-xl leading-relaxed opacity-90">
              {about.description}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
          {/* Mission Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Heart className="h-6 w-6 text-primary" />{" "}
                {/* Heart icon for Mission */}
                <span>{about.mission.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {about.mission.description}
              </p>
            </CardContent>
          </Card>

          {/* Vision Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Globe className="h-6 w-6 text-primary" />{" "}
                {/* Globe icon for Vision */}
                <span>{about.vision.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {about.vision.description}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{about.whyChoose.title}</h2>
            {about.whyChoose.subtitle && (
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {about.whyChoose.subtitle}
              </p>
            )}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* First Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-6 w-6 text-primary" />
                  <span>{about.whyChoose.items[0].title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {about.whyChoose.items[0].description}
                </p>
              </CardContent>
            </Card>

            {/* Second Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="h-6 w-6 text-primary" />
                  <span>{about.whyChoose.items[1].title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {about.whyChoose.items[1].description}
                </p>
              </CardContent>
            </Card>

            {/* Third Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="h-6 w-6 text-primary" />
                  <span>{about?.whyChoose?.items[2]?.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {about?.whyChoose?.items[2]?.description}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Mentor Team's Journey */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">
              Our Mentor Team's Journey
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              Meet the experienced NHS professionals who've walked the same path
              and now guide international doctors to success
            </p>
          </div>

          <div className="space-y-12">
            {/* Dr. Arjun Patel Detailed Story */}
            <Card className="overflow-hidden">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="flex flex-col items-center justify-center bg-gradient-to-br from-amber-50 to-yellow-50 p-6 md:col-span-1">
                  <div className="relative">
                    <div className="h-32 w-32 overflow-hidden rounded-full border-4 border-amber-400/30">
                      <img
                        src="/lovable-uploads/a1974f11-8f3f-40c0-b5d8-6e22f135a5e8.png"
                        alt="Dr. Arjun Patel"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <Badge className="absolute -bottom-2 left-1/2 -translate-x-1/2 transform border-0 bg-gradient-to-r from-amber-500 to-yellow-600 text-white">
                      Principal Mentor
                    </Badge>
                  </div>
                  <h3 className="mt-4 text-center text-xl font-bold">
                    Dr. Arjun Patel
                  </h3>
                  <p className="text-muted-foreground text-center text-sm">
                    Consultant Cardiologist
                  </p>
                  <p className="text-center text-sm font-semibold text-amber-600">
                    15+ Years NHS
                  </p>
                </div>
                <div className="p-6 md:col-span-2">
                  <h4 className="mb-3 text-lg font-semibold">
                    From Mumbai Medical College to NHS Leadership
                  </h4>
                  <div className="prose prose-sm text-muted-foreground max-w-none space-y-3">
                    <p>
                      Dr. Patel arrived in the UK in 2008 with his medical
                      degree from Mumbai but faced the reality that
                      international qualifications required validation. His PLAB
                      journey took 8 months of dedicated preparation while
                      working part-time jobs to support himself.
                    </p>
                    <p>
                      "The most challenging aspect wasn't the medical knowledge
                      - it was understanding NHS protocols, communication
                      styles, and cultural nuances," Dr. Patel reflects. After
                      passing PLAB, he secured his first NHS position as an FY2
                      equivalent.
                    </p>
                    <p>
                      Today, as a Consultant Cardiologist leading a busy cardiac
                      unit, Dr. Patel has mentored over 200 international
                      doctors. His systematic approach to NHS integration forms
                      the foundation of NextDoc Global's methodology.
                    </p>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge
                      variant="outline"
                      className="border-green-600 text-green-600"
                    >
                      PLAB 2009
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-blue-600 text-blue-600"
                    >
                      Consultant 2016
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-purple-600 text-purple-600"
                    >
                      200+ Mentees
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>

            {/* Dr. Priya Sharma Detailed Story */}
            <Card className="overflow-hidden">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="flex flex-col items-center justify-center bg-gradient-to-br from-teal-50 to-cyan-50 p-6 md:col-span-1">
                  <div className="relative">
                    <div className="h-32 w-32 overflow-hidden rounded-full border-4 border-teal-400/30">
                      <img
                        src="/lovable-uploads/0c62a90c-c3bd-4245-979a-ebe1a0e8cf1e.png"
                        alt="Dr. Priya Sharma"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <Badge className="absolute -bottom-2 left-1/2 -translate-x-1/2 transform border-0 bg-gradient-to-r from-teal-500 to-cyan-600 text-white">
                      Senior Mentor
                    </Badge>
                  </div>
                  <h3 className="mt-4 text-center text-xl font-bold">
                    Dr. Priya Sharma
                  </h3>
                  <p className="text-muted-foreground text-center text-sm">
                    Emergency Medicine SpR
                  </p>
                  <p className="text-center text-sm font-semibold text-teal-600">
                    8+ Years NHS
                  </p>
                </div>
                <div className="p-6 md:col-span-2">
                  <h4 className="mb-3 text-lg font-semibold">
                    From Karachi to Leading Emergency Medicine
                  </h4>
                  <div className="prose prose-sm text-muted-foreground max-w-none space-y-3">
                    <p>
                      Dr. Sharma's journey began with her MBBS from Dow
                      University in Karachi. She completed her PLAB in just 6
                      months through intensive preparation and arrived in the UK
                      with clear goals for emergency medicine specialization.
                    </p>
                    <p>
                      "Emergency medicine in the UK demanded not just clinical
                      skills but rapid cultural adaptation. Every interaction
                      with patients required understanding of NHS systems,
                      protocols, and communication standards," she explains.
                    </p>
                    <p>
                      Now a Senior Specialist Registrar, Dr. Sharma leads
                      emergency response teams and has successfully guided 150+
                      international doctors through their NHS transition,
                      specializing in high-pressure specialty placements.
                    </p>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge
                      variant="outline"
                      className="border-green-600 text-green-600"
                    >
                      PLAB 2015
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-blue-600 text-blue-600"
                    >
                      SpR 2019
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-purple-600 text-purple-600"
                    >
                      150+ Mentees
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>

            {/* Dr. Amit Kumar Detailed Story */}
            <Card className="overflow-hidden">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 p-6 md:col-span-1">
                  <div className="relative">
                    <div className="h-32 w-32 overflow-hidden rounded-full border-4 border-blue-400/30">
                      <img
                        src="/lovable-uploads/0fa2af72-01b3-48c7-9ab5-ac928ccd9f2e.png"
                        alt="Dr. Amit Kumar"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <Badge className="absolute -bottom-2 left-1/2 -translate-x-1/2 transform border-0 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
                      Associate Mentor
                    </Badge>
                  </div>
                  <h3 className="mt-4 text-center text-xl font-bold">
                    Dr. Amit Kumar
                  </h3>
                  <p className="text-muted-foreground text-center text-sm">
                    General Medicine Registrar
                  </p>
                  <p className="text-center text-sm font-semibold text-blue-600">
                    5+ Years NHS
                  </p>
                </div>
                <div className="p-6 md:col-span-2">
                  <h4 className="mb-3 text-lg font-semibold">
                    From Dhaka Medical College to NHS General Medicine
                  </h4>
                  <div className="prose prose-sm text-muted-foreground max-w-none space-y-3">
                    <p>
                      Dr. Kumar graduated from Dhaka Medical College and
                      completed his PLAB journey in 7 months while maintaining
                      his clinical knowledge current. His systematic approach to
                      preparation became a model for efficient NHS transition.
                    </p>
                    <p>
                      "General medicine training in the NHS requires
                      comprehensive understanding of multiple specialties and
                      excellent communication with multidisciplinary teams. The
                      learning curve was steep but structured preparation made
                      all the difference," he shares.
                    </p>
                    <p>
                      As a General Medicine Registrar, Dr. Kumar has guided 100+
                      international doctors through foundation and core training
                      programs, emphasizing the importance of comprehensive
                      preparation and systematic career progression.
                    </p>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge
                      variant="outline"
                      className="border-green-600 text-green-600"
                    >
                      PLAB 2018
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-blue-600 text-blue-600"
                    >
                      Registrar 2021
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-purple-600 text-purple-600"
                    >
                      100+ Mentees
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Research & Development */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Research & Development</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our tools are developed using evidence-based methodology and NHS
              workforce data analysis
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Trophy className="h-6 w-6 text-primary" />
                  <span>Evidence-Based Development</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Our AI-powered tools are built on analysis of NHS workforce
                  data, Royal College examination patterns, and successful IMG
                  career progression pathways. Each tool is validated by our
                  mentor team's combined 450+ years of NHS experience.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-6 w-6 text-primary" />
                  <span>Peer-Reviewed Content</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  All educational content undergoes rigorous review by NHS
                  consultants and medical education specialists. Our methodology
                  is informed by medical education research and continuous
                  feedback from successful IMG transitions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          </div>
          <h2 className="text-3xl font-bold text-center mb-12">
            {about.values.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {about.values.items.map((item) => (
              <Card key={item.title}>
                <CardHeader>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
