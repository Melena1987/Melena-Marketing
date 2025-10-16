import common from './common';
import home from './home';
import services from './services';
import blog from './blog';
import legal from './legal';
import energy from './energy';
import { TranslationSet } from '../../../types';

export const en = {
  ...common,
  ...home,
  ...services,
  ...blog,
  ...legal,
  ...energy,
} as unknown as TranslationSet;
