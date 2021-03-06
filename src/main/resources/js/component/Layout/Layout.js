import React from 'react'
import Navigator from '../Navigator/Navigator'
import Content from '../Content/Content'
import {HashRouter as Router } from 'react-router-dom'
import styles from './layout.css'

export const PAGE_LIST = '/list'
export const PAGE_TABLE = '/table'
export const PLAYER = '/player'
export const BUBBLE = '/bubble'
export const ROOT = '/'

const Layout = () => {

    return (
        <div className={styles.mainLayout}>
            <Router>
                <div className={styles.mainLayout}>
                    <Navigator/>
                    <Content/>
                </div>
            </Router>
        </div>
    )
}

export default Layout
