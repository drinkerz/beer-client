import React from 'react'
import styled from 'styled-components'

export default class BeerContent extends React.Component{
  render() {
    const { beer } = this.props;

    return(
      <>
      <StyledBeerContent>
        <ImgDiv color={beer.color}>
          <img src={beer.img} />
        </ImgDiv>
        <ContentText>
          <h2>
            <span>{beer.type}</span>
            {beer.name}
          </h2>
          <p className="description">
            {beer.description}
          </p>
          <ul>
            <li>
              <span>Style:</span>
              <p>{beer.style}</p>
            </li>
            <li>
              <span>ABV:</span>
              <p>{beer.abv}%</p>
            </li>
            <li>
              <span>Brewing:</span>
              <p>{beer.brewed}</p>
            </li>
            <li className="tag">
              <span>Tag:</span>
              <p>#맛있옹</p>
              <p>#해운대</p>
              <p>#세븐브로이</p>
            </li>
          </ul>
        </ContentText>
      </StyledBeerContent>
      </>
    );
  }
}

const ImgDiv = styled.div`
  margin-right:auto;
  position:relative;
  &:after{
    content: "";
    width: 250px;
    height: 250px;
    border-radius: 50%;
    position: absolute;
    top: 100px;
    left: 50px;
    background: ${props => props.color};
    display: block;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    z-index: -1;
  }
  >img{
    transform:rotate(17deg);
  }
`

const ContentText = styled.div`
> h2{
  color:#1f1f1f;
  font-weight:900;
  font-size:32px;
  margin-bottom:42px;
  >span{
    margin-bottom:8px;
    font-size:16px;
    color:rgba(0,0,0,0.5);
    font-weight:400;
    display:block;
  }
}
>.description{
  line-height:1.5em;
  color:rgba(0,0,0,0.7);
  max-width:500px;
  margin-bottom:80px;
}
>ul{
  padding:40px;
  border:1px solid #eee;
  max-width:500px;
  box-sizing:border-box;
  background:rgba(25,25,25,1);
  >li{
    margin-bottom:42px;
    >span{
      font-size:16px;
      color:rgba(255,255,255,0.3);
      margin-bottom:8px;
      display:inline-block;
      width:90px;
    }
    >p{
      margin:0;
      display:inline-block;
      color:#fff;
    }
  }
  li.tag{
    margin-bottom:0;
    span{
      display:block;
    }
    >p{
      font-size:14px;
      display:inline-block;
      padding:8px 10px;
      border:1px solid #ccc;
      border-radius:6px;
      margin-right:10px;
      background:#fff;
      color:rgba(0,0,0,1);
    }
  }
}
`

const StyledBeerContent = styled.div`
  display:flex;
  align-items:center;
`