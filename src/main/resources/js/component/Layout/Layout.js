import React from "react";
import Navigator from "../Navigator/Navigator";
import Content from "../Content/Content";
import {BrowserRouter as Router} from "react-router-dom";
import styles from "./layout.css";


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

                <Router  >
                    <div>
                        <Navigator/>
                        <Content />
                    </div>
                </Router>

            </div>
        );
    }
}




