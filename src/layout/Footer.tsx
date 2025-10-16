import { Link } from "react-router-dom"; // Use 'react-router-dom' for <Link> in most React apps
import { Globe, Instagram, Twitter, Youtube, Linkedin, CreditCard } from "lucide-react"; // Added CreditCard icon for "Payments powered by Stripe"

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-6 md:py-12 grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              {/* Note: The logo image is assumed to be correct */}
              <img
                src="/logo.jpg"
                alt="NextDoc UK Logo"
                className="w-8 h-8"
              />
              <div className="flex flex-col">
                {/* Updated to NextDoc UK */}
                <span className="text-lg font-bold text-primary">
                  NextDoc UK
                </span>
                <span className="text-xs text-muted-foreground">
                  Built by Doctors, For Doctors. AI Powered
                </span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-4 max-w-md">
              Empowering healthcare professionals with AI powered tools, expert
              mentorship, and comprehensive exam preparation for NHS success.
            </p>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p className="font-medium text-foreground">Registered Office:</p>
              {/* Added a <span> for the address to better match the style */}
              <span>4 Queen's Road, Wimbledon, London-SW19 8ND</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <div className="space-y-3 text-sm">
              <Link
                to="/"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                About Us
              </Link>
              <Link
                to="/products"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Products
              </Link>
              <Link
                to="/mentors"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Mentor Insights
              </Link>
              {/* Updated to "NextDoc Labs" to match the screenshot content */}
              <Link
                to="/research" // Assuming this link is for the NextDoc Labs/research page
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                NextDoc Labs
              </Link>
            </div>
          </div>

          {/* Exams */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">
              Exam Preparation
            </h3>
            <div className="space-y-3 text-sm">
              <Link
                to="/exams/ielts-oet"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                IELTS/OET
              </Link>
              <Link
                to="/exams/plab"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                PLAB Exam Suite
              </Link>
              <Link
                to="/exams/mrcp"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                MRCP
              </Link>
              <Link
                to="/exams/mrcs"
               
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                MRCS
              </Link>
              <Link
                to="/exams/mrcog"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                MRCOG
              </Link>
              <Link
                to="/exams/mrcpch"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                MRCPCH
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-4 md:py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Left Section - Copyright and Legal */}
            <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:items-center md:space-x-6 text-sm text-muted-foreground">
              {/* First block: Copyright and company info */}
              <div className="flex flex-col space-y-1">
                <p>
                  © 2025 NextDoc UK | Built by Doctors, for Doctors
                </p>
                <p>
                  Operated by NextDoc Global Ltd (UK) • Company No. 16504223 • All rights reserved.
                </p>
                <p>
                  NextDoc Labs is the research arm of NextDoc Global Ltd.
                </p>
              </div>

              {/* Second block: Privacy and Terms */}
              <div className="flex items-center space-x-4 mt-2 md:mt-0">
                <Link
                  to="/privacy"
                  className="hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms"
                  className="hover:text-primary transition-colors"
                >
                  Terms of Service
                </Link>
              </div>
            </div>

            {/* Right Section - Compliance and Social Media Links */}
            <div className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:space-x-6 text-sm text-muted-foreground">
              {/* Compliance Badges */}
              <div className="flex flex-wrap justify-center md:justify-start items-center space-x-4 md:space-x-6">
                <div className="flex items-center space-x-2 whitespace-nowrap">
                  <Globe className="h-4 w-4" />
                  <span>NHS Aligned • ICO Registered • GDPR Compliant</span>
                </div>
                {/* Payments Powered by Stripe */}
                <div className="flex items-center space-x-2 whitespace-nowrap">
                  <CreditCard className="h-4 w-4" />
                  <span>Payments powered by Stripe</span>
                </div>
              </div>

              {/* Social Media Links - Kept consistent with original code's structure */}
              <div className="flex items-center space-x-4 mt-2 md:mt-0">
                <a
                  href="https://instagram.com/nextdocglobal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://twitter.com/nextdocglobal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                  aria-label="Follow us on Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="https://youtube.com/@nextdocglobal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                  aria-label="Subscribe to our YouTube channel"
                >
                  <Youtube className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/company/nextdocglobal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                  aria-label="Connect with us on LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;