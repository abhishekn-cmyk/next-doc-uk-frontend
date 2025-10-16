export default function Early() {
  return (
    <div className="bg-white-100 py-16">
      <div className="max-w-3xl mx-auto p-6 sm:p-10 bg-gray-50 border border-gray-200 rounded-xl shadow-md">
        {/* Badge */}
        <div className="text-center mb-4">
  <span className="inline-block  text-indigo text-sm font-semibold px-3 py-1 rounded-full shadow-sm">
    🎉 Early Access Offer
  </span>
</div>


        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Limited Period - First 1000 Users Only
        </h3>

        {/* Description */}
        <p className="text-gray-700 mb-6">
          For a limited period, the first 1000 users will enjoy full PLAB-1 access for free. Mentor analysis and feedback features remain part of the paid plans.
        </p>

        {/* Button */}
        <div className="text-center">
          <button className="bg-indigo-700 text-white font-semibold px-6 py-3 rounded-md shadow hover:bg-indigo-800 transition-colors duration-300">
            Join Early Access Login
          </button>
        </div>
      </div>
    </div>
  );
}
