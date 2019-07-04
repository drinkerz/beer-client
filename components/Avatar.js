import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

export default class Avatar extends React.Component{
  render(){
    const {img, size} = this.props;
    let avatarBox;
    if(img){
      if(size === 'xl'){
        avatarBox = <AvatarProfile background={img} size="82" />;
      }else if(size === 'l'){
        avatarBox = <AvatarProfile background={img} size="62" />;
      }else if(size === 'm'){
        avatarBox = <AvatarProfile background={img} size="42" />;
      }
    }else{
      if(size === 'xl'){
        avatarBox = <AvatarProfile size="82"><FontAwesomeIcon icon={faUser}/></AvatarProfile>
      }else if(size === 'l'){
        avatarBox = <AvatarProfile size="62"><FontAwesomeIcon icon={faUser}/></AvatarProfile>
      }else if(size === 'm'){
        avatarBox = <AvatarProfile size="42"><FontAwesomeIcon icon={faUser}/></AvatarProfile>
      }
      
    }
    
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
