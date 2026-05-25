import * as Localization from 'expo-localization';
import translations from '../constants/translations';

const useTranslation = () => {
  const locale = Localization.getLocales()[0]?.languageTag || 'en';
  const lang = locale.startsWith('it') ? 'it' : 'en';
  const t = translations[lang];
  return { t, lang };
};

export default useTranslation;