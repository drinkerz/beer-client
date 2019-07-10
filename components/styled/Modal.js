import React from 'react'
import styled from 'styled-components'

export default class Modal extends React.Component{
  state = {
    fadeType: null
  }

  componentDidMount() {
    setTimeout(() => this.setState({ fadeType: "padeIn" }), 0);
  }

  render(){
    const {modalSize, titleAlign, title, contentAlign, modalClose} = this.props
    return(
      <>
      <ModalWrap className={this.state.fadeType}>
        <ModalBox modalSize={modalSize}>
          <ModalHead titleAlign={titleAlign}>
            {title}
          </ModalHead>
          <ModalContent contentAlign={contentAlign}>
            {this.props.children}
          </ModalContent>
        </ModalBox>
        <CloseBox onClick={modalClose} />
      </ModalWrap>
      </>
    )
  }
}

const CloseBox = styled.button`
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background:none;
  z-index:2;
`

const ModalContent = styled.div`
  text-align:${props => {
    switch(props.contentAlign){
      case "right" : return "right";
      case "center" : return "center";
      default : return "left";
    }
  }};
  font-size:14px;
  line-height:1.4em;
`

const ModalWrap = styled.div`
  position:fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  display:flex;
  align-items:center;
  justify-content:center;
  opacity:0;
  transition: opacity linear 0.15s;
  z-index:1000;
  width:100%;
  height:100%;
  background: rgba(0,0,0,0.5);
  overflow:hidden;
  &.padeIn{
    opacity:1;
    transition: opacity linear 0.15s;
  }
  &.padeOut{
    opacity:0;
    transition: opacity linear 0.15s;
  }
`

const ModalBox = styled.div`
  max-width:${props => {
    switch (props.modalSize){
      case "xl": return "1200";
      case "l" : return "1000";
      case "m" : return "800";
      case "xs" : return "300"
      default: return "480";
    }
  }}px;
  width:100%;
  padding:${props => {
    switch(props.modalSize){
      case "xl": return "120px";
      case "l": return "60px";
      case "xs": return "40px 30px";
      default: return "60px";
    }
  }};
  background:#fff;
  box-sizing:border-box;
  position:relative;
  z-index:3;
`

const ModalHead = styled.h2`
  margin-top:0;
  margin-bottom:24px;
  text-align:${props => {
    switch(props.titleAlign){
      case "center":return 'center';
      case "right":return 'right';
      default: return 'left';
    }
  }}
`