import { CheckCircle, Award, Shield } from "lucide-react";
import { useNavigate } from "react-router";
export default function Evidence() {
  const navigate = useNavigate();
  return (
    <section className="w-full bg-[#003B8E] py-20 px-4">
      <div className="max-w-6xl mx-auto text-center text-white">
        {/* Small Badge */}
        <span className="inline-block bg-blue-800 text-white text-xs md:text-sm font-medium px-4 py-1 rounded-full mb-4">
          Research-Backed
        </span>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Evidence-Based Success
        </h2>

        <p className="text-base md:text-lg opacity-80 mb-12 whitespace-nowrap">
          Our methodology is built on NHS workforce data and proven educational
          frameworks
        </p>

        {/* Stats Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            {
              value: "95%",
              label: "NHS Program Graduate Success",
              sub: "Based on NHS workforce data 2023",
            },
            {
              value: "450+",
              label: "Years Combined Experience",
              sub: "NHS Consultants & Senior Registrars",
            },
            {
              value: "87%",
              label: "IMGs Choose Structured Programs",
              sub: "Medical Education Research 2024",
            },
            {
              value: "12",
              label: "Months to NHS Placement",
              sub: "Average with structured pathway",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="rounded-xl p-5 shadow-sm flex flex-col items-center justify-center text-center 
                 hover:shadow-md transform hover:scale-105 transition-all duration-300 
                 bg-[#224488] border border-gray-300"
              style={{ color: "#FFFFFF" }}
            >
              <h3 className="text-xl md:text-2xl font-bold mb-1">
                {stat.value}
              </h3>
              <p className="text-sm font-medium opacity-95">{stat.label}</p>
              <p className="text-xs md:text-sm opacity-80 leading-snug">
                {stat.sub}
              </p>
            </div>
          ))}
        </div>

        {/* Compliance Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <div className="flex items-center bg-blue-900 px-4 py-2 rounded-full text-sm md:text-base hover:bg-blue-800 transition">
            <Shield className="h-4 w-4 text-yellow-400 mr-2" />
            GDPR Compliant
          </div>
          <div className="flex items-center bg-blue-900 px-4 py-2 rounded-full text-sm md:text-base hover:bg-blue-800 transition">
            <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
            NHS Verified
          </div>
          <div className="flex items-center bg-blue-900 px-4 py-2 rounded-full text-sm md:text-base hover:bg-blue-800 transition">
            <Award className="h-4 w-4 text-blue-300 mr-2" />
            SOC 2 Certified
          </div>
        </div>

        {/* CTA Section */}
        <h3 className="text-xl md:text-2xl font-semibold mb-2">
          Be Among the First 100 Doctors
        </h3>
        <p className="text-sm md:text-base opacity-80 mb-6">
          Join our early access program for exclusive launch benefits
        </p>

        <div
          className="rounded-xl shadow-sm flex flex-col items-center justify-center text-center 
             hover:shadow-md transform hover:scale-105 transition-all duration-300 
             bg-[#224488] border border-gray-300 mb-4 w-full h-10 mx-auto"
        >
          <p className="text-white text-sm md:text-base font-small">
            Early Access signup requires Supabase connection
          </p>
        </div>

        <button
          onClick={() => navigate("/get-started")}
          className="bg-white text-blue-800 font-semibold py-3 px-8 rounded-lg shadow-md 
                 hover:bg-gray-100 hover:shadow-lg transition duration-300"
        >
          Reserve Early Access →
        </button>
      </div>
    </section>
  );
}
