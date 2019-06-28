import React from 'react'
import styled from 'styled-components'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// components
import Layout from '../components/Layout'
// import {dummyBeers} from '../components/dummyBeer';
import Card from '../components/card';

// icon 
// import { faSearch } from "@fortawesome/free-solid-svg-icons";

const BlockContainer = styled.div`
  height: 75px;
`
const FlexContainer = styled.div`
  display: flex;
  flex-flow: ${props => props.direction} wrap;
  justify-content: space-around;
  width: 100%;
  margin: 0 auto;
`
// This is our initialised `NextI18Next` instance
import { withNamespaces, i18n } from '../i18n'

class IndexPage extends React.Component {
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return {
      userAgent,
      namespacesRequired: ['common']
    }
  }

  constructor(props){
    super(props);
    this.state ={
      stateBeer:[
        {
          id: 1,
          title: "SEOCHO WHEAT",
          img: "../static/images/beer/b_12_simg.png",
          Alcohol: "4.2%",
          color:'rgba(236, 231, 81, 0.6)',
          content:
            "서초위트는 가장 편하게 마실 수 있는 밀맥주로밀맥주 특유의 바나나의 풍미를 느낄 수 있는 맥주이다"
        },
        {
          id: 2,
          title: "Hangang Ale",
          img: "../static/images/beer/b_13_simg.png",
          Alcohol: "5.2%",
          color:'rgba(123, 93, 138, 0.6)',
          content:
            "한강에일은 밀 맥아를 베이스로 하여 부드럽고 조밀한 거품이 특징으로 맥아의 단 맛과 오렌지 껍질의 상큼함이 청량감을 높여 편안하게 마실 수 있는 맥주입니다."
        },
        {
          id: 3,
          title: "Seoul Soul Ale",
          img: "../static/images/beer/b_14_simg.png",
          Alcohol: "5.0%",
          color:'rgba(241,118,23,0.6)',
          content:
            "서울 소울 에일은 미국산 홉의 깔끔한 쓴 맛과 프리미엄 맥아의 은은한 단맛이 조화를 이루며 드라이 호핑 공법을 통해 입안과 코 끝에 남는 홉 향기가 특징인 맥주입니다."
        },
        {
          id: 4,
          title: "GANGSEO MILD ALE",
          img: "../static/images/beer/b_8_simg.png",
          color:'rgba(50, 181, 229, 0.6)',
          Alcohol: "4.6%",
          content:
            "강서 마일드 에일는 IBU 25로 가볍게 즐길 수 있는 마일드에일로 몰트의 고소함과 오렌지, 망고등에서 느껴지는 시트러스향이 특징입니다."
        },
        {
          id: 5,
          title: "DALSEO ORANGE ALE",
          img: "../static/images/beer/b_9_simg.png",
          color:'rgba(245, 67, 5, 0.6)',
          Alcohol: "4.2%",
          content:
            "달서 오렌지 에일은 밀몰트와 보리몰트를 혼합, 발효시켜 부드러운 밀향에 오렌지향을 가미시킨 밀맥주로 부드러운 바닐라 풍미에 과하지 않은 상큼한 오렌지향이 특징입니다."
        },
        {
          id: 6,
          title: "JEOLLA ALE",
          img: "../static/images/beer/b_10_simg.png",
          color:'rgba(54, 206, 185, 0.6)',
          Alcohol: "4.5%",
          content:
            "전라에일은 에일맥주지만 라거처럼 깔끔한 맛으로 가볍게 즐길 수 있고, 플로럴과 시트러스향을 함께 느낄 수 있습니다."
        }
      ]
    }
  }  

  componentDidMount() {
    console.log(i18n.language)
    console.log();
  }

  render() {
    return (
      <Layout t={this.props.t}>
        <BlockContainer />
        <FlexContainer direction="row">
          <BeerFilter>
            <h2>Filter by:</h2>
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
                {/* <FontAwesomeIcon icon={faSearch} /> */}
              </span>
              <input placeholder="Search Beer and more..." />
              <Button black>Sort by: Newest</Button>
            </span>
            <CardBox>
              {this.state.stateBeer.map((item) => (
                <Card key={item.id} content={item} />
              ))}
            </CardBox>
          </BeerContent>
        </FlexContainer>
      </Layout>
    )
  }
}

const CardBox = styled.div`
  display: flex;
  padding: 40px 0;
  flex-wrap: wrap;
`;

const BeerFilter = styled.div`
  padding: 0 40px;
  width: 200px;
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
      max-width: 1000px;
      width: 100%;
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

export default withNamespaces('common')(IndexPage)