import axios from 'axios';
import * as types from './actionTypes';

export function get_smurfs(){
    return function(dispatch){
        axios.get(`http://localhost:3333/smurfs`)
        .then(response => {
            const smurfs = response.data;
            dispatch({type: types.ADD_DATA, payload: smurfs});
            console.log(smurfs);
        })
    }
}

export function changeInput(target) {
    return {
      type: types.ON_INPUT_CHANGE,
      payload: {
        name: target.name,
        value: target.value,
      },
    };
}

export function onSubmit(formValues){
    return function(dispatch){
        axios.post('http://localhost:3333/smurfs', formValues)
        .then(response => {
            const smurfs = response.data;
            dispatch({type: types.ADD_DATA, payload: smurfs});
        })
    }
}