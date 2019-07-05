const NextI18Next = require('next-i18next/dist/commonjs')

module.exports = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['ko'],
})

// next로 시작하면 아래 express는 위
// const NextI18NextInstance = new NextI18Next({
//   defaultLanguage: 'en',
//   otherLanguages: ['ko'],
// });

// export default NextI18NextInstance;

// export const {
//   appWithTranslation,
//   withNamespaces,
//   i18n
// } = NextI18NextInstance;