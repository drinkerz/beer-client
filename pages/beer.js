import React from 'react';
import { withNamespaces } from 'react-i18next';
import styled from 'styled-components';

class BeerDetail extends React.Component {
  render(){
    return(
      <>
        <Beerdescription>
          <div>
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
          </div>
        </Beerdescription>
        <Aside>
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
        </Aside>
      </>
    )
  }
}

const Beerdescription = styled.div`
  width:calc(100% - 330px);
  > div {
    padding:60px 140px;
    position:relative;
    padding-right:400px;
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
  }
`

const Aside = styled.div`
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

export default withNamespaces('beerDetail')(BeerDetail)