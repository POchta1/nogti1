import { useLanguage } from '@/lib/language-context';
import type { Language } from '@/lib/translations';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const languages = [
  { code: 'de' as Language, name: 'Deutsch', flag: '🇩🇪' },
  { code: 'en' as Language, name: 'English', flag: '🇺🇸' },
  { code: 'uk' as Language, name: 'Українська', flag: '🇺🇦' },
];

export function LanguageSelector({ isMobile = false }: { isMobile?: boolean }) {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  
  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors border ${
          isMobile 
            ? 'bg-gray-100 hover:bg-gray-200 border-gray-200' 
            : 'bg-white/10 backdrop-blur-sm hover:bg-white/20 border-white/20'
        }`}
      >
        <span className="text-lg">{currentLanguage?.flag}</span>
        <span className={`text-sm font-medium ${isMobile ? 'text-gray-700' : 'text-white'}`}>
          {currentLanguage?.code.toUpperCase()}
        </span>
        <ChevronDown size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''} ${
          isMobile ? 'text-gray-700' : 'text-white'
        }`} />
      </button>
      
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 min-w-[150px] z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors ${
                language === lang.code ? 'bg-yellow-50 border-l-4 border-yellow-500' : ''
              } ${lang.code === languages[0].code ? 'rounded-t-lg' : ''} ${
                lang.code === languages[languages.length - 1].code ? 'rounded-b-lg' : ''
              }`}
            >
              <span className="text-lg">{lang.flag}</span>
              <div>
                <div className="font-medium text-gray-900">{lang.name}</div>
                <div className="text-xs text-gray-500">{lang.code.toUpperCase()}</div>
              </div>
            </button>
          ))}
        </div>
      )}
      
      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}