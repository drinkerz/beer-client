import React from 'react'
import styled from 'styled-components'
import { i18n } from '../i18n'
import LanguageBox from './LanguageBox'
import Link from 'next/link'
import Modal from './styled/Modal'

//styled component
import {TextButton, EllipticalButton} from './styled/Button';

export default class Header extends React.Component {
  state = {
    loginModal: false
  }

  LoginModal = e =>{
    this.setState({
      loginModal: !this.state.loginModal
    })
  }

  render() {
    return (
      <>
      <Headerstyled>
        <ul>
          <li className="brand">
            <Link href="/"><a><img src="../static/images/logo.png" alt="Drinkerz logo" /></a></Link>
          </li>
          <li>
            <Link href="/"><a>Beer</a></Link>
          </li>
          <li>
            <Link href="/review"><a>Review</a></Link>
          </li>
          <li>
            <LanguageBox language={i18n.language} onChangeLanguage={(language) => { i18n.changeLanguage(language)}} />
          </li>
          <li>
            <EllipticalButton onClick={this.LoginModal} fontColor="#fff" bgColor="#1f1f1f">Login</EllipticalButton>
          </li>
        </ul>
      </Headerstyled>

      {this.state.loginModal && (
        <Modal modalSize="xs" titleAlign="center" contentAlign="center" modalClose={this.LoginModal} loginModalState={this.state.loginModal}
          title={<LoginModal src="../static/images/logo.png" alt="Drinkerz logo" />}
        >
          <div>마시는 문화 공유 플랫폼 드링커즈에 오신 것을 환영합니다.</div>
          <LoginBox>
            {/* <EllipticalButton bgColor="#2677f1" fontColor="#fff"><IconFacebook>페이스북 아이콘</IconFacebook>LOGIN WITH FACEBOOK</EllipticalButton> */}
            <EllipticalButton bgColor="#30c63b" fontColor="#fff"><IconNaver>네이버 아이콘</IconNaver>LOGIN WITH NAVER</EllipticalButton>
            <EllipticalButton bgColor="#fae100" fontColor="#1f1f1f"><IconKakao>카카오 아이콘</IconKakao>LOGIN WITH KAKAO</EllipticalButton>
          </LoginBox>
          <SignUpBox>
            <strong>
              <span>드링커즈 회원가입</span>
            </strong>
            {/* <EllipticalButton bgColor="#2677f1" fontColor="#fff"><IconFacebook>페이스북 아이콘</IconFacebook>SIGN UP WITH FACEBOOK</EllipticalButton> */}
            <EllipticalButton bgColor="#30c63b" fontColor="#fff"><IconNaver>네이버 아이콘</IconNaver>SIGN UP WITH NAVER</EllipticalButton>
            <EllipticalButton bgColor="#fae100" fontColor="#1f1f1f"><IconKakao>카카오 아이콘</IconKakao>SIGN UP WITH KAKAO</EllipticalButton>
          </SignUpBox>
        </Modal>
      )}
      </>
    )
  }
}

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
      margin-left:0;
      padding-left:0;
      > a > img{
        height: 24px;
        width: auto;
      }
    }
    > li {
      justify-content:center;
      list-style: none;
      padding-left:48px;
    }
  }
`;

const SignUpBox = styled.div`
  text-align:center;
  >strong{
    display:block;
    margin:30px 0 12px;
    position:relative;
    > span{
      padding:0 10px;
      background:#fff;
      font-weight:500;
    }
    &:after{
      z-index:-1;
      content:'';
      width:100%;
      height:1px;
      background:#000;
      display:block;
      position:absolute;
      top:50%;
      left:0;
    }
  }
  
  >button{
    margin-top:12px;
    width:100%;
    >span{
      display:inline-block;
      margin-right:8px;
      vertical-align:sub;
      width:20px;
      height:18px;
      background-image:url(../static/images/iconset.png);
      text-indent:-9999px;
      overflow:hidden;
    }
  }
`

const IconNaver = styled.span`
  background-position:1px 0px;
`

const IconFacebook = styled.span`
  background-position:-41px -1px;
`

const IconKakao = styled.span`
  background-position:-20px -1px;
`

const LoginBox = styled.div`
  margin-top:8px;
  >button{
    margin-top:12px;
    width:100%;
    >span{
      display:inline-block;
      margin-right:8px;
      vertical-align:sub;
      width:20px;
      height:18px;
      background-image:url(../static/images/iconset.png);
      text-indent:-9999px;
      overflow:hidden;
    }
  }
`

const LoginModal = styled.img`
  width:auto;
  height:24px;
`