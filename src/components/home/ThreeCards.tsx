import { useNavigate } from "react-router-dom";
import {
  
  
  Video,
  Users,
  Send,
  MessageSquare,
  Stethoscope,
  GraduationCap,
} from "lucide-react";

export default function ThreeCards() {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-white py-16 px-4">
      <hr/>
      <p className="text-center text-sm text-gray-600">
  NextDoc UK provides independent learning resources and career guidance. We are not affiliated with the GMC or NHS.
</p>
<br/><br/><br/>
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Complete NHS Integration Support
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
          From examination preparation to career placement, we provide
          end-to-end support for your NHS journey. Access learning tools,
          mentorship, and communities tailored to international graduates and
          UK trainees.
        </p>
      </div>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow-md border border-gray-100 p-7 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer flex flex-col h-full">
          <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-5">
            <Stethoscope className="w-7 h-7 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            PLAB & Postgraduate Exams
          </h3>
          <p className="text-gray-600 text-sm mb-5 flex-grow">
            Preparation for PLAB, MRCP, MRCS, and other Royal College exams with comprehensive resources and practice tests.
          </p>
          <button
            onClick={() => navigate("/exams/plab")}
            className="px-5 py-2.5 text-sm rounded-lg border border-gray-300 text-gray-800 font-medium hover:bg-gray-50 transition-colors w-full"
          >
            Learn More
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow-md border border-gray-100 p-7 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer flex flex-col h-full">
          <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-5">
            <GraduationCap className="w-7 h-7 text-blue-700" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            AI-Powered Learning
          </h3>
          <p className="text-gray-600 text-sm mb-5 flex-grow">
            Personalized AI tutoring, mock exams, and adaptive learning pathways tailored to your progress.
          </p>
          <div className="flex flex-col space-y-3 mt-auto">
            <button
              onClick={() => navigate("/products")}
              className="w-full bg-blue-900 text-white py-2.5 text-sm rounded-lg font-medium hover:bg-blue-800 transition-colors"
            >
              Explore Tools
            </button>
            <button
              onClick={() =>
                window.open("https://www.youtube.com/@nextdocglobal", "_blank")
              }
              className="w-full border border-red-300 text-red-600 py-2.5 text-sm rounded-lg font-medium hover:bg-red-50 transition-colors flex justify-center items-center"
            >
              <Video className="w-4 h-4 mr-2" />
              Podcast by Dr. Pradeep Sabapathy — Coming Soon
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl shadow-md border border-gray-100 p-7 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer flex flex-col h-full">
          <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-5">
            <Users className="w-7 h-7 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Expert Mentorship
          </h3>
          <p className="text-gray-600 text-sm mb-4 flex-grow">
            Guidance from NHS consultants and international graduates who have successfully navigated the system.
          </p>
          <button
            onClick={() => navigate("/mentors")}
            className="px-5 py-2.5 w-full text-sm rounded-lg border border-gray-300 text-gray-800 font-medium hover:bg-gray-50 transition-colors mb-4"
          >
            Find Mentors
          </button>
          
          <div className="pt-4 border-t border-gray-100 mt-auto">
            <p className="text-sm text-gray-500 font-medium mb-4">Community & Support</p>
            <div className="flex flex-col space-y-3">
              <button
                onClick={() =>
                  window.open("https://t.me/nextdocglobal", "_blank")
                }
                className="flex items-center justify-center border border-gray-300 py-2.5 text-sm rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Send className="w-4 h-4 mr-2 text-blue-500" />
                Telegram Group
              </button>
              <button
                onClick={() =>
                  window.open("https://discord.com/invite/nextdocglobal", "_blank")
                }
                className="flex items-center justify-center border border-purple-300 text-purple-600 py-2.5 text-sm rounded-lg hover:bg-purple-50 transition-colors"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Discord Sessions
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}