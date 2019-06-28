import React from "react";
import styled from "styled-components";

export default class Card extends React.Component {
    render(){
        const {content} = this.props; 
        return (
            <React.Fragment>
                <CardBox background={content.color}>
                    <h2>{content.title}</h2>
                    <p>
                        <img src={content.img} />
                    </p>
                </CardBox>
            </React.Fragment>
        );
    }
};

const CardBox = styled.div`
  width: 300px;
  position: relative;
  > h2 {
    margin-top: 10px;
    padding: 0 12px;
    font-size: 24px;
  }
  > p {
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

