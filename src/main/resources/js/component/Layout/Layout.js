import React from 'react';
import Navigator from '../Navigator/Navigator';
import Content from '../Content/Content';
import {BrowserRouter as Router } from 'react-router-dom';
import styles from './layout.css';

export const PAGE_LIST = '/list';
export const PAGE_TABLE = '/table';
export const PAGE_3 = '/page3';
export const PAGE_4 = '/page4';
export const ROOT = '/';

const Layout = () => {

    return (
        <div className={styles.mainLayout}>
            <Router>
                <div>
                    <Navigator/>
                    <Content/>
                </div>
            </Router>
        </div>
    );
};

export default Layout;


