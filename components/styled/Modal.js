import React from 'react'
import styled from 'styled-components'

export default function Modal(props){
  return(
    <>
    <ModalWrap>
      <ModalBox modalSize={props.modalSize}>
        <ModalHead titleAlign={props.titleAlign}>
          {props.title}
        </ModalHead>
        <ModalContent contentAlign={props.contentAlign}>
          {props.children}
        </ModalContent>
      </ModalBox>
    </ModalWrap>
    </>
  )
}

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
  opacity:1;
  transition: opacity linear 0.15s;
  z-index:1000;
  width:100%;
  height:100%;
  background: rgba(0,0,0,0.5);
  overflow:hidden;
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
`

const ModalHead = styled.h2`
  margin-top:0;
  margin-bottom:40px;
  text-align:${props => {
    switch(props.titleAlign){
      case "center":return 'center';
      case "right":return 'right';
      default: return 'left';
    }
  }}
`