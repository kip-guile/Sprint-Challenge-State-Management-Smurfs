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

const initialFormState = {
    name: '',
    age: '',
    height: '',
    id: null,
  };
  export function formReducer(state = initialFormState, action) {
    switch (action.type) {
      case types.ON_INPUT_CHANGE:
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
        case types.PREPOPULATE:
          return {
          ...action.payload
        };
        case types.ADD_DATA:
        case types.ADD_FORM:
          return initialFormState
      default:
        return state;
    }
  }
  