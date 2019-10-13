import axios from 'axios';
import * as types from './actionTypes';

export function get_smurfs(){
    return function(dispatch){
        axios.get(`http://localhost:3333/smurfs`)
        .then(response => {
            const smurfs = response.data;
            dispatch({type: types.ADD_DATA, payload: smurfs});
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

export function putRequest({id, ...formValues}){
    return function(dispatch){
        axios.put(`http://localhost:3333/smurfs/${id}`, formValues)
        .then(response => {
            const smurfs = response.data;
            dispatch({type: types.ADD_DATA, payload: smurfs});
        })
    }
}

export const prepopulate = (values) => {
    return {
        type: types.PREPOPULATE,
        payload: values
    }
}

export const resetForm = () => {
    return {
        type: types.ADD_FORM
    }
}