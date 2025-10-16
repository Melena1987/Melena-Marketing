import { es } from './es';
import { en } from './en';
import { ru } from './ru';
import type { TranslationSet } from '../../types';

interface AllTranslations {
  es: TranslationSet;
  en: TranslationSet;
  ru: TranslationSet;
}

export const translations: AllTranslations = {
  es,
  en,
  ru,
};
