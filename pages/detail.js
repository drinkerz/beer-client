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
                            SEOCHO WHEAT
                        </h2>
                        <p>
                            서초위트는 가장 편하게 마실 수 있는 밀맥주로밀맥주 특유의 바나나의 풍미를 느낄 수 있는 맥주이다
                        </p>
                        <ul>
                            <li>
                                <span>Style</span>
                                <p>밀맥주</p>
                            </li>
                            <li>
                                <span>ABV</span>
                                <p>5.48%</p>
                            </li>
                            <li>
                                <span>Tag</span>
                                <span>오 맛있당</span>
                                <span>으 맛없엉</span>
                                <span>루키10</span>
                            </li>
                        </ul>
                    </div>
                    <img src="../static/images/beer/b_12_simg.png" />
                </Beerdescription>
                <Aside>
                    <div className='blind'></div>
                    <ul>
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
`

const Aside = styled.div`
    width:330px;
    height:100%;
    background:#000;


    
    position:absolute;
    right:0;
    top:0;
    z-index:-33;
    > .blind{
        height:122px;
        box-shadow:0 1px 9px -5px rgba(255, 255, 255, 0.4);
    }
    >ul{
        padding:42px;
        >li{
            >img{
                height:62px;
                width:auto;
            }
            dl > dt{
                color:#fff;
            }
            dl > dd{
                color:rgba(255,255,255,0.3)
            }
        }
    }
`

export default withNamespaces('beerDetail')(BeerDetail)