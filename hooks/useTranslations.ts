import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/locales';

export const useTranslations = () => {
  const { language } = useLanguage();
  return translations[language];
};
