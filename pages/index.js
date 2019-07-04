import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux';

// components
import BeerList from '../components/BeerList';
import {EllipticalButton} from '../components/styled/Button';

// icon 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faFilter } from '@fortawesome/free-solid-svg-icons'

// This is our initialised `NextI18Next` instance
import { withNamespaces } from '../i18n'

// dispatch
import * as actions from '../actions/beer';

const defaultFilterTypes = ['PaleAle', 'Stout', 'Porter', 'Lager', 'Weizen', 'Fruit', 'Trappist', 'etc'];

class IndexPage extends React.Component {
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent //컴퓨터 사양??
    return {
      userAgent,
      namespacesRequired: ['common']
    }
  }

  componentDidMount() {
    this.props.fetchLoadBeerList();
    this.props.fetchLoadReviewList();
  }

  render() {
    const { beerList, t } = this.props;
    const renderFilterTypes = defaultFilterTypes.map((type, index) => (
      <li key={index}>{t(type)}<input type="checkbox" /></li>
    ));
    return (
      <FlexContainer direction="row">
        <BeerFilter>
          <h2><FontAwesomeIcon icon={faFilter} /> Filter by:</h2>
          <ul>
            {renderFilterTypes}
          </ul>
        </BeerFilter>
        <BeerContent>
          <span>
            <span>
              <FontAwesomeIcon icon={faSearch} />
            </span>
            <input placeholder="Search Beer and more..." />
            <EllipticalButton bgColor="#1f1f1f" fontColor="#fff">Sort by: Newest</EllipticalButton>
          </span>
          <CardBox>
            <BeerList beerList={beerList || []} />
          </CardBox>
        </BeerContent>
      </FlexContainer>
    )
  }
}

const FlexContainer = styled.div`
  display: flex;
  flex-flow: ${props => props.direction} wrap;
  justify-content: space-around;
  width: 100%;
  margin: 40px auto;

`

const CardBox = styled.div`
  display: flex;
  padding: 40px 0;
  flex-wrap: wrap;
`;

const BeerFilter = styled.div`
  padding: 0 40px;
  width: 170px;
  > ul {
    margin-top: 60px;
    list-style: none;
    padding: 0;
    > li {
      padding: 12px 0;
      font-size: 13px;
      position: relative;
      > input {
        position: absolute;
        right: 0;
        margin: 0;
      }
    }
  }
`;

const BeerContent = styled.div`
  padding: 0 40px;
  flex: 1;
  span {
    position: relative;
    > span {
      position: absolute;
      top: 0;
      left: 24px;
      > svg {
        fill: #333;
      }
    }
    > input {
      border-radius: 20px;
      background: #f8f8f8;
      border: 0;
      padding: 20px 20px 20px 56px;
      width: 60%;
      margin-top: 7px;
      &::placeholder {
        color: #b2b2b2;
      }
    }
    > button {
      float: right;
    }
  }
`;

const mapStateToProps = state => {
  return {
    beerList: state.beer.beerList,
    reviewList: state.beer.reviewList,
  };
};

const mapDispatchToProps = dispatch =>  {
  return {
    fetchLoadBeerList: () => dispatch(actions.fetchLoadBeerList()),
    fetchLoadReviewList: () => dispatch(actions.fetchLoadReviewList()),
  };
};

export default withNamespaces('beer')(connect(mapStateToProps, mapDispatchToProps)(IndexPage));