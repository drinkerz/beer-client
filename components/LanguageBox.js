import React from 'react'

export default function LanguageBox(props) {

  return (
    <select value={props.language} onChange={(e) => props.onChangeLanguage(e.target.value)}>
      <option value="en">🇺🇸</option>
      <option value="ko">🇰🇷</option>
    </select>
  )
}

LanguageBox.getInitialProps = async({ req }) => {
  const currentLanguage = req === null ? i18n.language : req.language
  console.log('init', currentLanguage);
}