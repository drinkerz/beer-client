import React from 'react';
import styled from 'styled-components';

//icon 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'

//filter 목록
const defaultFilterTypes = ['Ale', 'Lager', 'Lambic',];

export default class BeerFilter extends React.Component{
  render(){
    const {t, updateBeer} = this.props;
    const renderFilterTypes = defaultFilterTypes.map((type, index) => (
      <li key={index}>
        {/* {t(type)} */}
        <label htmlFor={t(type)}>{t(type)}</label>
        <input type="checkbox" onChange={updateBeer} name={t(type)} id={t(type)}/>
      </li>
    ));

    return(
      <StyledBeerFilter>
        <h2><FontAwesomeIcon icon={faFilter} /> Filter by:</h2>
        <ul>
          {renderFilterTypes}
        </ul>
      </StyledBeerFilter>
    )
  }
}

const StyledBeerFilter = styled.div`
  padding: 0 40px;
  width: 170px;
  > ul {
    margin-top: 60px;
    list-style: none;
    padding: 0;
    > li {
      padding: 12px 0;
      font-size: 13px;
      position: relative;
      > input {
        position: absolute;
        right: 0;
        margin: 0;
      }
    }
  }
  @media (max-width: 1200px) {
    position:absolute;
    left:-100%;
    transition:all 0.5s;
  }
`;