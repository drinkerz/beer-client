import React from 'react';
import styled from 'styled-components'

import {EllipticalButton} from '../components/styled/Button';
// icon 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default class SearchFrom extends React.Component{
  render(){
    const {onchange, value} = this.props;
    return(
      <>
      <SearchBox>
        <span>
          <FontAwesomeIcon icon={faSearch} />
        </span>
        <input onChange={onchange} value={value} placeholder="Search Beer and more..." />      
        <EllipticalButton bgColor="#1f1f1f" fontColor="#fff">Sort by: Newest</EllipticalButton>
      </SearchBox>
      </>
    )
  }
}

const SearchBox = styled.div`
  position: relative;
  align-items:center;
  > span {
    position: absolute;
    top: 19px;
    left: 24px;
    > svg {
      fill: #333;
    }
  }
  > input {
    border-radius: 20px;
    background: #f8f8f8;
    border: 0;
    padding: 20px 20px 20px 56px;
    width: 60%;
    &::placeholder {
      color: #b2b2b2;
    }
  }
  > button {
    float:right;
  }
@media (max-width: 710px) {
  > button{display:none;}
  > input{
    width:100%;
    box-sizing:border-box;
  }
}
`