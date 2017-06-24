import React from "react";
import Navigator from "./Navigator";
import Content from "./Content/Content";
import {createBrowserHistory } from "history";
import {BrowserRouter as Router } from "react-router-dom";


export default class Layout extends React.Component {
    constructor() {
        super();
     }

    changeTitle(title) {
        this.setState({title});
    }

    render() {
        return (
            <div>

                <Router basename="/" >
                    <div>
                        <Navigator/>
                        <Content />
                    </div>
                </Router>

            </div>
        );
    }
}




