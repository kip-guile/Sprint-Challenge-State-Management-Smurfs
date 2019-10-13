import React from "react";
import ReactDOM from "react-dom";
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from './state/reducers';
import "./index.css";
import App from "./components/App";
import thunk from 'redux-thunk';
import  Form from "./components/Form";
import logger from 'redux-logger';



const godReducer = combineReducers({
    smurfs: reducers.smurfReducer,
    formValues: reducers.formReducer,
})

const store = createStore(
    godReducer,
    applyMiddleware(logger, thunk)
);

ReactDOM.render(<>
<Provider store={store}>
<App />
<Form/>
</Provider>
</>, document.getElementById("root"));
