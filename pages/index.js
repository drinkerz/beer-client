import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux';

// components
import BeerList from '../components/BeerList';

// icon 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faFilter } from '@fortawesome/free-solid-svg-icons'

// This is our initialised `NextI18Next` instance
import { withNamespaces, i18n } from '../i18n'

// dispatch
import { fetchLoadBeersList } from "../redux/beer";

class IndexPage extends React.Component {
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return {
      userAgent,
      namespacesRequired: ['common']
    }
  }

  componentDidMount() {
    console.log(i18n.language)
    this.props.fetchLoadBeersList();
  }

  render() {
    return (
      <FlexContainer direction="row">
        <BeerFilter>
          <h2><FontAwesomeIcon icon={faFilter} /> Filter by:</h2>
          <ul>
            <li>
              페일에일
              <input type="checkbox" />
            </li>
            <li>
              스카우터
              <input type="checkbox" />
            </li>
            <li>
              포터
              <input type="checkbox" />
            </li>
            <li>
              라거
              <input type="checkbox" />
            </li>
            <li>
              밀<input type="checkbox" />
            </li>
            <li>
              과일
              <input type="checkbox" />
            </li>
            <li>
              트라피스트
              <input type="checkbox" />
            </li>
            <li>
              기타
              <input type="checkbox" />
            </li>
          </ul>
        </BeerFilter>
        <BeerContent>
          <span>
            <span>
              <FontAwesomeIcon icon={faSearch} />
            </span>
            <input placeholder="Search Beer and more..." />
            <Button black>Sort by: Newest</Button>
          </span>
          <CardBox>
            <BeerList beerList={this.beerList}/>
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

export const Button = styled.button`
  line-height: 42px;
  padding: 0 20px;
  background: ${props => (props.black ? "#000" : "")};
  color: ${props => (props.black ? "#fff" : "")};
  text-align: center;
  border: 0;
  border-radius: 60px;
  font-size: 13px;
`;

const mapStateToProps = state => {
  return {
    beerList: state.beer.beerList,
  }
}

const mapDispatchToProps = dispatch =>  {
  return {
    fetchLoadBeersList: () => dispatch(fetchLoadBeersList())
  }
}

export default withNamespaces('common')(connect(mapStateToProps, mapDispatchToProps)(IndexPage));