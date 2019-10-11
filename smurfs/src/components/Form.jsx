import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';




export function Form({ formValues, dispatch }) {

  const onValueChange = event => {
    dispatch(actionCreators.changeInput(event.target))
  };

  const onFormSubmit = event => {
    event.preventDefault();
        dispatch(actionCreators.onSubmit(formValues))
};



  return (
    <form className='component' onSubmit={onFormSubmit}>
      <label>Name
        <input value={formValues.name} onChange={onValueChange} name='name' />
      </label><br />

      <label>Age
        <input value={formValues.age} onChange={onValueChange} name='age' />
      </label><br />

      <label>Height
        <input value={formValues.height} onChange={onValueChange} name='height' />
      </label><br />

      <input type='submit' />
    </form>
  );
}

export default connect(
  state => state,
)(Form);
