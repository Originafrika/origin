import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Languages } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLanguage } from "@/contexts/LanguageContext";
import logoLight from "@/assets/logo-light.jpg";
import logoDark from "@/assets/logo-dark.jpg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  
  const navLinks = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.about"), path: "/about" },
    { name: t("nav.projects"), path: "/projects" },
    { name: t("nav.blog"), path: "/blog" },
    { name: t("nav.contact"), path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8">
            <img 
              src={logoLight} 
              alt="ORIGIN - Laboratoire IA indépendant africain" 
              className="w-full h-full object-contain dark:hidden"
            />
            <img 
              src={logoDark} 
              alt="ORIGIN - Laboratoire IA indépendant africain" 
              className="w-full h-full object-contain hidden dark:block"
            />
          </div>
          <span className="font-bold text-lg">ORIGIN</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className="text-sm font-medium transition-colors hover:text-primary"
              activeClassName="text-primary"
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Language Switcher and CTA Button */}
        <div className="hidden md:flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="sm" 
            className="flex items-center gap-2"
            onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
          >
            <Languages className="h-4 w-4" />
            <span>{language === "fr" ? "EN" : "FR"}</span>
          </Button>
          <Button size="sm">{t("nav.join")}</Button>
        </div>

        {/* Mobile Menu Button */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="md:hidden px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
              size="sm"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col h-full">
              {/* Mobile Header */}
              <div className="flex items-center justify-between border-b py-4">
                <Link to="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                  <div className="w-8 h-8">
                    <img 
                      src={logoLight} 
                      alt="ORIGIN - Laboratoire IA indépendant africain" 
                      className="w-full h-full object-contain dark:hidden"
                    />
                    <img 
                      src={logoDark} 
                      alt="ORIGIN - Laboratoire IA indépendant africain" 
                      className="w-full h-full object-contain hidden dark:block"
                    />
                  </div>
                  <span className="font-bold text-lg">ORIGIN</span>
                </Link>
                <Button
                  variant="ghost"
                  className="h-8 w-8 p-0"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close</span>
                </Button>
              </div>

              {/* Mobile Navigation */}
              <nav className="flex flex-col space-y-4 py-6 flex-grow">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className="text-lg font-medium transition-colors hover:text-primary py-2"
                    activeClassName="text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </NavLink>
                ))}
              </nav>

              {/* Language Switcher and Mobile CTA */}
              <div className="py-6 border-t space-y-4">
                <Button 
                  variant="outline" 
                  className="w-full flex items-center gap-2"
                  onClick={() => {
                    setLanguage(language === "fr" ? "en" : "fr");
                    setIsOpen(false);
                  }}
                >
                  <Languages className="h-4 w-4" />
                  <span>{language === "fr" ? "Switch to English" : "Passer en français"}</span>
                </Button>
                <Button className="w-full" onClick={() => setIsOpen(false)}>
                  {t("nav.join")}
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;