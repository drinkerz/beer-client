import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { EventEmitter } from 'events';

import Loading from '../components/Loading';
const FullSizeDiv = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url('/static/images/bg/beer1.jpg');
  background-size: cover;
  font-family: 'Exo 2', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NeonTitle = styled.h1`
  font-size: 48px;
  font-weight: 200;
  font-style: italic;
  color: #fff;
  padding: 15px 25px;
  border: 3px solid #fff;
  border-radius: 7px;
  text-transform: uppercase;
  animation: flicker 1.5s infinite alternate;
  cursor: pointer;
  user-select: none;
  
  &::-moz-selection {
    background-color: #08f;
    color: #f40;
  }
  
  &::selection {
    background-color: #08f;
    color: #f40;
  }
  
  &:focus {
    outline: none;
  }

  /* Animate neon flicker */
  @keyframes flicker {
    0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
      text-shadow:
        -0.2rem -0.2rem 1rem #fff,
        0.2rem 0.2rem 1rem #fff,
        0 0 2rem #f40,
        0 0 4rem #f40,
        0 0 6rem #f40,
        0 0 8rem #f40,
        0 0 10rem #f40;
      box-shadow:
        0 0 .5rem #fff,
        inset 0 0 .5rem #fff,
        0 0 2rem #08f,
        inset 0 0 2rem #08f,
        0 0 4rem #08f,
        inset 0 0 4rem #08f;        
    }
    20%, 24%, 55% {        
      text-shadow: none;
      box-shadow: none;
    }    
  }
`;

const AdultPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => setIsLoading(false), 2500);
    }
  });

  const enter = () => {
    console.log('enter');
  }

  return isLoading ? (
    <Loading />
  ) : (
    <FullSizeDiv>
      <NeonTitle onClick={enter}>Save Water, Drink Beer!</NeonTitle>
    </FullSizeDiv>
  );
}

export default AdultPage;