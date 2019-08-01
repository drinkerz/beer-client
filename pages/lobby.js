import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const FullSizeDiv = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url('/static/images/bg/beer2.jpg');
  background-size: cover;
  font-family: 'Exo 2', sans-serif;

  &:after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #061627;
    opacity: 0.5;
  }
`;

const Body = styled.div`
  width: 100%;
  height: 100%;
  z-index: 2;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  z-index: 2;
`;

const HeaderLogo = styled.div`
  cursor: pointer;
  padding: 5px;
  border-radius: 5px;
  
  img {
    height: 24px;
    width: auto;
  }
`;

const HeaderMenu = styled.div`
  color: #fff;
  display: flex;
`;

const MenuButton = styled.a`
  margin: 0 1em;
  padding: 5px;
  border-radius: 5px;
  text-transform: uppercase;
  display: inline-block;

  &:after {
    z-index:2;
    display: block;
    content: '';
    border-bottom: solid 2px #eee;
    transform: scaleX(0);
    transform-origin: 0% 50%;
    transition: transform 250ms ease-in-out;
  }

  &:hover {
    background-color: #333;
    &:after {
      transform: scaleX(1);
    }
  }
`;

const Contents = styled.div`
  width: 100%;
  min-height: 860px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  z-index: 2;
`;

const Card = styled.div`
  width: 180px;
  height: 240px;
  border-radius: 7px;
  padding: 5px;
  background-color: #000;
  cursor: pointer;
  border: 1px solid white;
  margin: 1em;

  &:hover img {
    transform: rotate(15deg);
  }
`;

const CardImage = styled.div`
  height: 70%;
  text-align: center;
  background-image: url('/static/images/bg/beer_bg.jpg');
  background-size: cover;
  border-radius: 5px;

  img {
    height: 75%;
    margin-top: 20%;
  }
`;

const CardText = styled.div`
  height: 30%;
  color: white;
  padding: 10px;

  .beer_name {
    border-bottom: 1px solid #fff;
    margin-bottom: 5px;
  }

  .rating {
    color: yellow;
  }
`;

const Lobby = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  return (
    <FullSizeDiv>
      <Body>
        <Header>
          <HeaderLogo>
            <Link href="/">
              <img src="../static/images/logo.png" />
            </Link>
          </HeaderLogo>
          <HeaderMenu>
            <MenuButton href="/ratings">Ratings</MenuButton>
            <MenuButton href="/community">Community</MenuButton>
            <MenuButton href="/events">Events</MenuButton>
            <MenuButton href="/places">Places</MenuButton>
            <MenuButton href="/guide">Guide</MenuButton>
            {
              isLoggedIn ? (
                <Menubutton href="/logout">Logout</Menubutton>
              ) : (
                <>
                  <MenuButton href="/login">Login</MenuButton>
                  <MenuButton href="/register">Register</MenuButton>
                </>
              )
            }
          </HeaderMenu>
        </Header>
        <Contents>
          <Card>
            <CardImage>
              <img src="../static/images/beer/b_8_simg.png" />
            </CardImage>
            <CardText>
              <ul>
                <li className="beer_name">Gangseo Ale</li>
                <li>Rating <span className="rating">100</span></li>
              </ul>
            </CardText>
          </Card>
          <Card>
            <CardImage>
              <img src="../static/images/beer/b_9_simg.png" />
            </CardImage>
            <CardText>
              <ul>
                <li className="beer_name">Gangseo Ale</li>
                <li>Rating <span className="rating">100</span></li>
              </ul>
            </CardText>
          </Card>
          <Card>
            <CardImage>
              <img src="../static/images/beer/b_10_simg.png" />
            </CardImage>
            <CardText>
              <ul>
                <li className="beer_name">Gangseo Ale</li>
                <li>Rating <span className="rating">100</span></li>
              </ul>
            </CardText>
          </Card>
          <Card>
            <CardImage>
              <img src="../static/images/beer/b_12_simg.png" />
            </CardImage>
            <CardText>
              <ul>
                <li className="beer_name">Gangseo Ale</li>
                <li>Rating <span className="rating">100</span></li>
              </ul>
            </CardText>
          </Card>
          <Card>
            <CardImage>
              <img src="../static/images/beer/b_13_simg.png" />
            </CardImage>
            <CardText>
              <ul>
                <li className="beer_name">Gangseo Ale</li>
                <li>Rating <span className="rating">100</span></li>
              </ul>
            </CardText>
          </Card>
          <Card>
            <CardImage>
              <img src="../static/images/beer/b_14_simg.png" />
            </CardImage>
            <CardText>
              <ul>
                <li className="beer_name">Gangseo Ale</li>
                <li>Rating <span className="rating">100</span></li>
              </ul>
            </CardText>
          </Card>
          <Card>
            <CardImage>
              <img src="../static/images/beer/b_8_simg.png" />
            </CardImage>
            <CardText>
              <ul>
                <li className="beer_name">Gangseo Ale</li>
                <li>Rating <span className="rating">100</span></li>
              </ul>
            </CardText>
          </Card>
          <Card>
            <CardImage>
              <img src="../static/images/beer/b_9_simg.png" />
            </CardImage>
            <CardText>
              <ul>
                <li className="beer_name">Gangseo Ale</li>
                <li>Rating <span className="rating">100</span></li>
              </ul>
            </CardText>
          </Card>
          <Card>
            <CardImage>
              <img src="../static/images/beer/b_10_simg.png" />
            </CardImage>
            <CardText>
              <ul>
                <li className="beer_name">Gangseo Ale</li>
                <li>Rating <span className="rating">100</span></li>
              </ul>
            </CardText>
          </Card>
          <Card>
            <CardImage>
              <img src="../static/images/beer/b_12_simg.png" />
            </CardImage>
            <CardText>
              <ul>
                <li className="beer_name">Gangseo Ale</li>
                <li>Rating <span className="rating">100</span></li>
              </ul>
            </CardText>
          </Card>
          <Card>
            <CardImage>
              <img src="../static/images/beer/b_13_simg.png" />
            </CardImage>
            <CardText>
              <ul>
                <li className="beer_name">Gangseo Ale</li>
                <li>Rating <span className="rating">100</span></li>
              </ul>
            </CardText>
          </Card>
          <Card>
            <CardImage>
              <img src="../static/images/beer/b_14_simg.png" />
            </CardImage>
            <CardText>
              <ul>
                <li className="beer_name">Gangseo Ale</li>
                <li>Rating <span className="rating">100</span></li>
              </ul>
            </CardText>
          </Card>
        </Contents>
      </Body>
    </FullSizeDiv>
  );
};

export default Lobby;