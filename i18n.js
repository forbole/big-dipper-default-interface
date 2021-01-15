const NextI18Next = require('next-i18next').default;
const {
  localeSubpaths, use = [],
} = require('next/config').default().publicRuntimeConfig;

const path = require('path');

module.exports = new NextI18Next({
  otherLanguages: [],
  defaultLanguage: 'en',
  localeSubpaths,
  localePath: path.resolve('./public/locales'),
  strictMode: false,
  use,
});
