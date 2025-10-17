import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const GetStarted = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    homeCountry: "",
    yearsOfExperience: "",
    primaryGoal: "",
    medicalBackground: "",
    agreeToTerms: false,
    subscribeToUpdates: false,
    password: "",
  });

  const [error, setError] = useState("");

  const steps = [
    {
      number: "01",
      title: "Complete Assessment",
      description:
        "Tell us about your background, qualifications, and career goals",
    },
    {
      number: "02",
      title: "Get Matched",
      description:
        "We'll match you with the right mentor and create your personalized plan",
    },
    {
      number: "03",
      title: "Start Learning",
      description:
        "Begin your journey with AI-powered tools and expert guidance",
    },
    {
      number: "04",
      title: "Achieve Success",
      description:
        "Pass your exams and secure your NHS position with ongoing support",
    },
  ];

  const benefits = [
    "Personalized learning pathway",
    "Expert mentor matching",
    "AI-powered study tools",
    "Mock examinations & feedback",
    "NHS placement support",
    "24/7 community access",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value, type } = e.target;
    const target = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? target.checked : value,
    }));
  };

  const handleSelectChange = (id: string, value: string) => {
    if (id === "agreeToTerms" || id === "subscribeToUpdates") {
      setFormData((prev) => ({ ...prev, [id]: value === "true" }));
    } else {
      setFormData((prev) => ({ ...prev, [id]: value }));
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/user/signup`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            yearsOfExperience: Number(
              formData.yearsOfExperience.split("-")[0] || 0
            ),
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Registration failed");
        return;
      }

      localStorage.setItem("token", data.token);
      navigate("/login");
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Start Your NHS Journey Today
          </h1>
          <p className="text-xl leading-relaxed opacity-90 mb-8">
            Join thousands of international doctors who have successfully
            transitioned to the NHS with our comprehensive support system.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground">
            Your journey to NHS success in 4 simple steps
          </p>
          <div className="grid md:grid-cols-4 gap-8 mt-8">
            {steps.map((step, idx) => (
              <Card key={idx} className="text-center relative">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                    {step.number}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Get Started Today</CardTitle>
                <p className="text-muted-foreground">
                  Complete your initial assessment to begin your personalized
                  NHS journey
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <form className="space-y-4" onSubmit={handleRegister}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john.doe@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phoneNumber">Phone Number</Label>
                    <Input
                      id="phoneNumber"
                      type="tel"
                      placeholder="+44 20 1234 5678"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="homeCountry">Home Country</Label>
                      <Select
                        onValueChange={(v) =>
                          handleSelectChange("homeCountry", v)
                        }
                        value={formData.homeCountry}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="India">India</SelectItem>
                          <SelectItem value="Pakistan">Pakistan</SelectItem>
                          <SelectItem value="Bangladesh">Bangladesh</SelectItem>
                          <SelectItem value="Nigeria">Nigeria</SelectItem>
                          <SelectItem value="Egypt">Egypt</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="yearsOfExperience">
                        Years of Experience
                      </Label>
                      <Select
                        onValueChange={(v) =>
                          handleSelectChange("yearsOfExperience", v)
                        }
                        value={formData.yearsOfExperience}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select years" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0-2">0-2 years</SelectItem>
                          <SelectItem value="3-5">3-5 years</SelectItem>
                          <SelectItem value="6-10">6-10 years</SelectItem>
                          <SelectItem value="10+">10+ years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="primaryGoal">Primary Goal</Label>
                    <Select
                      onValueChange={(v) =>
                        handleSelectChange("primaryGoal", v)
                      }
                      value={formData.primaryGoal}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="What's your main objective?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="plab">
                          Pass PLAB Examinations
                        </SelectItem>
                        <SelectItem value="mrcp">MRCP Preparation</SelectItem>
                        <SelectItem value="placement">
                          NHS Job Placement
                        </SelectItem>
                        <SelectItem value="specialty">
                          Specialty Training
                        </SelectItem>
                        <SelectItem value="general">
                          General Career Guidance
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="medicalBackground">
                      Medical Background
                    </Label>
                    <Textarea
                      id="medicalBackground"
                      value={formData.medicalBackground}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Please share your medical qualifications..."
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onCheckedChange={(v) =>
                          handleSelectChange(
                            "agreeToTerms",
                            v ? "true" : "false"
                          )
                        }
                      />
                      <Label htmlFor="agreeToTerms" className="text-sm">
                        I agree to the{" "}
                        <Link
                          to="/terms"
                          className="text-primary hover:underline"
                        >
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link
                          to="/privacy"
                          className="text-primary hover:underline"
                        >
                          Privacy Policy
                        </Link>
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="subscribeToUpdates"
                        checked={formData.subscribeToUpdates}
                        onCheckedChange={(v) =>
                          handleSelectChange(
                            "subscribeToUpdates",
                            v ? "true" : "false"
                          )
                        }
                      />
                      <Label htmlFor="subscribeToUpdates" className="text-sm">
                        I would like updates about new programs & NHS
                        opportunities
                      </Label>
                    </div>
                  </div>

                  {error && <p className="text-red-500 text-sm">{error}</p>}

                  <Button type="submit" className="w-full" size="lg">
                    Start My NHS Journey <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </form>

                <div className="text-center text-sm text-muted-foreground mt-4">
                  Already have an account?{" "}
                  <Link to="/login" className="text-primary hover:underline">
                    Sign in here
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Benefits Section */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">What You'll Get</h3>
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center space-x-3 mb-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Limited Time Offer without badge */}
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Limited Time Offer</h3>
                  <p className="mb-4 opacity-90">
                    Get 3 months of premium mentorship and AI tools for the
                    price of 2 when you start this month.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetStarted;
