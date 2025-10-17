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
          What is NextDoc UK?
        </h2>

        {/* Subheading */}
        <p className="text-gray-600 mb-8">
        NextDoc UK is an AI-powered education and career-readiness platform built by doctors for medical professionals. Join us for the upcoming podcast series featuring Dr. Pradeep Sabapathy, discussing real NHS journeys and career insights.
        <br/>🎙️ Podcast Series Coming Soon — Subscribe to our YouTube channel for updates
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
        <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
      

        {/* Mentor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mentors.slice(0, 3).map((mentor) => (
            <div
              key={mentor._id}
              className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 p-6 flex flex-col items-center"
            >
              {/* Avatar */}
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-gray-200 flex items-center justify-center bg-gray-100">
                {mentor.profilePicture ? (
                  <img
                    src={`${import.meta.env.VITE_API_BASE_URL}/${mentor.profilePicture}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <User className="w-12 h-12 text-gray-400" />
                )}
              </div>

              {/* Name and Role */}
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {mentor.fullName}
              </h3>
              <p className="text-sm text-gray-500 mb-2">
                {mentor.address} → {mentor.currentRole || mentor.designation}
              </p>
             <p className="text-sm text-gray-700 mb-4 font-medium">
  Experienced NHS Consultant<span className="mx-1">·</span>
  {mentor.designation || "Specialty Mentor"}
</p>


              {/* Quote */}
              <p className="text-sm italic text-gray-600 text-center">
                "{mentor.successStories ||
                  mentor.description ||
                  "Mentor experience and guidance available."}"
              </p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
