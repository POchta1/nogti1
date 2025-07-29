import { useLanguage } from '@/lib/language-context';
import { getTranslation } from '@/lib/translations';

export function useTranslation() {
  const { language } = useLanguage();
  
  const t = (key: string) => getTranslation(key, language);
  
  return { t, language };
}