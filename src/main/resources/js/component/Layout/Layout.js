import React, { Component } from 'react';
import Navigator from '../Navigator/Navigator';
import Content from '../Content/Content';
import { BrowserRouter as Router } from 'react-router-dom';
import styles from './layout.css';

export const PAGE_LIST = '/list';
export const PAGE_TABLE = '/table';
export const ROOT = '/';

export default class Layout extends Component {

    render() {
        return (
            <div className={styles.mainLayout}>

                    <Router>
                        <div>
                            <Navigator/>
                            <Content />
                        </div>
                    </Router>
            </div>
        );
    }
}




