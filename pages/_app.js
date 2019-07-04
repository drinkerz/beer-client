import React from 'react';
import App, { Container } from 'next/app';
import { appWithTranslation } from '../i18n';
import '../static/styles/style.scss';
import { createGlobalStyle } from 'styled-components';
import Header from '../components/Header'
import Footer from '../components/footer'

//Redux 관련
import { Provider } from "react-redux";
import { HashRouter } from 'react-router-dom';
import configureStore from '../configureStore';

const store = configureStore();

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Provider store={store}>
        <HashRouter>
          <GlobalStyle />
            <Container t={this.props.t}>
              <Header />
                <Component {...pageProps} />
              <Footer />
          </Container>
        </HashRouter>
      </Provider>
    );
  }
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
  ul{
    list-style:none;
    padding:0;
    margin:0;
    >li{padding:0; margin:0;}
  }
`;

export default appWithTranslation(MyApp)