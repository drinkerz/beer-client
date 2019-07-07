import React from "react";
import Card from './Card';
import SearchFrom from './searchForm';
import styled from 'styled-components'

class BeerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        filtered: [],
    }
  }
  
  componentWillReceiveProps(nextProps) {
    this.setState({
      filtered: this.props.beerList
    });
  }

  onchangeHandleSerach = (e) => {
    const {beerList} =this.props;
    let currentList = [];
    let newList = [];
    if(e.target.value !== ''){
      currentList = beerList;
      newList = currentList.filter(item => {
        const lc = item.name.toLowerCase();
        const filter = e.target.value.toLowerCase();
        return lc.includes(filter)
      })  
    }else {
      newList = this.props.beerList;
    }
    this.setState({
      filtered:newList
    });
  }

  render(){

    return (
      <>
        <SearchFrom onchange={this.onchangeHandleSerach} />
        <CardBox>
          {this.state.filtered.map((item) => (
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
