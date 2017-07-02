import React, { Component } from "react";
import Navigator from "../Navigator/Navigator";
import Content from "../Content/Content";
import { BrowserRouter as Router } from "react-router-dom";
import styles from "./layout.css";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { reducers } from "../../Reducer/index.js";
import ReduxPromise from "redux-promise";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

export const PAGE_LIST = "/list";
export const PAGE_TABLE = "/table";
export const ROOT = "/";

export default class Layout extends Component {

    render() {
        return (
            <div className={styles.mainLayout}>
                <Provider store={createStoreWithMiddleware(reducers)}>
                    <Router>
                        <div>
                            <Navigator/>
                            <Content />
                        </div>
                    </Router>
                </Provider>
            </div>
        );
    }
}




