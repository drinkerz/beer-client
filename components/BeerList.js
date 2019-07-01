import React from "react";
import { connect } from "react-redux";
import Card from './/card';

function BeerList({ data }) {
  return (
    <>
        {data.map((item) => (
            <Card key={item.id} content={item} />
        ))}
    </>
  );
}



const mapStateToProps = state => {
  return {
    data: state.beer.beerList
  };
};

export default connect(
  mapStateToProps,
  null
)(BeerList);
