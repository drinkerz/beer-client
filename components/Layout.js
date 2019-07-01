import React from 'react'
import styled from 'styled-components'

import Header from './Header'
import Footer from './Footer'

function Layout(props) {

  const _onChangeLanguage = (language) => {
    console.log(language)
  }

  return (
    <React.Fragment>
      <Header />
      {props.children}
      <Footer />
    </React.Fragment>
  )
}

export default Layout