import { useMentors } from "@/hooks/useMentor";
import { User } from "lucide-react";
export default function NextDoc() {
  const { data: mentorsData } = useMentors(); // Assuming this returns your API data
  const mentors = mentorsData || [];

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Badge */}
        <span className="inline-flex items-center justify-center w-auto md:w-[300px] px-4 py-1.5 mb-6 text-[10px] md:text-xs font-medium text-white bg-blue-900 rounded-full shadow-sm tracking-wide">
          AI Powered · Mentor Reviewed Products
        </span>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          What is NextDoc Global?
        </h2>

        {/* Subheading */}
        <p className="text-gray-600 mb-8">
          Watch our comprehensive video to understand how NextDoc Global
          revolutionizes medical career transitions to the NHS.
        </p>

        {/* Video Embed */}
        <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-lg mb-16">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="NextDoc Global Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Success Stories Section */}
        <span className="inline-flex items-center justify-center w-auto md:w-[180px] px-4 py-1.5 mb-6 text-[10px] md:text-xs font-medium text-white bg-blue-900 rounded-full shadow-sm tracking-wide">
          Success Stories
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          From IMG to NHS Success
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Learn from the proven journeys of our mentor team who successfully
          transitioned to NHS leadership roles.
        </p>

        {/* Success Stories Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {mentors.slice(0, 3).map((mentor) => (
            <div
              key={mentor._id}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="relative w-24 h-24 mx-auto mb-6">
                  {/* Avatar */}
                  <div className="w-24 h-24 rounded-full border-2 border-gray-200 overflow-hidden flex items-center justify-center bg-gray-100">
                    {mentor.profilePicture ? (
                      <img
                        src={`${import.meta.env.VITE_API_BASE_URL}/${
                          mentor.profilePicture
                        }`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <User className="w-12 h-12 text-gray-400" />
                    )}
                  </div>
                  {/* Badge overlay */}
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                    {mentor.designation || "Mentor"}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {mentor.fullName}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {mentor.currentNhsTrust} – {mentor.currentRole}
                </p>

                {/* Stats */}
                <div className="space-y-3 text-left mb-5">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">PLAB Journey:</span>
                    <span className="px-3 py-1 text-sm font-semibold text-red-600 border border-red-500 rounded-full">
                      {mentor.clinicalExperienceYears || 0}+ years
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">
                      NHS Experience:
                    </span>
                    <span className="px-3 py-1 text-sm font-semibold text-blue-600 border border-blue-500 rounded-full">
                      {mentor.nhsExperienceYears || 0}+ years
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">
                      Mentees Guided:
                    </span>
                    <span className="px-3 py-1 text-sm font-semibold text-green-600 border border-green-500 rounded-full">
                      {mentor.mentees?.length || 0}+
                    </span>
                  </div>
                </div>

                {/* Quote */}
                <div className="p-4 rounded-lg">
                  <p className="text-sm text-black-100 italic text-left">
                    {mentor.successStories ||
                      mentor.description ||
                      "Mentor experience and guidance available."}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
