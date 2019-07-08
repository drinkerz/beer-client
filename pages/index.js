import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux';

// components
import BeerList from '../components/BeerList';
import BeerFilter from '../components/main/beerFilter';
// This is our initialised `NextI18Next` instance
import { withNamespaces } from '../i18n'
// redux
import * as actions from '../actions/beer';

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
        filtered: [],
        checkFiltered: []
    }
  }

  componentDidMount() {
    this.props.fetchLoadBeerList();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      filtered: this.props.beerList
    });
  }

  //checkbox filter
  updateBeer = (e) => {
    const {beerList} = this.props;
    let checkList = [];
    if(e.target.checked){
      const currentList = beerList;
      checkList = currentList.filter(item => {
        const lc = item.type.toLowerCase();
        const filter = e.target.name.toLowerCase();
        return lc.includes(filter)
      })
    }else{
      this.setState({
        filtered:[]
      });
    }
    this.setState({
      filtered:checkList,
      checkFiltered:{
        ...this.state.checkFiltered.checkList,
        checkList
      }
    })
    console.log('f');
    console.log(this.state.filtered);
    console.log('check');
    console.log(this.state.checkFiltered.checkList);
  }

  //search filter
  onchangeHandleSerach = (e) => {
    const {beerList} =this.props;
    let currentList = [];
    let newList = [];
    if(e.target.value !== ''){
      currentList = beerList;
      newList = currentList.filter(item => {
        const lc = item.name.toLowerCase();
        const filter = e.target.value.toLowerCase();
        return lc.includes(filter)
      })  
    }else {
      newList = this.props.beerList;
    }
    this.setState({
      filtered:newList
    });
  }

  render() {
    const { t } = this.props; //t는 i18n에서 지원해주는 국가 정보가 들어가있음?
    
    return (
      <FlexContainer direction="row">
        <BeerFilter t={t} updateBeer={this.updateBeer}/>
        <BeerContent>          
          {/* <BeerList beerList={beerList || []} /> */}
          <BeerList onchangeHandleSerach={this.onchangeHandleSerach} filtered={this.state.filtered} />
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