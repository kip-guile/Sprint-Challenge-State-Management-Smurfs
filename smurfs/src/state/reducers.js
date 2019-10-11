import * as types from './actionTypes';
import { type } from 'os';

const initialState = []
export function smurfReducer(state = initialState, action){
    switch(type.action){
        case types.ADD_DATA:
            return action.payload;
        default:
            return state;
    }
}