import React from "react";
import Card from './Card';

function BeerList(props) {
  return (
    <>
      {props.beerList.map((item) => (
        <Card key={item.id} content={item} />
      ))}
    </>
  );
}

export default BeerList;
