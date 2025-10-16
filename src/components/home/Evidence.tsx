// src/components/EvidenceBasedSuccess.jsx
import { FaLock, FaGlobe, FaStethoscope } from 'react-icons/fa';

const Evidence = () => {
  return (
    <div className=" bg-[#003366] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Evidence Section */}
        <section className="text-center">
          
          {/* Badge: "Research-Backed" */}
          <div className="flex justify-center mb-6">
            <span className="inline-block bg-white text-[#003366] text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide border border-white">
              Research-Backed
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Evidence-Based Success
          </h1>

          {/* Lead Text */}
          <p className="text-lg md:text-xl mb-4 max-w-4xl mx-auto opacity-95">
            Our methodology is built on NHS workforce data and proven educational frameworks
          </p>

          {/* Approach summary */}
          <p className="text-lg md:text-xl mb-12 max-w-4xl mx-auto opacity-95">
            Our approach is grounded in NHS workforce experience, evidence-based learning design, and continuous mentor feedback.
          </p>

          {/* Compliance Block */}
         <div className="flex justify-center mb-8 text-sm md:text-base text-white-700">
  <span className="flex items-center gap-1">
    <FaLock className="text-green-400 w-4 h-4" />
    GDPR Compliant
  </span>
  <span className="mx-2">•</span>
  <span className="flex items-center gap-1">
    <FaGlobe className="text-red-400 w-4 h-4" />
    ICO Registered
  </span>
  <span className="mx-2">•</span>
  <span className="flex items-center gap-1">
    <FaStethoscope className="text-[#005eb8] w-4 h-4" />
    NHS Aligned
  </span>
</div>


          {/* Footer Text */}
          <p className="text-sm opacity-70 mb-16">
            Registered Company No. 16504223 · ICO Registered · GDPR Compliant
          </p>
          
        </section>
      </div>
    </div>
  );
};

export default Evidence;
