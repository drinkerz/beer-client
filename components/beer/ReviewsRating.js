import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faComments } from '@fortawesome/free-solid-svg-icons'

export default class ReviewsRating extends React.Component{
  render(){
    return(
      <>
      <div className="tastingreview">
        <h2>
          Tasting Review
          <span>맥주 시음기는 여러유저분들이 확인하는 평가 기준치가 되므로 리뷰 작성시 좋은이유, 싫은이유를 명확한 이유를 적어주세요.</span>
        </h2>
        <ReviewsRatingContent>
          <div>
            <strong>총 평점</strong>
            <div className="rantings">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <div>
              <RatingNumber total>4.6</RatingNumber>
              <RatingNumber>/5</RatingNumber>
            </div>
          </div>
          <div>
            <strong>리뷰수</strong>
            <div className="reviews">
              <FontAwesomeIcon icon={faComments} />
            </div>
            <div>
              <RatingNumber total>4,409</RatingNumber>
            </div>
          </div>
          <div>
            <strong>평점 비율</strong>
            <DrinkerzRating>
              <ul>
                <li>
                  <div>
                    <DrinkerzRatingBar rating="74.3"></DrinkerzRatingBar>
                  </div>
                  <span>Look</span>
                </li>
                <li>
                  <div>
                    <DrinkerzRatingBar rating="54.3"></DrinkerzRatingBar>
                  </div>
                  <span>Smell</span>
                </li>
                <li>
                  <div>
                    <DrinkerzRatingBar rating="34.3"></DrinkerzRatingBar>
                  </div>
                  <span>Taste</span>
                </li>
                <li>
                  <div>
                    <DrinkerzRatingBar rating="94.3"></DrinkerzRatingBar>
                  </div>
                  <span>Feel</span>
                </li>
                <li>
                  <div>
                    <DrinkerzRatingBar rating="44.3"></DrinkerzRatingBar>
                  </div>
                  <span>Price</span>
                </li>
                <li>
                  <div>
                    <DrinkerzRatingBar rating="74.3"></DrinkerzRatingBar>
                  </div>
                  <span>Overall</span>
                </li>
              </ul>
            </DrinkerzRating>
          </div>
        </ReviewsRatingContent>
      </div>
      <PhotoMovie>
        <h2>Photo & Movie 169건</h2>
        <ul>
          <li><img src="../static/images/dummyImg.jpg" alt="test"/></li>
          <li><img src="../static/images/dummyImg.jpg" alt="test"/></li>
          <li><img src="../static/images/dummyImg.jpg" alt="test"/></li>
          <li><img src="../static/images/dummyImg.jpg" alt="test"/></li>
          <li><img src="../static/images/dummyImg.jpg" alt="test"/></li>
          <li><img src="../static/images/dummyImg.jpg" alt="test"/></li>
          <li><img src="../static/images/dummyImg.jpg" alt="test"/></li>
          <li><img src="../static/images/dummyImg.jpg" alt="test"/></li>
          <li><img src="../static/images/dummyImg.jpg" alt="test"/></li>
        </ul>
      </PhotoMovie>
      </>
    )
  }
}

const PhotoMovie = styled.div`
  border-bottom:1px solid #000;
  padding-bottom:60px;
  >ul{
    display:flex;
    justify-content:space-between;
    flex:1;
    >li{
      width:120px;
      height:120px;
      overflow:hidden;
      >img{
        width:100%;
      }
    }
  }
`

const DrinkerzRating = styled.div`
  >ul{
    display:flex;
    >li{
      padding:0 20px;
      >span{
        margin-top:6px;
        display:block;
        color:rgba(0,0,0,0.8);
      }
    }
  }
`

const DrinkerzRatingBar = styled.span`
  width:10px;
  height:60px;
  display:inline-block;
  background:#e2e6ee;
  border-radius:10px;
  box-shadow: inset 0px 0px 2px 0px rgba(0, 0, 0, 0.3);
  position:relative;
  &:after{
    position:absolute;
    content:'';
    width:100%;
    height:${props => props.rating}%;
    background:#feb812;
    border-radius:10px;
    left:0;
    bottom:0;
  }
`

const RatingNumber = styled.span`
  font-size:32px;
  font-weight: ${props => (props.total ? "900" : "300")};
  color:${props => (props.total ? "#000" : "#bbb")}
  letter-spacing:-0.4px;
`

const ReviewsRatingContent = styled.div`
  background:#f5f4f5;
  padding:40px 0px;
  display:flex;
  justify-content:space-evenly;
  >div{
    text-align:center;
    >strong{
      font-size:16px;
      font-weight:500;
      margin-bottom:32px;
      display:block;
    }
    .rantings{
      margin-bottom:26px;
      >svg{
        color:#cdd0d4;
        width:28px;
        height:auto;
      }
    }
    .reviews{
      margin-bottom:20px;
      >svg{
        color:#cdd0d4;
        width:auto;
        height:30px;
      }
    }
  }
`