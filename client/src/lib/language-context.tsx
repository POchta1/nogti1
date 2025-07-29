import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { Language } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    // Check localStorage first
    const saved = localStorage.getItem('selectedLanguage') as Language;
    if (saved && ['de', 'en', 'uk'].includes(saved)) {
      return saved;
    }
    
    // Detect browser language
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('de')) return 'de';
    if (browserLang.startsWith('uk')) return 'uk';
    if (browserLang.startsWith('ru')) return 'uk'; // Russian speakers might prefer Ukrainian
    return 'en'; // Default to English
  });

  useEffect(() => {
    localStorage.setItem('selectedLanguage', language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}