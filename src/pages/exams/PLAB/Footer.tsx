export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 flex flex-col gap-6">
        {/* About Section */}
        <div>
          <p className="text-sm mb-4">
            PLAB is a GMC examination. NextDoc UK is an independent educational platform offering AI-powered learning tools for IMGs. We make no pass-rate or placement claims. Mentor analysis is a paid feature.
          </p>
        </div>

        {/* Social / Info Section */}
        <div className="flex flex-col gap-2 text-sm">
          {/* Instagram */}
          <div className="flex items-center gap-2">
            <span role="img" aria-label="Instagram">📸</span>
            <span>Instagram – Daily 5-Question Quiz</span>
          </div>

          {/* Telegram */}
          <div className="flex items-center gap-2">
            <span role="img" aria-label="Telegram">✈️</span>
            <span>Telegram – Peer Learning Group</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

