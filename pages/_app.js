import React from 'react'
import App, { Container } from 'next/app'
import { appWithTranslation } from '../i18n'
import '../static/styles/style.scss'
import Layout from '../components/Layout'
import styled,{createGlobalStyle} from 'styled-components'

//Redux 관련
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import rootReducer from "../redux";
import { fetchLoadBeersList } from "../redux/beer";

const store = createStore(rootReducer, applyMiddleware(thunk));
store.dispatch(fetchLoadBeersList());

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
        <GlobalStyle />
        <Container>
          <Layout t={this.props.t}>
            <Component {...pageProps} />
          </Layout>
        </Container>
      </Provider>
    );
  }
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

export default appWithTranslation(MyApp)