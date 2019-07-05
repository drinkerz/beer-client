import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

export default class Avatar extends React.Component{

  _getAvatarSize(stringSize){
    switch(stringSize){
      case 'm':return 42;
      case 'l':return 62;
      case 'xl':return 82;
    }
  }

  _getAvatarProfile(img, size){
    return(
      <AvatarProfile size={size}>
        {img ? <FontAwesomeIcon icon={faUser}/> : null}
      </AvatarProfile>
    )
  }

  render(){
    const {img, size} = this.props;
    const avatarSize = this._getAvatarSize(size);
    const avatarBox = this._getAvatarProfile(img, avatarSize);
    
    return(
      <>
        {avatarBox}
      </>
    )
  }
}

const AvatarProfile =styled.div`
  width:${props => props.size}px;
  height:${props => props.size}px;
  background:${props => props.background ? `url(${props.background})` : '#e2e6ee'};
  font-size:${props => props.size/3}px;
  background-size:cover;
  display:flex;
  border-radius:50%;
  color:#1f1f1f;
  align-items:center;
  justify-content:center;
`
