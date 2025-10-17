import { useNavigate } from "react-router-dom";
import { Brain, BarChart3, Users, Triangle, Download } from "lucide-react";
import { type ReactNode } from "react";

// --- Mock UI Button (replace with shadcn/ui Button in your project)
interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, className = "", onClick }) => (
  <button
    onClick={onClick}
    className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 ${className}`}
  >
    {children}
  </button>
);
// ----------------------------------------------------------------

export default function PLABHeroContent() {
  const navigate = useNavigate();

  const handleLogin = (next: string) => {
    navigate(`/login?next=${next}`);
  };

  return (
    <div className="font-sans">
      {/* ---------------- HERO SECTION ---------------- */}
      <div className="relative min-h-screen flex flex-col justify-center bg-gradient-to-br from-[#0A3B7A] to-[#004E92] text-white px-6 sm:px-12 lg:px-24 overflow-hidden">
        {/* Floating Background Icons */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[35%] left-[5%] opacity-[0.15] hidden md:block">
            <Users className="w-24 h-24 text-white" />
          </div>
          <div className="absolute top-[8%] right-[5%] opacity-10 hidden md:block">
            <Brain className="w-24 h-24 text-white" />
          </div>
          <div className="absolute bottom-[10%] right-[5%] opacity-10 hidden md:block">
            <BarChart3 className="w-20 h-20 text-white" />
          </div>

          {/* Floating Triangles */}
          {[...Array(15)].map((_, i) => (
            <Triangle
              key={i}
              className="absolute opacity-[0.05] text-white"
              style={{
                width: `${Math.random() * 40 + 30}px`,
                height: `${Math.random() * 40 + 30}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-3xl py-20">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            Start Your PLAB Journey with NextDoc AI
          </h1>

          <p className="text-lg sm:text-xl text-blue-100 mb-4 leading-relaxed">
            An AI-powered question bank and mentorship ecosystem built by NHS doctors.
            Experience PLAB-1 and PLAB-2 preparation designed for real NHS success.
          </p>

          <p className="text-base text-blue-200 mb-6">
            For the first <strong className="font-semibold text-white">1000 learners</strong>, PLAB-1 access is free.
            Mentor sessions remain a paid feature.
          </p>

          <p className="text-base font-semibold mb-10 text-white/90">
            Built by Doctors. For Doctors. AI-Powered.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button
              className="px-8 py-3 bg-white text-[#0A3B7A] font-semibold shadow-lg hover:bg-gray-100"
              onClick={() => handleLogin("/dashboard/resources/plab-qbank")}
            >
              Login to Access PLAB QBank
            </Button>
            <Button
              className="px-8 py-3 border-2 border-white text-[#0A3B7A] bg-white backdrop-blur-sm hover:bg-white/30 flex items-center gap-2"
              onClick={() => handleLogin("/dashboard/resources/plab2")}
            >
              <Download className="w-4 h-4" />
              Login to Download PLAB-2 Pack
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}



