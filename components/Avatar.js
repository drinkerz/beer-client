import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

export default class Avatar extends React.Component{

  _getAvatarSize(stringSize){
  }

  _getAvatarProfile(img, avatarSize){
    return(
      <AvatarProfile avatarSize={avatarSize}>
        {img ? <FontAwesomeIcon icon={faUser}/> : null}
      </AvatarProfile>
    )
  }

  render(){
    const {img, avatarSize} = this.props;
    const avatarBox = this._getAvatarProfile(img, avatarSize);
    
    return(
      <>
        {avatarBox}
      </>
    )
  }
}

const AvatarProfile =styled.div`
  width:${props => {
    switch(props.avatarSize){
      case 'l':return 62;
      case 'xl':return 82;
      default : return 42;
    }
  }}px;
  height:${props => {
    switch(props.avatarSize){
      case 'l':return 62;
      case 'xl':return 82;
      default : return 42;
    }
  }}px;
  background:${props => props.background ? `url(${props.background})` : '#e2e6ee'};
  font-size:${props => props.size/3}px;
  background-size:cover;
  display:flex;
  border-radius:50%;
  color:#1f1f1f;
  align-items:center;
  justify-content:center;
`
