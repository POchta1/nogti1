import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-elegant-gold to-yellow-500 rounded-full flex items-center justify-center">
              <Sparkles className="text-white" size={20} />
            </div>
            <div>
              <div className="font-bold text-xl text-black">solo.miia
</div>
              <div className="text-xs text-gray-500 uppercase tracking-wide">Nail Studio</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-12">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-600 hover:text-black font-medium transition-colors relative group"
            >
              Главная
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-elegant-gold group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-gray-600 hover:text-black font-medium transition-colors relative group"
            >
              Портфолио
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-elegant-gold group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-600 hover:text-black font-medium transition-colors relative group"
            >
              Услуги
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-elegant-gold group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-600 hover:text-black font-medium transition-colors relative group"
            >
              О мастере
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-elegant-gold group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors font-medium"
            >
              Записаться
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-black"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-4 py-6 space-y-4">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left text-gray-600 hover:text-black font-medium py-2"
            >
              Главная
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="block w-full text-left text-gray-600 hover:text-black font-medium py-2"
            >
              Портфолио
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left text-gray-600 hover:text-black font-medium py-2"
            >
              Услуги
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left text-gray-600 hover:text-black font-medium py-2"
            >
              О мастере
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors font-medium mt-4"
            >
              Записаться
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
