import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, BookOpen, Users, Trophy, ArrowRight } from "lucide-react";
import { Link } from "react-router";

const buildingFeatures = [
  "Comprehensive preparation for MRCOG Part 1, Part 2 & Part 3 Clinical",
  "Expert guidance from UK consultant specialists in obstetrics and gynaecology training",
  "Enhanced curriculum with latest exam formats",
  "Interactive learning resources and case-based training",
  "Mock examinations with detailed feedback",
  "Dedicated principal mentor support programme",
];

const expertCards = [
  { icon: BookOpen, title: "Expert Curriculum", description: "Comprehensive study materials aligned with current exam formats and Royal College guidelines" },
  { icon: Users, title: "UK Consultants", description: "Learn from experienced NHS consultants and examiners who understand the UK healthcare system" },
  { icon: Trophy, title: "Proven Success", description: "Join thousands of doctors who've successfully passed their exams with our guidance" },
];

export default function MRCOGComingSoon() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Coming Soon Header */}
      <section className="text-center py-20 bg-gradient-to-br from-[#0A3B7A] to-[#004E92] text-white px-4">
        <h1 className="text-5xl font-bold mb-4"><Badge>Coming Soon</Badge></h1>
        <h2 className="text-3xl font-semibold mb-4">MRCOG Preparation Programme</h2>
        <p className="text-lg max-w-3xl mx-auto mb-4">Membership of the Royal College of Obstetricians and Gynaecologists</p>
        <p className="text-base max-w-3xl mx-auto opacity-90">
          We're developing comprehensive MRCOG Part 1, Part 2 & Part 3 preparation content with expert guidance from consultant obstetricians and gynaecologists. 
          Our enhanced curriculum will include clinical skills training, case-based scenarios, OSCE preparation, and dedicated principal mentor support for your O&G career pathway.
        </p>
      </section>

      {/* What We're Building */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What We're Building For You</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {buildingFeatures.map((feature, index) => (
            <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <p className="text-gray-700">{feature}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Expert Cards */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our MRCOG Program?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {expertCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition">
                <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl font-bold mb-2">{card.title}</CardTitle>
                <CardContent>
                  <p className="text-gray-700 text-sm">{card.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Notify Me Form */}
      <section className="py-16 px-4 max-w-xl mx-auto bg-white rounded-xl shadow-md">
        <h3 className="text-2xl font-bold text-center mb-6">Be the First to Know</h3>
        <p className="text-gray-700 text-center mb-6">
          Register your interest and we'll notify you as soon as our enhanced MRCOG preparation programme launches.
        </p>
        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email Address *"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input
            type="text"
            placeholder="Name (Optional)"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <Button type="submit" className="bg-gradient-to-br from-[#0A3B7A] to-[#004E92] text-white py-3">
            Notify Me When Available <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </form>
        <p className="text-xs text-gray-500 mt-2 text-center">
          We'll only send you important updates about the MRCOG programme launch. No spam, ever.
        </p>
      </section>
      <br/><br/>

      {/* Explore Programs */}
      <section className="py-16 px-4 w-full bg-gradient-to-br from-[#0A3B7A] to-[#004E92] text-white text-center">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Explore What's Available Now</h3>
          <p className="text-white mb-8">
            While we finalise our MRCOG programme, discover our other tools and connect with expert mentors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/mentors">
              <Button className="bg-white text-[#0A3B7A] px-8 py-3 hover:opacity-90">Meet Our Mentors</Button>
            </Link>
            <Link to="/exams/plab">
              <Button className="bg-white text-[#0A3B7A] px-8 py-3 hover:opacity-90">Explore PLAB Preparation</Button>
            </Link>
            <Link to="/products">
              <Button className="bg-white text-[#0A3B7A] px-8 py-3 hover:opacity-90">View All Products</Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
