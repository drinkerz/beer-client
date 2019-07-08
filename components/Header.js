import React from 'react'
import styled from 'styled-components'
import { i18n } from '../i18n'
import LanguageBox from './LanguageBox'
import Link from 'next/link'
import Modal from './styled/Modal'

//styled component
import {TextButton, EllipticalButton} from './styled/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-solid-svg-icons'

export default class Header extends React.Component {
  render() {
    return (
      <>
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
      {/* <Modal modalSize="xs" title={<LoginModal src="../static/images/logo.png" alt="Drinkerz logo" />} titleAlign="center" contentAlign="center">
        <div>마시는 문화 공유 플랫폼 드링커즈에 오신 것을 환영합니다.</div>
        <LoginBox>
          <EllipticalButton bgColor="#30c63b" fontColor="#fff">
            <IconNaver>네이버 아이콘</IconNaver>
            LOGIN WITH NAVER
          </EllipticalButton>
        </LoginBox>
      </Modal> */}
      </>
    )
  }
}

const IconNaver = styled.span`
  display:inline-block;
  margin-right:8px;
  vertical-align:sub;
  background-position:-1px -3px;
  width:18px;
  height:18px;
  background:url(../static/images/iconset.png) no-repeat 0 0;
  text-indent:-9999px;
  overflow:hidden;
`

const LoginBox = styled.div`
  margin-top:20px;
  >button{
    width:100%;
  }
`

const LoginModal = styled.img`
  width:auto;
  height:24px;
`

const Headerstyled = styled.div`
  > ul {
    position:relative;
    z-index:2;
    background:#fff;
    box-shadow:0 1px 9px -5px rgba(0, 0, 0, 0.4);
    margin:0;
    align-items: center; 
    list-style: none;
    margin-left: auto;
    display: flex;
    padding:20px 40px;
    .brand{
      margin-right: auto;
      padding-left:0;
      > a > img{
        height: 24px;
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
