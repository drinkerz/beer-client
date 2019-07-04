import React from 'react';
import { withNamespaces } from 'react-i18next';
import styled from 'styled-components';

// component
import BeerContent from '../components/beer/BeerContent'
import ReviewsRating from '../components/beer/ReviewsRating'
import UserReviews from '../components/beer/UserReviews'
import Aside from '../components/beer/Aside'

class BeerDetail extends React.Component {
  render(){
    return(
      <>
        <Beerdescription>
          <BeerContent />
          <ReviewBox>
            <ReviewsRating />
            <UserReviews />
          </ReviewBox>
        </Beerdescription>
        <Aside />
      </>
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

export default withNamespaces('beerDetail')(BeerDetail)