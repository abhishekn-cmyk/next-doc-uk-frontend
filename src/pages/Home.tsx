import Head from "@/layout/Head";
import HomeHero from "@/components/home/HomeHero";
import CookieConsent from "@/components/CookieConsent";
// import AIConsentPopup from "@/components/AIConsentPopup";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Head
        title="NextDoc - NHS Career Success Platform for International Doctors"
        description="AI-powered tools for NHS career success. PLAB preparation, CV optimization, interview simulation, and career guidance for international medical professionals transitioning to the UK healthcare system."
        keywords="NHS careers, PLAB preparation, medical CV, NHS jobs, international doctors, UK medical training, NHS interview preparation, medical career guidance, NextDoc"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "NextDoc Global",
          url: "https://nextdocglobal.com",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://nextdocglobal.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }}
      />

      <HomeHero />
      <CookieConsent />
      {/* <AIConsentPopup /> */}
    </div>
  );
}
