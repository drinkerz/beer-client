import React from 'react'
import styled from 'styled-components'
import Avatar from '../Avatar'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBeer } from '@fortawesome/free-solid-svg-icons'

export default class UserReviews extends React.Component{

  _getRenderReviews = (reviews) => {
    if (!reviews) {
      return null;
    }
    return reviews.map((review, index) => (
      <li key={index}>
        <ProfileBar>
          <Avatar nickname={review.reviewer.name} img={review.reviewer.img ? review.reviewer.img : '../../static/images/dummyprofile.jpg'} size="m" />
          <NickName>{review.reviewer.name}</NickName>
          <span>리뷰작성수 {review.reviewer.reviews.length}</span>
          <span><FontAwesomeIcon icon={faBeer} />{review.like}</span>
          <span><FontAwesomeIcon icon={faBeer} />{review.unlike}</span>
        </ProfileBar>
        <Comment>
          {review.text}
        </Comment>
      </li>
    ));
  }
  
  render(){
    const { reviews } = this.props;
    const renderReviews = this._getRenderReviews(reviews);
    return(
      <>
        <ReviewsContent>
          <ul>
            {renderReviews}
          </ul>
        </ReviewsContent>
      </>
    )
  }
}

const Comment = styled.div`
  font-size:14px;
  padding:18px 0;
  color:#777;
  border-bottom:1px solid #eee;
  margin-bottom:18px;
`

const ProfileBar = styled.div`
  display:flex;
  align-items:center;
  >span{
    font-weight:500;
    font-size:14px;
    margin-left:20px;
    color:#888;
  }
`

const NickName = styled.strong`
  margin-left:8px;
  margin-right:auto;
  font-weight:500;
  font-size:14px;
  color:#1f1f1f
`

const ReviewsContent = styled.div`
  padding:0 20px;
  margin-top:30px !important;
`