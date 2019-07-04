import React from 'react'
import styled from 'styled-components'
import Avatar from '../Avatar'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBeer } from '@fortawesome/free-solid-svg-icons'

export default class UserReviews extends React.Component{
  render(){
    return(
      <>
        <ReviewsContent>
          <ul>
            <li>
              <PropfileBar>
                <Avatar nickname="유미팬클럽" img={null} size="m"/>
                <NickName>유미팬클럽</NickName>
                <span>리뷰작성수 123</span>
                <span>댓글 4</span>
                <span><FontAwesomeIcon icon={faBeer}/> 1000</span>
              </PropfileBar>
              <Comment>
                파인트 글라스로 330ml 병 제공. slighlty cloudy 호박색의 구리색을 띄우고 중간 정도의 크림색을 띄며 중간 정도의 잔류 물과 약간의 비누 조각이 잔에 남아 있습니다. 코는 감미롭고 프루티하며, 꽃과 수지 홉이 강한 노트가 있습니다. 약간의 선풍적 인 맛. 일부 과일 노트와 함께 매우 거친 맥주. 카라멜과 토피. 중간에서 가벼운 괴로움. 수지. 중 ~ 저 쓴맛. 가벼운 몸. 중 탄산염. 거칠고 약간 달콤한 fatertaste. 중간 마시기. 나쁘지 않다.
              </Comment>
            </li>
            <li>
              <PropfileBar>
              <Avatar nickname="유아인" img='../../static/images/dummyprofile.jpg' size="m"/>
                <NickName>유아인</NickName>
                <span>리뷰작성수 123</span>
                <span>댓글 4</span>
                <span><FontAwesomeIcon icon={faBeer}/> 1000</span>
              </PropfileBar>
              <Comment>
                파인트 글라스로 330ml 병 제공. slighlty cloudy 호박색의 구리색을 띄우고 중간 정도의 크림색을 띄며 중간 정도의 잔류 물과 약간의 비누 조각이 잔에 남아 있습니다. 코는 감미롭고 프루티하며, 꽃과 수지 홉이 강한 노트가 있습니다. 약간의 선풍적 인 맛. 일부 과일 노트와 함께 매우 거친 맥주. 카라멜과 토피. 중간에서 가벼운 괴로움. 수지. 중 ~ 저 쓴맛. 가벼운 몸. 중 탄산염. 거칠고 약간 달콤한 fatertaste. 중간 마시기. 나쁘지 않다.
              </Comment>
            </li>
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

const PropfileBar = styled.div`
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