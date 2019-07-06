import React from 'react';
import styled from 'styled-components';
import { withNamespaces } from 'react-i18next';

// component
import BeerContent from '../components/beer/BeerContent'
import ReviewsRating from '../components/beer/ReviewsRating'
import UserReviews from '../components/beer/UserReviews'
import Aside from '../components/beer/Aside'

// redux
import { connect } from 'react-redux';
import * as actions from '../actions/beer';

class BeerDetail extends React.Component {

  async componentDidMount() {
    const name = window.location.href.split('beer/').pop();
    await this.props.getBeerByName(name);
  }

  _getBeerReviewLength = (reviews) => {
    return reviews ? reviews.length : 0
  }

  render() {
    const { beer } = this.props;
    const { score, reviews } = beer;
    const reviewLength = this._getBeerReviewLength(reviews);
    return (
      <div>
        <Beerdescription>
          <BeerContent beer={beer} />
          <ReviewBox>
            <ReviewsRating score={score} reviewLength={reviewLength} />
            <UserReviews reviews={reviews} />
          </ReviewBox>
        </Beerdescription>
        <Aside />
      </div>
    )
  }
}

const ReviewBox = styled.div`
  .tastingreview{
    margin-top:0;
  }
  >div{
    margin-top:100px;
    >h2{
      color:#1f1f1f;
      font-weight:900;
      font-size:24px;
      margin-bottom:42px;
      >span{
        margin-top:10px;
        margin-bottom:8px;
        font-size:14px;
        color:rgba(0,0,0,0.5);
        font-weight:400;
        display:block;
      }
    }
  }
`
const Beerdescription = styled.div`
  width:calc(100% - 330px);
  >div{
    padding:60px 140px;
    position:relative;
  }
`

const mapStateToProps = state => {
  return {
    beer: state.beer.beer
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getBeerByName: (name) => dispatch(actions.getBeerByName(name)),
  }
};

export default withNamespaces('beer')(connect(mapStateToProps, mapDispatchToProps)(BeerDetail));