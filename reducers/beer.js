import {Actions} from '../actions/beer';

const initialState = {
  beerList: [],
  reviewList: [],
  beer: {},
  loading: false,
  loadingError: false,
};

const ActionTypeFunctions = {
  [Actions.GetBeerByName.type]: (state, action) => {
    return {
      ...state,
      beer: action.payload.beer,
    };
  },
  [Actions.LoadBeerList.type]: (state, action) => {
    return {
      ...state,
      beerList: action.payload.beerList,
    };
  },
  [Actions.LoadReviewList.type]: (state, action) => {
    return {
      ...state,
      reviewList: action.payload.reviewList,
    };
  },
  [Actions.Loading.type]: (state) => {
    return {
      ...state,
      loading: true,
    };
  },
  [Actions.Loaded.type]: (state, action) => {
    return action.payload.error ? {
      ...state,
      beerList: [],
      reviewList: [],
      loading: false,
      loadingError: true,
    } : {
      ...state,
      beerList: action.payload.beerList,
      reviewList: action.payload.reviewList,
      loading: false,
      loadingError: false,
    }
  }
}

export default (state = initialState, action) => {
  const actionTypeFunc = ActionTypeFunctions[action.type];
  return actionTypeFunc ? actionTypeFunc(state, action) : state;
}