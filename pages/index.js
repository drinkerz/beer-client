import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux';

// components
import BeerList from '../components/BeerList';

// icon 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'

// This is our initialised `NextI18Next` instance
import { withNamespaces } from '../i18n'

// redux
import * as actions from '../actions/beer';

const defaultFilterTypes = ['PaleAle', 'Stout', 'Porter', 'Lager', 'Weizen', 'Fruit', 'Trappist', 'etc'];

class IndexPage extends React.Component {
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent //컴퓨터 브라우저 설치된 항목을 보여준다?
    return {
      userAgent,
      namespacesRequired: ['common']
    }
  }

  constructor(props) {
    super(props);
    this.state = {
        filtered: []
    }
  }

  componentDidMount() {
    this.props.fetchLoadBeerList();
    this.setState({
      filtered: this.props.beerList
    });
  }

  filterPosts = (searchFilter) => {
    let updatedList = this.props.beerList;
    console.log(updatedList);
    updatedList= updatedList.filter((item) => {
      return item.toLowerCase().search(
        searchFilter.toLowerCase()) !== -1;
    })
    console.log(updatedList);
  }

  render() {
    const { beerList, t } = this.props; //t는 i18n에서 지원해주는 
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
          <BeerList beerList={beerList || []} />
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
  @media (max-width: 1200px) {
    position:absolute;
    left:-100%;
    transition:all 0.5s;
  }
`;

const BeerContent = styled.div`
  padding: 0 40px;
  flex: 1;
`;

const mapStateToProps = state => {
  return {
    beerList: state.beer.beerList,
  };
};

const mapDispatchToProps = dispatch =>  {
  return {
    fetchLoadBeerList: () => dispatch(actions.fetchLoadBeerList()),
  };
};

export default withNamespaces('beer')(connect(mapStateToProps, mapDispatchToProps)(IndexPage));