// @Flow
import React from "react";
import ReactDOM from "react-dom";
import Layout from "./component/Layout/Layout";
// import "react-rpm";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { reducers } from './Reducer/index.js';
import ReduxPromise from 'redux-promise';
import reset from '../static/css/reset.css';

const createStoreWithMiddleware = compose(
    applyMiddleware(ReduxPromise),
    window.devToolsExtension ? window.devToolsExtension() : f => f)
(createStore);

const store = createStoreWithMiddleware(reducers);
export default store;

const app = document.getElementById('app');
ReactDOM.render(
    <Provider store={store}>
       <Layout />
    </Provider>,
    app);


function foo(x: ?number): string {
    if (x) {
        return x;
    }
    return "default string";
}

function test() {
    foo(5);
    let a = 'ahoj';
    let b = 1 * a;
    console.info(b);

}




