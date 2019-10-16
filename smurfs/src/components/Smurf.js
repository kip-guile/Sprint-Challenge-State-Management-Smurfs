import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import * as creators from '../state/actionCreators';


export default function Smurf() {
    const quotes = useSelector(state => state.smurfs)
    const dispatch = useDispatch()
      useEffect(() => {
       dispatch(creators.get_smurfs());
      }, [dispatch]);
  
  
      return (
        <Village smurfs={quotes}/>
      );
  }



function Asmurf({smurf}){
    const dispatch = useDispatch()
    return (
        <div>
            <h4>Hello, my name is {smurf.name}</h4>
            <p>I am {smurf.height}tall, that's awesome, right?</p>
            <p>I am pretty old though. {smurf.age} is a huuuge numberr</p>
            <button onClick={() => dispatch(creators.prepopulate(smurf))}>edit</button>
        </div>
    );
}

function Village({smurfs}){
    return (
        <>
        {
            smurfs.map(smurf => (
                <Asmurf key={smurf.id} smurf={smurf}/>
            ))
        }
        </>
    )
}