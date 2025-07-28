import { useState } from "react";
import { Menu, X } from "lucide-react";

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
    <nav className="bg-white/95 backdrop-blur-sm fixed w-full top-0 z-50 border-b border-blush">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="font-playfair text-2xl font-bold text-dusty-rose">
            Solo Miia
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-dusty-rose transition-colors"
            >
              Главная
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-gray-700 hover:text-dusty-rose transition-colors"
            >
              Галерея
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-dusty-rose transition-colors"
            >
              Услуги
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-dusty-rose transition-colors"
            >
              О мастере
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-dusty-rose transition-colors"
            >
              Контакты
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-blush">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-700 hover:text-dusty-rose transition-colors text-left"
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-gray-700 hover:text-dusty-rose transition-colors text-left"
              >
                Галерея
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-700 hover:text-dusty-rose transition-colors text-left"
              >
                Услуги
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-dusty-rose transition-colors text-left"
              >
                О мастере
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-dusty-rose transition-colors text-left"
              >
                Контакты
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
