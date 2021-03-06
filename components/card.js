import React from "react";
import styled from "styled-components";
import Link from 'next/link';

export default class Card extends React.Component {
  _getBeerNameBlank(beerName){
    return beerName.toLowerCase().replace(/\s/g, "-");
  }

  render(){
    const {content} = this.props; 
    const beerName = this._getBeerNameBlank(`${content.name}`);

    return (
      <React.Fragment>
        <Link as={`/beer/${beerName}`} href={{pathname:'/beer', query:{name:content.name}}}><CardLink>
        {/* <Link href={{pathname:'/beer', query:{id:content.name}}}><CardLink> */}
            <CardBox background={content.color}>
                <h2>{content.name}</h2>
                <p>
                    <img src={content.img} />
                </p>
            </CardBox>
        </CardLink></Link>
      </React.Fragment>
    );
  }
};

const CardLink = styled.a`
  text-decoration:none;
  flex-basis: 20%;
  cursor:pointer;
`

const CardBox = styled.div`
  // display: flex;
  // flex-direction: column;
  // width: 300px;
  position: relative;
  > h2 {
    font-size: 20px;
    padding:20px;
    color:#000;
    tex-decolation:none;
  }
  > p {
    padding:0 20px 20px 0;
    > img {
      height: 200px;
      width: auto;
      transform: rotate(17deg);
    }
  }
  &:after {
    content: "";
    width: 100px;
    height: 100px;
    border-radius: 50%;
    position: absolute;
    top: 100px;
    left: 30px;
    background:${props => `${props.background}`};
    display: block;
    transition: all 0.5s;
    z-index: -1;
  }
  &:hover {
    &:after {
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      border-radius: 0;
    }
  }
`;

