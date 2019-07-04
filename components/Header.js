import React from 'react'
import styled from 'styled-components'
import { i18n } from '../i18n'
import LanguageBox from './LanguageBox'
import Link from 'next/link'

//styled component
import {TextButton, EllipticalButton} from './styled/Button';

export default class Header extends React.Component {
  render() {
    console.log(i18n);
    return (
      <Headerstyled>
        <ul>
          <li className="brand">
            <Link href="/"><a><img src="../static/images/logo.png" alt="Drinkerz logo" /></a></Link>
          </li>
          <li>
            <LanguageBox language={i18n.language} onChangeLanguage={(language) => { i18n.changeLanguage(language)}} />
          </li>
          <li>
            <TextButton fontColor="#000">Log in</TextButton>
          </li>
          <li>
            <EllipticalButton fontColor="#fff" bgColor="#1f1f1f">Sign Up</EllipticalButton>
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
      > a > img{
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
