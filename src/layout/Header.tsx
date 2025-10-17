import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ChevronDown,
  Menu,
  X,
  Search,
  Instagram,
  MessageCircle,
  Youtube,
  MessageSquare,
} from "lucide-react";
import { Link } from "react-router";
import { CartIcon } from "@/components/Cart";
import { EnhancedSearchModal } from "@/components/EnhancedSearchModal";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [user, setUser] = useState<{
    firstName: string;
    lastName: string;
  } | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  const getFullName = () => (user ? `${user.firstName} ${user.lastName}` : "");
  const getInitials = () => {
    if (!user) return "";
    return `${user.firstName[0] || ""}${user.lastName[0] || ""}`.toUpperCase();
  };

  // Keyboard shortcut for search (Cmd/Ctrl + K)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        setIsSearchOpen(true);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3 group"
            aria-label="NextDoc Global home"
          >
            <img
              src="/logo.jpg"
              alt="NextDoc Global logo"
              className="h-12 sm:h-14 w-auto transition-transform group-hover:scale-105"
            />
            {/* Desktop branding */}
            <div className="hidden md:flex flex-col leading-tight">
              <span className="text-lg font-semibold text-foreground">
                NextDoc UK 
              </span>
              <div className="flex flex-col text-xs text-muted-foreground">
                <span>Built by Doctors, For Doctors</span>
                <span className="font-medium text-primary">AI Powered</span>
              </div>
            </div>
            {/* Mobile branding - show company name on mobile but smaller */}
            <div className="md:hidden flex flex-col leading-tight">
              <span className="text-sm font-semibold text-foreground">
                NextDoc
              </span>
              <span className="text-xs text-primary font-medium">
                AI Powered
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <Link
              to="/"
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-foreground hover:text-primary transition-colors shrink-0"
            >
              About Us
            </Link>
            <Link
              to="/products"
              className="text-foreground hover:text-primary transition-colors"
            >
              Products
            </Link>

            {/* Exams Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors">
                <span>Exams</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border border-border shadow-lg z-50">
                <DropdownMenuItem asChild>
                  <Link to="/english" className="w-full cursor-pointer">
                   English Profiency
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/exams/plab" className="w-full cursor-pointer">
                    PLAB Exam Suite
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/exams/mrcp" className="w-full cursor-pointer">
                    MRCP (Principal Mentor)
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/exams/mrcs" className="w-full cursor-pointer">
                    MRCS (Principal Mentor)
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/exams/mrcog" className="w-full cursor-pointer">
                    MRCOG (Principal Mentor)
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/exams/mrcpch" className="w-full cursor-pointer">
                    MRCPCH (Principal Mentor)
                  </Link>
                </DropdownMenuItem>
                 <DropdownMenuItem asChild>
                  <Link to="/exams/royal-college" className="w-full cursor-pointer">
                    Royal College Exams
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/labs"
              className="text-foreground hover:text-primary transition-colors"
            >
              NextDocLabs
            </Link>
            <Link
              to="/mentors"
              className="text-foreground hover:text-primary transition-colors"
            >
              Mentor Insights
            </Link>
          </div>

          {/* Desktop CTA Buttons and Social */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Social Media Icons */}
            <div className="flex items-center space-x-2 mr-2">
              <a
                href="https://instagram.com/nextdocglobal"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors hover:scale-110 duration-200"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://t.me/nextdocglobal"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors hover:scale-110 duration-200"
                aria-label="Join our Telegram group"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com/@nextdocglobal"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500 transition-colors hover:scale-110 duration-200"
                aria-label="Subscribe to our YouTube channel"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://discord.gg/nextdocglobal"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#6C63FF] transition-colors hover:scale-110 duration-200"
                aria-label="Join our Discord community"
              >
                <MessageSquare className="h-5 w-5" />
              </a>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-2"
            >
              <Search className="h-4 w-4" />
              <span className="hidden lg:inline">Search</span>
              <span className="hidden lg:inline text-xs text-muted-foreground">
                ⌘K
              </span>
            </Button>
            {user ? (
              <Link
                to="/dashboard"
                className="flex items-center space-x-2 whitespace-nowrap"
              >
                <span className="text-sm font-medium">{getFullName()}</span>
              </Link>
            ) : (
              <Link to="/login">
                <Button variant="ghost">Login</Button>
              </Link>
            )}

            <CartIcon />
          </div>

          {/* Mobile menu button - ensure proper touch targets */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsSearchOpen(true)}
              className="min-w-[44px] min-h-[44px] p-2"
            >
              <Search className="h-5 w-5" />
            </Button>
            <CartIcon />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="min-w-[44px] min-h-[44px] p-2"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation - Better organized */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-3 pb-3 border-b border-border">
                <img
                  src="/lovable-uploads/3c8598c8-d4bf-45d9-aecf-8cbd962854bc.png"
                  alt="NextDoc Global logo"
                  className="h-10 w-auto"
                />
                <div className="flex flex-col leading-tight">
                  <span className="text-base font-semibold text-foreground">
                    NextDoc Global
                  </span>
                  <span className="text-xs text-primary font-medium">
                    AI Powered
                  </span>
                </div>
              </div>
              <Link
                to="/"
                className="text-foreground hover:text-primary transition-colors py-2 px-2 rounded-md hover:bg-muted/50 min-h-[44px] flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-foreground hover:text-primary transition-colors py-2 px-2 rounded-md hover:bg-muted/50 min-h-[44px] flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/products"
                className="text-foreground hover:text-primary transition-colors py-2 px-2 rounded-md hover:bg-muted/50 min-h-[44px] flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <div className="space-y-2">
                <p className="text-muted-foreground text-sm font-medium py-1">
                  Exams
                </p>
                <div className="pl-4 space-y-2">
                  <Link
                    to="/exams/ielts-oet"
                    className="block text-foreground hover:text-primary transition-colors py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    IELTS/OET
                  </Link>
                  <Link
                    to="/exams/plab"
                    className="block text-foreground hover:text-primary transition-colors py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    PLAB Exam Suite
                  </Link>
                  <Link
                    to="/exams/mrcp"
                    className="block text-foreground hover:text-primary transition-colors py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    MRCP
                  </Link>
                  <Link
                    to="/exams/mrcs"
                    className="block text-foreground hover:text-primary transition-colors py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    MRCS
                  </Link>
                  <Link
                    to="/exams/mrcog"
                    className="block text-foreground hover:text-primary transition-colors py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    MRCOG
                  </Link>
                  <Link
                    to="/exams/mrcpch"
                    className="block text-foreground hover:text-primary transition-colors py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    MRCPCH
                  </Link>
                </div>
              </div>
              <Link
                to="/research"
                className="text-foreground hover:text-primary transition-colors py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                White Paper / R&D
              </Link>
              <Link
                to="/mentors"
                className="text-foreground hover:text-primary transition-colors py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Mentor Insights
              </Link>
              {/* Mobile Social Media */}
              <div className="pt-3 border-t border-border">
                <p className="text-muted-foreground text-sm font-medium mb-3">
                  Connect
                </p>
                <div className="flex items-center justify-center space-x-6 mb-4">
                  <a
                    href="https://instagram.com/nextdocglobal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="Follow us on Instagram"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a
                    href="https://t.me/nextdocglobal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="Join our Telegram group"
                  >
                    <MessageCircle className="h-6 w-6" />
                  </a>
                  <a
                    href="https://youtube.com/@nextdocglobal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-500 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="Subscribe to our YouTube channel"
                  >
                    <Youtube className="h-6 w-6" />
                  </a>
                  <a
                    href="https://discord.gg/nextdocglobal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#6C63FF] transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="Join our Discord community"
                  >
                    <MessageSquare className="h-6 w-6" />
                  </a>
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                {user ? (
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium whitespace-nowrap">
                      {getFullName()}
                    </span>
                    <div className="h-8 w-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold">
                      {getInitials()}
                    </div>
                  </div>
                ) : (
                  <>
                    <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                      <Button variant="ghost" className="w-full justify-start">
                        Login
                      </Button>
                    </Link>
                    <Link
                      to="/get-started"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Button className="w-full">Get Started</Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Search Modal */}
      <EnhancedSearchModal open={isSearchOpen} onOpenChange={setIsSearchOpen} />
    </nav>
  );
}
