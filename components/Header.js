import React from 'react'
import styled from 'styled-components'

import { i18n } from '../i18n'

import LanguageBox from './LanguageBox'

export default class Header extends React.Component {
  render() {
    return (
      <Headerstyled>
        <ul>
          <li className="brand">
            <img src="../static/images/logo.png" alt="Drinkerz logo" />
          </li>
          <li>
            <LanguageBox language={i18n.language} onChangeLanguage={(language) => i18n.changeLanguage(language)} />
          </li>
          <li>
            <Button>Log in</Button>
          </li>
          <li>
            <Button black>Sign Up</Button>
          </li>
        </ul>
      </Headerstyled>
    )
  }
}

const Headerstyled = styled.div`
  > ul {
    background:#fff;
    box-shadow:0 1px 9px -5px rgba(0, 0, 0, 0.4);
    margin:0;
    align-items: center; 
    list-style: none;
    margin-left: auto;
    display: flex;
    padding:40px;
    .brand{
      margin-right: auto;
      padding-left:0;
      > img {
        height: 30px
        width: auto;
      }
    }
    > li {
      justify-content:center;
      list-style: none;
      padding-left:12px;
    }
  }
`;

export const Button = styled.button`
  line-height: 42px;
  padding: 0 20px;
  background: ${props => (props.black ? "#000" : "")};
  color: ${props => (props.black ? "#fff" : "")};
  text-align: center;
  border: 0;
  border-radius: 60px;
  font-size: 13px;
`;