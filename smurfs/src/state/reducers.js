import * as types from './actionTypes';

const initialState = []
export function smurfReducer(state = initialState, action){
    switch(action.type){
        case types.ADD_DATA:
            return action.payload;
        default:
            return state;
    }
}