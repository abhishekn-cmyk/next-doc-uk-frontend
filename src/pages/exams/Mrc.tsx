// export default function Mr() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
//       {/* Header Section */}
//    {/* Hero Section - Coming Soon Badge */}
// <section className="py-16 bg-indigo-600 text-white">
//   <div className="container mx-auto px-4 max-w-3xl text-center">
//     {/* Badge */}
//     <div className="inline-block bg-indigo-800 text-white px-6 py-2 rounded-full font-semibold mb-6">
//       Coming Soon
//     </div>

//     {/* Heading */}
//     <h1 className="text-4xl md:text-5xl font-bold mb-4">
//       MRCOG Preparation Programme
//     </h1>

//     {/* Subheading */}
//     <p className="text-lg md:text-xl text-indigo-100 mb-6">
//       Membership of the Royal College of Obstetricians and Gynaecologists
//     </p>

//     {/* Description */}
//     <p className="text-md md:text-lg text-indigo-200 leading-relaxed">
//       We're developing comprehensive MRCOG Part 1, Part 2 & Part 3 preparation content with expert guidance from consultant obstetricians and gynaecologists. Our enhanced curriculum will include clinical skills training, case-based scenarios, OSCE preparation, and dedicated principal mentor support for your O&G career pathway.
//     </p>
//   </div>
// </section>


//       {/* Hero Section */}
    

//       {/* What We're Building Section */}
//       <section className="py-16 bg-white text-white">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12">
//             What We're Building For You
//           </h2>
//           <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
//             Comprehensive MRCOG preparation designed by UK consultants specifically for international medical graduates
//           </p>
          
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//             {/* Features List */}
//             <div className="lg:col-span-2">
//               <ul className="space-y-4">
//                 {[
//                   "Comprehensive preparation for MRCOG Part 1, MRCOG Part 2, MRCOG Part 3 Clinical",
//                   "Expert guidance from UK consultant specialists in obstetrics and gynaecology training",
//                   "Enhanced curriculum with latest exam formats",
//                   "Interactive learning resources and case-based training",
//                   "Mock examinations with detailed feedback",
//                   "Dedicated principal mentor support programme"
//                 ].map((feature, index) => (
//                   <li key={index} className="flex items-start">
//                     <svg className="w-5 h-5 text-green-300 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
//                       <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                     </svg>
//                     <span>{feature}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Benefits Cards */}
//             <div className="space-y-6">
//               {[
//                 {
//                   title: "Expert Curriculum",
//                   description: "Comprehensive study materials aligned with current exam formats and Royal College guidelines"
//                 },
//                 {
//                   title: "UK Consultants",
//                   description: "Learn from experienced NHS consultants and examiners who understand the UK healthcare system"
//                 },
//                 {
//                   title: "Proven Success",
//                   description: "Join thousands of doctors who've successfully passed their exams with our guidance"
//                 }
//               ].map((benefit, index) => (
//                 <div key={index} className="bg-blue-500 p-6 rounded-lg">
//                   <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
//                   <p className="text-blue-100">{benefit.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Registration Section */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-4 max-w-4xl">
//           <div className="grid md:grid-cols-2 gap-12">
//             {/* Benefits */}
//             <div className="space-y-8">
//               <h3 className="text-2xl font-bold text-gray-900 mb-6">
//                 Be the First to Know
//               </h3>
              
//               {[
//                 "Comprehensive study materials aligned with current exam formats and Royal College guidelines",
//                 "Learn from experienced NHS consultants and examiners who understand the UK healthcare system",
//                 "Join thousands of doctors who've successfully passed their exams with our guidance"
//               ].map((benefit, index) => (
//                 <div key={index} className="flex items-start">
//                   <svg className="w-6 h-6 text-green-500 mt-1 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                   </svg>
//                   <p className="text-gray-700">{benefit}</p>
//                 </div>
//               ))}
//             </div>

//             {/* Registration Form */}
//             <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
//               <p className="text-lg font-semibold text-gray-900 mb-6">
//                 Register your interest and we'll notify you as soon as our enhanced MRCOG preparation programme launches
//               </p>
              
//               <form className="space-y-6">
//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                     Email Address *
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     placeholder="your.email@example.com"
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                     required
//                   />
//                 </div>
                
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
//                     Name (Optional)
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     placeholder="Dr. Your Name"
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                   />
//                 </div>
                
//                 <button
//                   type="submit"
//                   className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//                 >
//                   Notify Me When Available
//                 </button>
//               </form>
              
//               <p className="text-sm text-gray-500 mt-4 text-center">
//                 We'll only send you important updates about the MRCOG programme launch. No spam, ever.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Available Now Section */}
//       <section className="py-16 bg-gray-900 text-white">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl font-bold mb-4">
//             Explore What's Available Now
//           </h2>
//           <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
//             While we finalise our MRCOG programme, discover our other tools and connect with expert mentors
//           </p>
          
//           <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
//             {[
//               {
//                 title: "Meet Our Mentors",
//                 description: "Connect with experienced NHS consultants"
//               },
//               {
//                 title: "Explore PLAB Preparation",
//                 description: "Comprehensive PLAB 1 & 2 preparation resources"
//               },
//               {
//                 title: "View All Products",
//                 description: "Discover our full range of medical exam preparation"
//               }
//             ].map((item, index) => (
//               <div key={index} className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
//                 <h3 className="text-xl font-bold mb-3">{item.title}</h3>
//                 <p className="text-gray-300">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white py-8">
//         <div className="container mx-auto px-4 text-center">
//           <p className="text-gray-400">
//             &copy; {new Date().getFullYear()} MRCOG Preparation Programme. All rights reserved.
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// }

import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ExamMRCOG = () => {
  return (
    <div className="min-h-screen bg-background">
   
      
      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-accent/20 text-primary-foreground px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
            <span className="text-sm font-medium">🚀 Coming Soon</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
            MRCOG Preparation Programme
          </h1>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Membership of the Royal College of Obstetricians and Gynaecologists
          </p>
          <p className="text-lg text-primary-foreground/80 max-w-4xl mx-auto leading-relaxed">
            We're developing comprehensive MRCOG Part 1, Part 2 & Part 3 preparation content with expert guidance from consultant obstetricians and gynaecologists. Our enhanced curriculum will include clinical skills training, case-based scenarios, OSCE preparation, and dedicated principal mentor support for your O&G career pathway.
          </p>
        </div>
      </section>

      {/* What We're Building Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            What We're Building For You
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Comprehensive MRCOG preparation designed by UK consultants specifically for international medical graduates
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              "Comprehensive preparation for MRCOG Part 1, MRCOG Part 2, MRCOG Part 3 Clinical",
              "Expert guidance from UK consultant specialists in obstetrics and gynaecology training",
              "Enhanced curriculum with latest exam formats",
              "Interactive learning resources and case-based training",
              "Mock examinations with detailed feedback",
              "Dedicated principal mentor support programme"
            ].map((feature, index) => (
              <div key={index} className="flex gap-3 items-start p-4 rounded-lg border bg-card hover:shadow-md transition-shadow">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📚</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Curriculum</h3>
              <p className="text-muted-foreground">
                Comprehensive study materials aligned with current exam formats and Royal College guidelines
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👨‍⚕️</span>
              </div>
              <h3 className="text-xl font-bold mb-3">UK Consultants</h3>
              <p className="text-muted-foreground">
                Learn from experienced NHS consultants and examiners who understand the UK healthcare system
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Proven Success</h3>
              <p className="text-muted-foreground">
                Join thousands of doctors who've successfully passed their exams with our guidance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold text-center mb-4">Be the First to Know</h2>
          <p className="text-center text-muted-foreground mb-8">
            Register your interest and we'll notify you as soon as our enhanced MRCOG preparation programme launches
          </p>

          <div className="bg-card border rounded-lg p-8 shadow-sm">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Email Address <span className="text-destructive">*</span>
                </label>
                <Input type="email" placeholder="your.email@example.com" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Name (Optional)</label>
                <Input type="text" placeholder="Your full name" />
              </div>
              <Button className="w-full" size="lg">
                Notify Me When Available
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                We'll only send you important updates about the MRCOG programme launch. No spam, ever.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExamMRCOG;
