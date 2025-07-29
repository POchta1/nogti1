import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";
import { LanguageSelector } from "./language-selector";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

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
          <div className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-600 hover:text-yellow-600 font-medium transition-all duration-300 relative group hover:scale-105"
            >
              {t('home')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-elegant-gold group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-gray-600 hover:text-yellow-600 font-medium transition-all duration-300 relative group hover:scale-105"
            >
              {t('gallery')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-elegant-gold group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-600 hover:text-yellow-600 font-medium transition-all duration-300 relative group hover:scale-105"
            >
              {t('services')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-elegant-gold group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-black text-white px-6 py-3 rounded-full hover:bg-gradient-to-r hover:from-yellow-600 hover:to-yellow-700 hover:shadow-lg hover:shadow-yellow-500/30 hover:scale-105 transition-all duration-300 font-medium"
            >
              {t('contact')}
            </button>
            <div className="ml-4">
              <LanguageSelector />
            </div>
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
            <div className="mb-4 flex items-center justify-between">
              <span className="text-gray-600 font-medium">{t('changeLanguage')}</span>
              <LanguageSelector isMobile={true} />
            </div>
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left text-gray-600 hover:text-black font-medium py-2"
            >
              {t('home')}
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="block w-full text-left text-gray-600 hover:text-black font-medium py-2"
            >
              {t('gallery')}
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left text-gray-600 hover:text-black font-medium py-2"
            >
              {t('services')}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors font-medium mt-4"
            >
              {t('contact')}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
