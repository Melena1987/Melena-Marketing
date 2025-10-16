import common from './common';
import home from './home';
import services from './services';
import blog from './blog';
import legal from './legal';
import energy from './energy';
import { TranslationSet } from '../../../types';

// We spread the imports into one object to match the original structure.
// We also cast it to the TranslationSet type to ensure we haven't missed any keys.
export const es = {
  ...common,
  ...home,
  ...services,
  ...blog,
  ...legal,
  ...energy,
} as unknown as TranslationSet;
