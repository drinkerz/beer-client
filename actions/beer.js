import axios from 'axios';
import { API } from '../config';
axios.defaults.baseURL = API;

const loadBeerListAPI = '/beers';
const loadReviewListAPI = '/reviews';

export const Actions = {
  Loading: {    // 나중에 쓰려고 만들어둠
    type: 'BEER_LOADING',
    action: () => ({
      type: Actions.Loading.type,
    }),
  },
  Loaded: {     // 나중에 쓰려고 만들어둠
    type: 'BEER_LOADED',
    action: (beerList, reviewList, error) => ({
      type: Actions.Loaded.type,
      payload: {beerList, reviewList, error},
    }),
  },
  LoadBeerList: {
    type: 'LOAD_BEER_LIST',       // 액션 타입 정의
    action: (beerList) => ({      // 액션 생성함수 정의
      type: Actions.LoadBeerList.type,
      payload: {beerList},
    }),
  },
  LoadReviewList: {
    type: 'LOAD_BEER_REVIEW_LIST',
    action: (reviewList) => ({
      type: Actions.LoadReviewList.type,
      payload: {reviewList},
    })
  }
};

export const fetchLoadBeerList = () => {
  return async (dispatch) => {
    try {
      const beerResponse = await axios.get(loadBeerListAPI);
      // 데이터 있는지 검사
      if ((beerResponse.data !== null) && (beerResponse.data !== undefined) && (beerResponse.data.length !== null) && (beerResponse.data.length !== undefined)) {

        // 데이터에 뭔가 작업할거 있으면 여기서 처리
        dispatch(Actions.LoadBeerList.action(beerResponse.data));
      } else {

        // 데이터 없으면 빈 배열 로드
        dispatch(Actions.LoadBeerList.action([]));
      }

    } catch (error) {
      // 에러 찍고
      console.error(error);

      // 빈배열 로드
      dispatch(Actions.LoadBeerList.action([]));
    }
  }
}

export const fetchLoadReviewList = () => {
  return async (dispatch) => {
    try {
      const reviewResponse = await axios.get(loadReviewListAPI);
      if ((reviewResponse.data !== null) && (reviewResponse.data !== undefined) && (reviewResponse.data.length !== null) && (reviewResponse.data.length !== undefined)) {
        dispatch(Actions.LoadReviewList.action(reviewResponse.data));
      } else {
        dispatch(Actions.LoadReviewList.action([]));
      }
    } catch (error) {
      console.error(error);
      dispatch(Actions.LoadReviewList.action([]));
    }
  }
}

// 다른데서 쓰고있는 방법 붙여둠
export const loadingPageData = () => {
  return async (dispatch) => {
    dispatch(Actions.Loading.action());

    try {
      const beerResponse = await axios.get(loadBeerListAPI);
      if ((beerResponse.data !== null) && (beerResponse.data !== undefined) && (beerResponse.data.length !== null) && (beerResponse.data.length !== undefined)) {
      }

      const reviewResponse = await axios.get(loadReviewListAPI);
      if ((reviewResponse.data !== null) && (reviewResponse.data !== undefined) && (reviewResponse.data.length !== null) && (reviewResponse.data.length !== undefined)) {
      }

      dispatch(Actions.Loaded(beerResponse.data, reviewResponse.data, null));
    } catch (error) {
      console.error(error);
      dispatch(Actions.Loaded(null, null, error));
    }
  }
};