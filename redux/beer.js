import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:40001/api/v1';

const loadBeerslistAPI = "/beers"
const loadReviewsListAPI ="/reviews"

// action 타입 정리
export const LOAD_BEERS_LIST = "LOAD_BEERS_LIST"  //비어 리스트 로드

// action 생성함수 정의
export const loadBeersList = (data) => ({
    type:LOAD_BEERS_LIST,
    data:data,
});

// 초기상태 정의
const initialState = {
    beerList:[],    //맥주 리스트

}

// fetch type 정리?
export const fetchLoadBeersList = () => {
    return dispatch => {
        return axios
            .get(loadBeerslistAPI)
            .then(response => {
                dispatch(loadBeersList(response.data));
            })
            .catch(error => {
                return console.log(error)
            })
    }
}

// 리듀서 작성
export default function reducer(state = initialState, action){
    switch(action.type){
        case LOAD_BEERS_LIST:{
            return{
                ...state,
                beerList:action.data
            };
        }
        default:{
            return{
                ...state,
            }
        }
    }
}