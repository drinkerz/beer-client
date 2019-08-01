import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const styles = (function() {
  const width = 120;
  const height = width * 1.4;
  return {
    width, height,
    handleWidth: width / 3,
    handleHeight: height / 2,
    handleDiv: 2,
    beerWidth: width * 0.8,
    beerHeight: height * 0.8,
    bubbleSize: width / 6,
    bubbleSpeed: 600,
    bgColor: 'rgba(255,255,255,0.4)',
    beerColor: 'rgba(255,211,0,0.8)'
  };
})();

const Popup = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;


  width: 100%;
  height: 250px;
  padding: 20px;
  border-radius: 5px;
  position: fixed;
  top: 50%;
  margin-top: -125px;
  justify-content: center;
`;

const BeerMug = styled.div`
  position: relative;
  width: ${styles.width}px;
	height: ${styles.height}px;
	background-color: ${styles.bgColor};
  border-radius: ${styles.width / 20}px;
  

  #nprogress {
    pointer-events: none;
    transform: rotate(-90deg);
  }

  #nprogress .bar {
    background: ${styles.beerColor};
    border-right: 15px solid #fff;

    position: absolute;
    z-index: 1031;
    top: ${-styles.beerWidth / 2}px;
    left: ${-styles.beerWidth}px;

    width: ${styles.beerHeight}px;
    height: ${styles.beerWidth}px;
  }
  .nprogress-custom-parent {
    overflow: hidden;
  }
  
  .nprogress-custom-parent #nprogress .spinner,
  .nprogress-custom-parent #nprogress .bar {
    position: absolute;
  }
`;

const Handle = styled.div`
  position: absolute;
  top: ${styles.height - styles.handleHeight}px;
  right: 0;

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    width: ${styles.handleWidth}px;
    height: ${styles.handleHeight / 2}px;
  }

  &::before {
    bottom: 0;
    border-top: solid ${styles.handleWidth / styles.handleDiv}px ${styles.bgColor};
    border-right: solid ${styles.handleWidth / styles.handleDiv}px ${styles.bgColor};
    border-top-right-radius: ${styles.handleWidth}px;
  }
  
  &::after {
    top: 0;
    border-bottom: solid ${styles.handleWidth / styles.handleDiv}px ${styles.bgColor};
    border-right: solid ${styles.handleWidth / styles.handleDiv}px ${styles.bgColor};
    border-bottom-right-radius: ${styles.handleWidth}px;
  }
`;

const Beer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: ${(styles.width - styles.beerWidth) / 2}px;
  margin: auto;
  height: ${styles.beerHeight}px;
  width: ${styles.beerWidth}px;
  border-bottom-left-radius: ${styles.width / 30}px;
  border-bottom-right-radius: ${styles.width / 30}px;

  .bubble {
    position: absolute;
    left: 0;
    background-color: ${styles.bgColor};
    border-radius: 100%;

    &:nth-of-type(1){
      top: 20%;
      height: ${styles.bubbleSize}px;
      width: ${styles.bubbleSize}px;
      animation: ${styles.bubbleSpeed}ms bubbler ease-in infinite;
    }
    &:nth-of-type(2){
      top: 40%;
      height: ${styles.bubbleSize / 2}px;
      width: ${styles.bubbleSize / 2}px;
      animation: ${styles.bubbleSpeed * 2}ms bubbler ease-in infinite;
    }
    &:nth-of-type(3){
      top: 50%;
      height: ${styles.bubbleSize / 1.4}px;
      width: ${styles.bubbleSize / 1.4}px;
      animation: ${styles.bubbleSpeed * 1.7}ms bubbler ease-in infinite;
    }
    &:nth-of-type(4){
      top: 5%;
      height: ${styles.bubbleSize / 1.1}px;
      width: ${styles.bubbleSize / 1.1}px;
      animation: ${styles.bubbleSpeed * 2.4}ms bubbler ease-in infinite;
    }
    &:nth-of-type(5){
      top: 70%;
      height: ${styles.bubbleSize / 2.4}px;
      width: ${styles.bubbleSize / 2.4}px;
      animation: ${styles.bubbleSpeed * 2.6}ms bubbler ease-in infinite;
    }
    &:nth-of-type(6){
      top: 80%;
      height: ${styles.bubbleSize / 1.1}px;
      width: ${styles.bubbleSize / 1.1}px;
      animation: ${styles.bubbleSpeed * 1.3}ms bubbler ease-in infinite (${styles.bubbleSpeed} * 0.8);
    }
  }

  @keyframes bubbler {
    from {
      opacity: 1;
      left: 0;
    }
    to {
      opacity: 0;
      left: 90%;
    }
  }
`;

const Loading = () => {
  const [play, setPlay] = useState(null);
  const [bar, setBar] = useState(null);
  useEffect(() => {
    if (play === null) {
      if (bar) {
        let beerHeight = 0;
        bar.style.width = '0px';
        const p = setInterval(() => {
          if (beerHeight < styles.beerHeight) {
            beerHeight++;
            bar.style.width = beerHeight + 'px';
          } else {
            beerHeight = 0;
            bar.style.width = '0px';
          }
        }, 15);
        setPlay(p);
      } else {
        setBar(document.querySelector('.bar'));
      }
    }
  });
  return (
    <Popup bgColor="#222">
      <BeerMug width={150} bgColor="rgba(255,255,255,0.4)">
        <Handle width={150} height={150 * 1.4} />
        <Beer className="beer nprogress-custom-parent">
          <div id="nprogress">
            <div className="bar" role="bar">
              <div className="bubble"></div>
              <div className="bubble"></div>
              <div className="bubble"></div>
              <div className="bubble"></div>
              <div className="bubble"></div>
              <div className="bubble"></div>
            </div>
          </div>
        </Beer>
      </BeerMug>
    </Popup>
  )
};

export default Loading;