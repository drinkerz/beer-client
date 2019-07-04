import React from 'react'
import styled from 'styled-components'

export default class Aside extends React.Component{
  render(){
    return(
      <>
      <StyledAside>
        <div className='blind'>
          <button className="active">추천맥주</button>
          <button>Top10</button>
        </div>
        <ul>
          <li className="recommendation">
            <h2>맥주 추천</h2>
            <p>드링커즈에서 빅데이터를 통해 비슷한 맥주를 추천해 드립니다.</p>
          </li>
          <li>
            <img src="../static/images/beer/b_12_simg.png" />
            <dl>
              <dt>Seocho wheat</dt>
              <dd>Ale Beer & coke</dd>
            </dl>
          </li>
          <li>
            <img src="../static/images/beer/b_12_simg.png" />
            <dl>
              <dt>Seocho wheat</dt>
              <dd>Ale Beer & coke</dd>
            </dl>
          </li>
          <li>
            <img src="../static/images/beer/b_12_simg.png" />
            <dl>
              <dt>Seocho wheat</dt>
              <dd>Ale Beer & coke</dd>
            </dl>
          </li>
          <li>
            <img src="../static/images/beer/b_12_simg.png" />
            <dl>
              <dt>Seocho wheat</dt>
              <dd>Ale Beer & coke</dd>
            </dl>
          </li>
          <li>
            <img src="../static/images/beer/b_12_simg.png" />
            <dl>
              <dt>Seocho wheat</dt>
              <dd>Ale Beer & coke</dd>
            </dl>
          </li>
          <li>
            <img src="../static/images/beer/b_12_simg.png" />
            <dl>
              <dt>Seocho wheat</dt>
              <dd>Ale Beer & coke</dd>
            </dl>
          </li>
          <li>
            <img src="../static/images/beer/b_12_simg.png" />
            <dl>
              <dt>Seocho wheat</dt>
              <dd>Ale Beer & coke</dd>
            </dl>
          </li>
        </ul>
      </StyledAside>
      </>
    )
  }
}

const StyledAside = styled.div`
  width:330px;
  height:100%;
  background:rgba(0,0,0,0.9);
  position:fixed;
  right:0;
  top:0;
  z-index:0;
  > .blind{
    height:122px;
    border-bottom:1px solid #1f1f1f;
    display:flex;
    >button{
      width:50%;
      border:0;
      background:#000;
      color:#fff;
      border-left:1px solid #1f1f1f;
      transition: all 0.5s;
    }
    .active{
      border-bottom:1px solid #fff;
    }
    >button:hover{
      border-bottom:1px solid #fff;
      transition:all 0.5s;
    }
  }
  >ul{
    padding:0 42px 0;
    >li{
      margin-top:42px;
      position:relative;
      h2{
        color:#fff;
      }
      p{
        color:rgba(255,255,255,0.3);
        font-size:14px;
        font-weight:300;
        padding-bottom:20px;
      }
      >img{
        height:62px;
        width:auto;
        position:absolute;
        top:-6px;
        left:-6px;
      }
      dl{
        padding-left:42px;
      }
      dl > dt{
        color:#fff;
        padding:0;
        font-size:18px;
        font-weight:700;
      }
      dl > dd{
        color:rgba(255,255,255,0.3);
        padding:8px 0 ;
        margin:0;
        font-size:14px;
        font-weight:300;
      }
    }
  }
`