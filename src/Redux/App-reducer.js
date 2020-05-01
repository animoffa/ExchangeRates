import {getAPI} from "../api/api";


const SET_INITIALIZED = 'SET_INITIALIZED';
const SET_DOLLAR = 'SET_DOLLAR';
const SET_EURO = 'SET_EURO';
const SET_DATE= 'SET_DATE';


let inicialState = {
    dollar: null,
    euro: null,
    date:null
};

const AppReducer = (state = inicialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                dollar: action.dollar,
                euro: action.euro,
            };
        case SET_DOLLAR:
            return {
                ...state,
                dollar: action.dollar,
            };
        case SET_EURO:
            return {
                ...state,
                euro: action.euro,
            };
        case SET_DATE:
            return { ...state, date: action.date};
        default:
            return state;
    }
};

export const setRateAC = (dollar, euro) => ({
    type: SET_INITIALIZED,
    dollar,
    euro,

});
export const setDollarAC = (dollar) => ({
    type: SET_DOLLAR,
    dollar,
});
export const setEuroAC = (euro) => ({
    type: SET_EURO,
    euro,
});
export const setDate=(date)=>({type: SET_DATE, date});


export const getRate = () => (dispatch) => {
    return getAPI.getRateAPI().then(response => {

        let dollar = response.data.Valute.USD.Value;
        let euro = response.data.Valute.EUR.Value;
        dispatch(setRateAC(dollar, euro));
    });
};
export const getDollar = () => (dispatch) => {
    getAPI.getRateAPI().then(response => {

        let dollar = response.data.Valute.USD.Value;
        dispatch(setDollarAC(dollar));
    });
};
export const getEuro = () => (dispatch) => {
    getAPI.getRateAPI().then(response => {
        let euro = response.data.Valute.EUR.Value;
        dispatch(setEuroAC(euro));
    })
};
export const getDate = () => (dispatch) => {
    return getAPI.getRateAPI().then(response => {
        dispatch(setDate(response.data.Date));
    });
};
export default AppReducer;