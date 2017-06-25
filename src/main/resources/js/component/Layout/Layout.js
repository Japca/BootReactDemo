import React from "react";
import Navigator from "../Navigator/Navigator";
import Content from "../Content/Content";
import {BrowserRouter as Router} from "react-router-dom";
import styles from "./layout.css";
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {reducers} from "../../Reducer/index.js";

let store = createStore(reducers);

export default class Layout extends React.Component {
    constructor() {
        super();
    }

    changeTitle(title) {
        this.setState({title});
    }

    render() {
        return (
            <div className={styles.mainLayout}>
                <Provider store={store}>
                    <Router  >
                        <div>
                            <Navigator/>
                            <Content />
                        </div>
                    </Router>
                </Provider>>

            </div>
        );
    }
}




