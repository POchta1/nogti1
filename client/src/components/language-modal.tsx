import { useState, useEffect } from 'react';
import { useLanguage } from '@/lib/language-context';
import type { Language } from '@/lib/translations';
import logoImage from '@assets/image_1753812012479.png';

const languages = [
  { code: 'de' as Language, name: 'Deutsch', flag: '🇩🇪', greeting: 'Wählen Sie Ihre Sprache' },
  { code: 'en' as Language, name: 'English', flag: '🇺🇸', greeting: 'Choose your language' },
  { code: 'uk' as Language, name: 'Українська', flag: '🇺🇦', greeting: 'Оберіть мову' },
];

export function LanguageModal() {
  const { setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show modal on every page load/refresh
    setTimeout(() => setIsOpen(true), 100); // Small delay for smoother appearance
  }, []);

  const handleLanguageSelect = (langCode: Language) => {
    setLanguage(langCode);
    localStorage.setItem('selectedLanguage', langCode);
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 transform animate-in zoom-in-90 fade-in duration-300 slide-in-from-bottom-4">
        <div className="text-center mb-6">
          <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
            <img 
              src={logoImage} 
              alt="Solo Miia Logo" 
              className="w-full h-full object-contain rounded-full"
            />
          </div>
        </div>
        
        <div className="space-y-3">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageSelect(lang.code)}
              className="w-full flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-200 border-2 border-transparent hover:border-yellow-500/20 hover:scale-[1.02] group"
            >
              <span className="text-2xl">{lang.flag}</span>
              <div className="flex-1 text-left">
                <div className="font-semibold text-gray-900 group-hover:text-yellow-600">
                  {lang.name}
                </div>
                <div className="text-sm text-gray-500">
                  {lang.greeting}
                </div>
              </div>
              <div className="w-2 h-2 rounded-full bg-transparent group-hover:bg-yellow-500 transition-colors"></div>
            </button>
          ))}
        </div>
        

      </div>
    </div>
  );
}