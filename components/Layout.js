import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'

import Header from './Header'

function Layout(props) {

  const _onChangeLanguage = (language) => {
    console.log(language)
  }

  return (
    <React.Fragment>
      <Header />
      {props.children}
    </React.Fragment>
  )
}

export default Layout