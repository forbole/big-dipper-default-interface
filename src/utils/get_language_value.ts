export const languages = {
  en: 'English',
};

const getLanguageValue = (key:string) => {
  return languages[key] ?? '';
};

export default getLanguageValue;
