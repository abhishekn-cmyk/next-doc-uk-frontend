// src/components/EvidenceBasedSuccess.jsx
import { FaLock, FaGlobe, FaStethoscope } from 'react-icons/fa';

const Evidence = () => {
  return (
    <div
      className="bg-gradient-to-br from-primary to-primary/80 text-white py-12 px-4 sm:px-6 lg:px-8 font-sans"
      style={{ fontFamily: 'Arial, sans-serif' }}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Evidence Section */}
        <section className="text-center">
          
          {/* Badge: "Research-Backed" */}
          <div className="flex justify-center mb-6">
            <span className="rounded-full border border-blue-300 bg-white/10 text-sm md:text-sm text-white font-medium backdrop-blur-sm p-2">
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

          {/* Single Compliance Badge */}
          <div className="flex justify-center mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-blue-300 bg-white/10 text-xs md:text-sm text-white font-medium backdrop-blur-sm">
              <FaLock className="w-3 h-3 text-blue-400" />
              GDPR Compliant
              <span className="mx-1 text-white/50">•</span>
              <FaGlobe className="w-3 h-3 text-white/70" />
              ICO Registered
              <span className="mx-1 text-white/50">•</span>
              <FaStethoscope className="w-3 h-3 text-white" />
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
