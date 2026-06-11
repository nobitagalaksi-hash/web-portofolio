import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Button } from "./ui/button";
import { LayoutDashboardIcon, MenuIcon, XIcon } from "lucide-react";
import { cn } from "./ui/utils";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: "tentang", label: "Tentang" },
    { id: "keterampilan", label: "Keterampilan" },
    { id: "portofolio", label: "Portofolio" },
    { id: "kontak", label: "Kontak" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-primary/20 shadow-lg shadow-primary/5"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Nama */}
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl font-semibold tracking-tight hover:text-primary transition-colors"
          >
            ARYA PUTRA RAHMAN DHIKA
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </button>
            ))}
            <Button variant="outline" size="sm" asChild>
              <Link to="/admin">
                <LayoutDashboardIcon />
                Admin
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <XIcon className="size-5" />
            ) : (
              <MenuIcon className="size-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-background py-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left px-4 py-2 text-sm hover:bg-accent rounded-md transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="px-4 pt-2">
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link to="/admin">
                  <LayoutDashboardIcon />
                  Admin
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
