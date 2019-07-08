import React from "react";
import Card from './Card';
import SearchFrom from './searchForm';
import styled from 'styled-components'

class BeerList extends React.Component {
  render(){
    const {onchangeHandleSerach, filtered} = this.props
    return (
      <>
        <SearchFrom onchange={onchangeHandleSerach} />
        <CardBox>
          {filtered.map((item) => (
            <Card key={item.id} content={item} />
          ))}
        </CardBox>
      </>
    );
  }
}

const CardBox = styled.div`
  display: flex;
  padding: 40px 0;
  flex-wrap: wrap;
  @media (max-width: 710px) {
    justify-content:space-evenly;
  }
`;

export default BeerList;
