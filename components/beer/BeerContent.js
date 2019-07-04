import React from 'react'
import styled from 'styled-components'

export default class BeerContent extends React.Component{
  render(){
    return(
      <>
      <StyledBeerContent>
        <h2>
          <span>Ale</span>
          Seocho wheat
        </h2>
        <p className="description">
          서초위트는 가장 편하게 마실 수 있는 밀맥주로 밀맥주 특유의 바나나의 풍미를 느낄 수 있는 맥주이다
        </p>
        <ul>
          <li>
            <span>Style:</span>
            <p>밀맥주</p>
          </li>
          <li>
            <span>ABV:</span>
            <p>5.48%</p>
          </li>
          <li>
            <span>Brewing:</span>
            <p>세븐브로이</p>
          </li>
          <li className="tag">
            <span>Tag:</span>
            <p>#맛있옹</p>
            <p>#해운대</p>
            <p>#세븐브로이</p>
          </li>
        </ul>
        <span>
          <div><img src="../static/images/beer/b_12_simg.png" /></div>
        </span>
      </StyledBeerContent>
      </>
    );
  }
}

const StyledBeerContent = styled.div`
> span{
  position:absolute;
  top:150px;
  right:450px;
  >div{
    position:relative;
    &:after{
      content: "";
      width: 250px;
      height: 250px;
      border-radius: 50%;
      position: absolute;
      top: 100px;
      left: 50px;
      background: rgba(245,67,5,0.6);
      display: block;
      -webkit-transition: all 0.5s;
      transition: all 0.5s;
      z-index: -1;
    }
    >img{
      transform:rotate(17deg);
    }
  }
}
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
  max-width:380px;
  margin-bottom:80px;
}
>ul{
  padding:40px;
  border:1px solid #eee;
  max-width:380px;
  box-sizing:border-box;
  background:rgba(0,0,0,0.9);
  >li{
    margin-bottom:42px;
    >span{
      font-size:16px;
      color:rgba(255,255,255,0.7);
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