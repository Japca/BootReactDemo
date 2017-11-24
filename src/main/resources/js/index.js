import React from 'react'
import ReactDOM from 'react-dom'
import Layout from './component/Layout/Layout'
// // import "react-rpm";
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { reducers } from './Reducer/index.js'
import ReduxPromise from 'redux-promise'
import reset from '../static/css/reset.css'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)

const app = document.getElementById('app')
ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Layout />
     </Provider>,
    app)

