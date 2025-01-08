import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../i18n/en/en.json';
import vi from '../i18n/vi/vi.json';

export const defaultNS = 'en';

i18next.use(initReactI18next).init({
  lng: 'en',
  debug: true,
  resources: {
    en: {
      en,
      vi,
    },
  },
  defaultNS,
});
